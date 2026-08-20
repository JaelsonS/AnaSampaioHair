import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import { getFaqItems } from '@/data/faq'
import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return { title: dict.nav.faq, description: dict.sections.faqLead, alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'faq')}` } }
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  const faqs = getFaqItems(locale)

  return (
    <>
      <PageHero dict={dict} title={dict.nav.faq} lead={dict.sections.faqLead} image="/images/avaliar.jpg" />
      <Section>
        <SectionHeading title={dict.sections.faqTitle} lead={dict.sections.faqLead} />
        {faqs.map((item) => (
          <details key={item.id} className="faq-item">
            <summary>{item.question}<span aria-hidden>+</span></summary>
            <p>{item.answer}</p>
          </details>
        ))}
        <div className="btn-group"><Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button></div>
      </Section>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }} />
    </>
  )
}
