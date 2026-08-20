import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import { getServicesByCategory } from '@/data/services'
import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { AnaSpeaks } from '@/components/brand/AnaSpeaks'
import { ServiceCardCta } from '@/components/services/ServiceCardCta'
import { IconHairStrand, IconScissors } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { treatmentsHubCopy, therapyStepsByLocale } from '@/data/content-i18n'
import { getLocalizedServiceName, getLocalizedServiceShort } from '@/data/service-i18n'

function ServiceGrid({
  locale,
  services,
}: {
  locale: UrlLocale
  services: ReturnType<typeof getServicesByCategory>
}) {
  return (
    <div className="treatments-service-grid">
      {services.map((s) => (
        <article key={s.id} className="service-card">
          <div className="service-card-media media-frame">
            <Image
              src={s.image}
              alt={getLocalizedServiceName(s.id, locale)}
              fill
              sizes="(max-width:900px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h3 className="display-md service-card-title">{getLocalizedServiceName(s.id, locale)}</h3>
          <p className="service-card-text">{getLocalizedServiceShort(s.id, locale)}</p>
          <ServiceCardCta locale={locale} service={s} />
        </article>
      ))}
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  const copy = treatmentsHubCopy[raw]
  return {
    title: dict.nav.treatments,
    description: copy.metaDescription,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'treatments')}` },
  }
}

export default async function TreatmentsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  const copy = treatmentsHubCopy[locale]
  const therapySteps = therapyStepsByLocale[locale]

  const beautyAll = getServicesByCategory('beleza')
  const care = getServicesByCategory('tratamentos')

  /** Salon beauty (visual) — corte bordado goes with fibre care */
  const beauty = beautyAll.filter((s) => s.id !== 'corte-bordado')
  const fioIds = new Set([
    'reconstrucao',
    'reposicao-hidrica',
    'reposicao-lipidica',
    'escova-terapeutica',
    'corte-bordado',
  ])
  const fio = [
    ...care.filter((s) => fioIds.has(s.id)),
    ...beautyAll.filter((s) => s.id === 'corte-bordado'),
  ]
  const terapia = care.filter((s) => !fioIds.has(s.id))

  return (
    <>
      <PageHero
        dict={dict}
        title={dict.nav.treatments}
        lead={copy.heroLead}
        image="/images/about/tratamento-env.jpg"
        objectPosition="center 40%"
      />

      <div className="container" style={{ paddingTop: '1.25rem' }}>
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: localizedPath(locale, 'home') },
            { label: dict.nav.treatments },
          ]}
        />
      </div>

      <Section>
        <SectionHeading
          eyebrow={copy.chooseEyebrow}
          title={copy.chooseTitle}
          lead={copy.chooseLead}
        />
        <div className="treatments-intent-grid">
          <a className="treatments-intent-card" href="#beleza">
            <span className="icon-badge">
              <IconScissors />
            </span>
            <h2 className="display-md" style={{ fontSize: '1.35rem' }}>
              {copy.intentBeautyTitle}
            </h2>
            <p>{copy.intentBeautyBody}</p>
          </a>
          <a className="treatments-intent-card" href="#terapia">
            <span className="icon-badge">
              <IconHairStrand />
            </span>
            <h2 className="display-md" style={{ fontSize: '1.35rem' }}>
              {copy.intentTherapyTitle}
            </h2>
            <p>{copy.intentTherapyBody}</p>
          </a>
          <a className="treatments-intent-card" href="#fio">
            <span className="icon-badge">
              <IconHairStrand />
            </span>
            <h2 className="display-md" style={{ fontSize: '1.35rem' }}>
              {copy.intentFibreTitle}
            </h2>
            <p>{copy.intentFibreBody}</p>
          </a>
        </div>
      </Section>

      <Section>
        <AnaSpeaks quote={copy.quote} />
      </Section>

      <Section id="como-funciona">
        <SectionHeading
          eyebrow={copy.methodEyebrow}
          title={copy.methodTitle}
          lead={copy.methodLead}
        />
        <ol className="therapy-steps-list">
          {therapySteps.map((step, i) => (
            <li key={step.title}>
              <span className="therapy-step-num">{step.number ?? i + 1}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="btn-group" style={{ marginTop: '1.5rem' }}>
          <Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button>
        </div>
      </Section>

      <Section id="beleza">
        <SectionHeading title={copy.beautyTitle} lead={copy.beautyLead} />
        <ServiceGrid locale={locale} services={beauty} />
      </Section>

      <Section id="terapia">
        <SectionHeading
          eyebrow={copy.therapyEyebrow}
          title={copy.therapyTitle}
          lead={copy.therapyLead}
        />
        <ServiceGrid locale={locale} services={terapia} />
      </Section>

      <Section id="fio">
        <SectionHeading title={copy.fibreTitle} lead={copy.fibreLead} />
        <ServiceGrid locale={locale} services={fio} />
      </Section>

      <Section dark>
        <SectionHeading title={dict.sections.finalCtaTitle} lead={dict.common.requestOnlyNotice} />
        <div className="btn-group">
          <Button href={localizedPath(locale, 'booking')} variant="on-dark">
            {dict.nav.book}
          </Button>
          <Button href={localizedPath(locale, 'about')} variant="ghost-on-dark">
            {dict.nav.about}
          </Button>
        </div>
        <p style={{ marginTop: '1rem', opacity: 0.75, fontSize: '0.9rem' }}>
          <Link href={localizedPath(locale, 'courses')} style={{ color: 'inherit' }}>
            {dict.nav.courses} →
          </Link>
        </p>
      </Section>
    </>
  )
}
