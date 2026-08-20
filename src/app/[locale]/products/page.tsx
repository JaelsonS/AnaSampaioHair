import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import { getOfferByKind } from '@/data/offers'
import { toAppLocale } from '@/i18n/config'
import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { CourseLeadForm } from '@/components/courses/CourseLeadForm'
import { siteConfig } from '@/config/site'

const CARE = {
  pt: {
    title: 'Cuidados recomendados',
    lead: 'Orientações para casa, alinhadas ao que faz sentido no seu protocolo.',
    allCourses: 'Ver todas as formações →',
    cards: [
      {
        title: 'Óleos e blends',
        lead: 'Cuidado com óleos naturais personalizados no instituto — peça orientação no atendimento.',
        image: '/images/products/oleo.jpg',
      },
      {
        title: 'Hidratação em casa',
        lead: 'Rotinas de hidratação alinhadas ao protocolo definido na avaliação.',
        image: '/images/products/mascara.jpg',
      },
      {
        title: 'Couro cabeludo',
        lead: 'Cuidados de detox e conforto do couro — sempre com indicação personalizada.',
        image: '/images/products/serum.jpg',
      },
    ],
  },
  es: {
    title: 'Cuidados recomendados',
    lead: 'Orientaciones para casa, alineadas con lo que tiene sentido en su protocolo.',
    allCourses: 'Ver todas las formaciones →',
    cards: [
      {
        title: 'Aceites y blends',
        lead: 'Cuidado con aceites naturales personalizados en el instituto — pida orientación en la cita.',
        image: '/images/products/oleo.jpg',
      },
      {
        title: 'Hidratación en casa',
        lead: 'Rutinas de hidratación alineadas al protocolo definido en la valoración.',
        image: '/images/products/mascara.jpg',
      },
      {
        title: 'Cuero cabelludo',
        lead: 'Cuidados de detox y confort del cuero — siempre con indicación personalizada.',
        image: '/images/products/serum.jpg',
      },
    ],
  },
  en: {
    title: 'Recommended care',
    lead: 'At-home guidance aligned with what makes sense in your protocol.',
    allCourses: 'See all training →',
    cards: [
      {
        title: 'Oils and blends',
        lead: 'Personalised natural oils at the institute — ask for guidance during your appointment.',
        image: '/images/products/oleo.jpg',
      },
      {
        title: 'Hydration at home',
        lead: 'Hydration routines aligned with the protocol defined in your assessment.',
        image: '/images/products/mascara.jpg',
      },
      {
        title: 'Scalp care',
        lead: 'Detox and scalp comfort — always with personalised guidance.',
        image: '/images/products/serum.jpg',
      },
    ],
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: dict.nav.products,
    description: dict.sections.productsLead,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'products')}` },
  }
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  const app = toAppLocale(locale)
  const ebook = getOfferByKind('ebook')
  const care = CARE[locale]

  return (
    <>
      <PageHero
        dict={dict}
        title={dict.nav.products}
        lead={dict.sections.productsLead}
        image="/images/nutricao.jpg"
      />

      <Section>
        <SectionHeading
          eyebrow="E-book"
          title={ebook?.title[app] ?? 'E-book'}
          lead={ebook?.description[app]}
        />
        <div className="product-feature">
          <div className="product-feature-media media-frame">
            <Image
              src={ebook?.image ?? siteConfig.brand.anaPortrait}
              alt=""
              fill
              sizes="40vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            {ebook?.hrefKey === 'external' && ebook.externalUrl ? (
              <a className="btn btn-primary" href={ebook.externalUrl} target="_blank" rel="noopener noreferrer">
                {ebook.cta[app]}
              </a>
            ) : (
              <Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button>
            )}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title={care.title} lead={care.lead} />
        <div className="grid-3">
          {care.cards.map((c) => (
            <article key={c.title} className="service-card">
              <div className="service-card-media media-frame">
                <Image src={c.image} alt="" fill sizes="33vw" style={{ objectFit: 'cover' }} />
              </div>
              <h3 className="display-md service-card-title">{c.title}</h3>
              <p className="service-card-text">{c.lead}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="product-courses-band">
          <div>
            <p className="eyebrow">{dict.nav.courses}</p>
            <h2 className="display-lg">{dict.sections.coursesTitle}</h2>
            <p>{dict.sections.coursesLead}</p>
            <Link href={localizedPath(locale, 'courses')} className="blog-rail-link">
              {care.allCourses}
            </Link>
          </div>
          <CourseLeadForm compact locale={locale} />
        </div>
      </Section>
    </>
  )
}
