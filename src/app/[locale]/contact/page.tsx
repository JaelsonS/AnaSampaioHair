import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { IconMail, IconMapPin, IconPhone } from '@/components/icons'
import { siteConfig } from '@/config/site'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: dict.nav.contact,
    description: dict.sections.contactLead,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'contact')}` },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)

  return (
    <>
      <PageHero dict={dict} title={dict.nav.contact} lead={dict.sections.contactLead} image={siteConfig.brand.heroSalon} />
      <Section>
        <div className="grid-2">
          <div className="prose">
            <SectionHeading title={dict.sections.locationTitle} />
            <p><IconMapPin width={18} height={18} /> {siteConfig.contact.address.full}</p>
            <p><IconPhone width={18} height={18} /> {siteConfig.contact.phoneDisplay}</p>
            <p><IconMail width={18} height={18} /> {siteConfig.contact.email}</p>
            <div>
              <p><strong>{dict.hours.weekdays}</strong> — {dict.hours.weekdaysValue}</p>
              <p><strong>{dict.hours.tuesday}</strong> — {dict.hours.tuesdayValue}</p>
              <p><strong>{dict.hours.sunday}</strong> — {dict.hours.sundayValue}</p>
            </div>
            <div className="btn-group">
              <Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button>
              <Button href={siteConfig.contact.address.mapsUrl} variant="ghost">{dict.common.openMaps}</Button>
            </div>
          </div>
          <div className="media-frame" style={{ minHeight: 360 }}>
            <iframe
              title={dict.sections.locationTitle}
              src={siteConfig.contact.address.mapsEmbed}
              style={{ width: '100%', height: '100%', minHeight: 360, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
