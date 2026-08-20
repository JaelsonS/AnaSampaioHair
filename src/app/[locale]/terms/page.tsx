import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { siteConfig } from '@/config/site'
import { termsByLocale } from '@/data/legal/terms'
import { LegalPage } from '@/components/legal/LegalPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const doc = termsByLocale[raw]
  return {
    title: doc.title,
    description: doc.metaDescription,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'terms')}` },
  }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  return <LegalPage locale={locale} doc={termsByLocale[locale]} current="terms" />
}
