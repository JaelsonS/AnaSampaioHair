import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { siteConfig } from '@/config/site'
import { privacyByLocale } from '@/data/legal/privacy'
import { LegalPage } from '@/components/legal/LegalPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const doc = privacyByLocale[raw]
  return {
    title: doc.title,
    description: doc.metaDescription,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'privacy')}` },
  }
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  return <LegalPage locale={locale} doc={privacyByLocale[locale]} current="privacy" />
}
