import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import {
  aboutPageCopy,
  aboutHighlightsByLocale,
  experiencePointsByLocale,
  therapyStepsByLocale,
} from '@/data/content-i18n'
import { getHomeContent } from '@/data/home-i18n'
import { AboutHero } from '@/components/about/AboutHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { AnaSpeaks } from '@/components/brand/AnaSpeaks'
import { IconHeartPulse, IconLeaf, IconShield, IconSpark } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { AboutSpaceGallery } from '@/components/about/AboutSpaceGallery'
import { getWhatsAppUrl } from '@/config/site'

const PHILOSOPHY_ICONS = [IconHeartPulse, IconLeaf, IconShield, IconSpark] as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: dict.nav.about,
    description: dict.sections.aboutLead,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'about')}` },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  const copy = aboutPageCopy[locale]
  const aboutHighlights = aboutHighlightsByLocale[locale]
  const experiencePoints = experiencePointsByLocale[locale]
  const therapySteps = therapyStepsByLocale[locale]
  const ebook = getHomeContent(locale).ebook
  const highlightJoin = locale === 'en' ? 'and' : locale === 'es' ? 'y' : 'e'

  return (
    <>
      <AboutHero dict={dict} title="Ana Sampaio" lead={dict.sections.aboutLead} />

      <div className="container about-crumbs">
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: localizedPath(locale, 'home') },
            { label: dict.nav.about },
          ]}
        />
      </div>

      <Section className="about-speaks-section">
        <AnaSpeaks quote={copy.quote} photoId="ana-studio" />
      </Section>

      <Section>
        <div className="split">
          <div className="prose">
            <p className="eyebrow">{dict.meta.siteName}</p>
            <h2 className="display-lg">{copy.lookTitle}</h2>
            <p>{copy.lookP1}</p>
            <p>
              {copy.lookP2Prefix} {aboutHighlights[0].toLowerCase()} {highlightJoin}{' '}
              {aboutHighlights[1].toLowerCase()}
              {copy.lookP2Suffix}
            </p>
            <ul>
              {aboutHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button>
          </div>
          <div className="portrait-frame about-look-portrait">
            <Image
              src={siteConfig.brand.anaAboutLook}
              alt={copy.anaAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 42vw"
              quality={85}
              className="portrait-img"
            />
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading title={copy.philosophyTitle} />
        <div className="grid-2">
          {experiencePoints.map((p, index) => {
            const Icon = PHILOSOPHY_ICONS[index % PHILOSOPHY_ICONS.length]
            return (
            <article key={p.title} style={{ display: 'grid', gap: '0.65rem' }}>
              <span className="icon-badge">
                <Icon />
              </span>
              <h3 className="display-md" style={{ fontSize: '1.45rem' }}>
                {p.title}
              </h3>
              <p style={{ opacity: 0.88 }}>{p.description}</p>
            </article>
            )
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading title={copy.approachTitle} lead={copy.approachLead} />
        <div className="grid-2">
          {therapySteps.map((s) => (
            <article key={s.number} className="card-interactive">
              <p className="eyebrow">{s.number}</p>
              <h3 className="display-md" style={{ fontSize: '1.4rem' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--ink-soft)' }}>{s.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="split">
          <div className="portrait-frame about-training-portrait">
            <Image
              src={siteConfig.brand.anaAboutTraining}
              alt={copy.anaAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 42vw"
              quality={85}
              className="portrait-img"
            />
          </div>
          <div className="prose">
            <span className="icon-badge">
              <IconShield />
            </span>
            <h2 className="display-lg">{copy.trainingTitle}</h2>
            <p>{copy.trainingBody1}</p>
            <p>{copy.trainingBody2}</p>
            <div className="btn-group">
              <Button href={localizedPath(locale, 'treatments')}>{dict.nav.treatments}</Button>
              <Button href={localizedPath(locale, 'booking')} variant="secondary">
                {dict.nav.book}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="about-book-bridge">
        <div className="about-book-inner">
          <div className="about-book-copy">
            <p className="eyebrow">{copy.bookEyebrow}</p>
            <h2 className="display-lg">{copy.bookTitle}</h2>
            <p className="about-book-lead">{copy.bookLead}</p>
            <p>{copy.bookBody}</p>
            <a
              className="btn btn-primary"
              href={copy.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.bookCta}
            </a>
          </div>
          <figure className="about-book-cover">
            <div className="about-book-cover-frame">
              <Image
                src={siteConfig.brand.bookRaizesAsas}
                alt={copy.bookAlt}
                fill
                sizes="(max-width:768px) 55vw, 280px"
                quality={90}
                className="about-book-cover-img"
              />
            </div>
            <figcaption className="about-book-caption">{copy.bookTitle}</figcaption>
          </figure>
        </div>
      </Section>

      <Section className="about-circulo-bridge">
        <div className="about-circulo-inner">
          <div className="about-circulo-copy">
            <p className="eyebrow">{copy.circuloEyebrow}</p>
            <h2 className="display-lg">{copy.circuloTitle}</h2>
            <p className="about-circulo-lead">{copy.circuloLead}</p>
            <p>{copy.circuloBody1}</p>
            <p className="about-circulo-quote">{copy.circuloBody2}</p>
            <p className="about-circulo-closing">{copy.circuloClosing}</p>
            <a
              className="btn btn-primary"
              href={getWhatsAppUrl(copy.circuloWaMessage) ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.circuloCta}
            </a>
          </div>
        </div>
      </Section>

      <Section className="about-ebook-bridge">
        <div className="about-ebook-inner">
          <div className="about-ebook-copy">
            <p className="eyebrow">{copy.ebookBridgeTitle}</p>
            <h2 className="display-lg">{ebook.title}</h2>
            <p>{ebook.campaignBody ?? ebook.body}</p>
            <a
              className="btn btn-primary"
              href={ebook.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ebook.ctaCampaign}
            </a>
          </div>
          <figure className="about-ebook-portrait">
            <Image
              src={siteConfig.brand.ebookGuia}
              alt={ebook.alt}
              width={1067}
              height={1600}
              sizes="(max-width:768px) 55vw, 280px"
              quality={90}
              className="about-ebook-portrait-img"
            />
          </figure>
        </div>
      </Section>

      <Section>
        <SectionHeading title={copy.spaceTitle} lead={copy.spaceLead} />
        <AboutSpaceGallery
          copy={{
            spaceAlt: copy.spaceAlt,
            spaceAmbienteEyebrow: copy.spaceAmbienteEyebrow,
            spaceResultsEyebrow: copy.spaceResultsEyebrow,
            resultLabels: copy.resultLabels,
            lightboxClose: copy.lightboxClose,
            lightboxPrev: copy.lightboxPrev,
            lightboxNext: copy.lightboxNext,
          }}
        />
      </Section>

      <Section dark>
        <span className="icon-badge" style={{ marginBottom: '1rem' }}>
          <IconLeaf />
        </span>
        <SectionHeading
          title={dict.sections.finalCtaTitle}
          lead={dict.common.requestOnlyNotice}
        />
        <Button href={localizedPath(locale, 'booking')} variant="on-dark">
          {dict.nav.book}
        </Button>
      </Section>
    </>
  )
}
