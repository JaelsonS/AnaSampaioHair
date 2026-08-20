import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { BookingRequestForm } from '@/components/booking/BookingRequestForm'
import { siteConfig } from '@/config/site'
import { IconCalendar, IconMapPin, IconPhone, IconShield } from '@/components/icons'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: dict.booking.title,
    description: dict.booking.lead,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'booking')}` },
  }
}

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)

  return (
    <>
      <PageHero
        dict={dict}
        title={dict.booking.title}
        lead={dict.booking.lead}
        image="/images/about/ambiente-3.jpg"
        objectPosition="center 35%"
      />
      <Section>
        <div className="booking-layout">
          <aside className="booking-aside">
            <SectionHeading title={dict.booking.title} lead={dict.booking.lead} />
            <ul className="booking-aside-list">
              <li>
                <IconShield width={20} height={20} aria-hidden />
                <span>{dict.booking.disclaimer}</span>
              </li>
              <li>
                <IconPhone width={20} height={20} aria-hidden />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </li>
              <li>
                <IconMapPin width={20} height={20} aria-hidden />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              <li>
                <IconCalendar width={20} height={20} aria-hidden />
                <span>
                  {dict.hours.weekdays}: {dict.hours.weekdaysValue}
                </span>
              </li>
            </ul>
            <p className="booking-aside-note">
              <Link href={localizedPath(locale, 'contact')}>{dict.nav.contact}</Link>
              {' · '}
              <Link href={localizedPath(locale, 'faq')}>{dict.nav.faq}</Link>
            </p>
          </aside>
          <div className="booking-form-panel">
            <BookingRequestForm locale={locale} dict={dict} />
          </div>
        </div>
      </Section>
    </>
  )
}
