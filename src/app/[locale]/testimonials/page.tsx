import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import { getTestimonials } from '@/data/testimonials'
import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { TestimonialsCarousel } from '@/components/testimonials/TestimonialsCarousel'
import { IconGoogle, IconStar } from '@/components/icons'
import { siteConfig } from '@/config/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: dict.nav.testimonials,
    description: dict.sections.testimonialsLead,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'testimonials')}` },
  }
}

export default async function TestimonialsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  const items = getTestimonials()

  return (
    <>
      <PageHero
        dict={dict}
        title={dict.nav.testimonials}
        lead={dict.sections.testimonialsLead}
        image={siteConfig.brand.heroSalon}
        objectPosition="center 40%"
      />
      <Section>
        <SectionHeading
          title={dict.sections.testimonialsTitle}
          lead={dict.sections.testimonialsLead}
          align="center"
        />
        <div className="testimonials-google-bar">
          <IconGoogle width={22} height={22} aria-hidden />
          <span>Google Reviews</span>
          <span className="stars stars-gold" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} />
            ))}
          </span>
        </div>
        <TestimonialsCarousel items={items} label={dict.sections.testimonialsTitle} />
        <div className="testimonials-grid-fallback">
          {items.map((t) => (
            <article key={t.id} className="testimonial-card">
              <div className="testimonial-slide-top">
                <div className="stars stars-gold" aria-label={`${t.rating} / 5`}>
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                    <IconStar key={i} />
                  ))}
                </div>
                {t.source === 'google' ? (
                  <span className="google-review-badge">
                    <IconGoogle width={16} height={16} aria-hidden />
                    Google
                  </span>
                ) : null}
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', lineHeight: 1.45 }}>
                “{t.quote}”
              </p>
              <strong>{t.name}</strong>
            </article>
          ))}
        </div>
        <div className="btn-group btn-group-center" style={{ marginTop: '1.5rem' }}>
          <Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button>
        </div>
      </Section>
    </>
  )
}
