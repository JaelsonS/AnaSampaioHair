import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { siteConfig } from '@/config/site'
import { servicePolicies } from '@/data/legal/service-policies'
import { ServicePolicyPage } from '@/components/legal/ServicePolicyPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const doc = servicePolicies.cancellation[raw]
  return {
    title: doc.title,
    description: doc.metaDescription,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'cancellation')}` },
  }
}

export default async function CancellationPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  return <ServicePolicyPage locale={raw as UrlLocale} policyKey="cancellation" />
}
