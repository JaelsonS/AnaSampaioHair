import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { siteConfig } from '@/config/site'
import { cookiesByLocale } from '@/data/legal/cookies'
import { LegalPage } from '@/components/legal/LegalPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const doc = cookiesByLocale[raw]
  return {
    title: doc.title,
    description: doc.metaDescription,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'cookies')}` },
  }
}

export default async function CookiesPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  return <LegalPage locale={locale} doc={cookiesByLocale[locale]} current="cookies" />
}
