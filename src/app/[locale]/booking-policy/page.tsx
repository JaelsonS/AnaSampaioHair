import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath, type PathKey } from '@/i18n/routes'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/config/site'

const TITLE_KEY = 'bookingPolicy' as const
const PATH_KEY = 'bookingPolicy' as PathKey

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: dict.nav[TITLE_KEY],
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, PATH_KEY)}` },
  }
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)

  return (
    <Section className="blog-hero">
      <article className="prose" style={{ paddingTop: '2rem' }}>
        <p className="notice">{dict.common.draftNotice}</p>
        <h1 className="display-lg">{dict.nav[TITLE_KEY]}</h1>
        <p>
          Este documento é um rascunho estrutural do site Ana Sampaio 2.0.
          O conteúdo jurídico final será validado antes de publicação oficial.
        </p>
        <p>
          Para questões sobre dados pessoais ou cookies, contacte {siteConfig.contact.email}.
        </p>
        <p>
          Instituto: {siteConfig.legalName}. Morada: {siteConfig.contact.address.full}.
        </p>
      </article>
    </Section>
  )
}
