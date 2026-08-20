import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { locales, isUrlLocale, htmlLang, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SiteChrome } from '@/components/layout/SiteChrome'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/seo/JsonLd'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: {
      default: dict.meta.defaultTitle,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.defaultDescription,
    alternates: {
      canonical: `${siteConfig.url}/${raw}`,
      languages: {
        'pt-PT': `${siteConfig.url}/pt`,
        es: `${siteConfig.url}/es`,
        en: `${siteConfig.url}/en`,
        'x-default': `${siteConfig.url}/pt`,
      },
    },
    openGraph: {
      type: 'website',
      locale: raw === 'pt' ? 'pt_PT' : raw === 'es' ? 'es_ES' : 'en_GB',
      url: `${siteConfig.url}/${raw}`,
      siteName: siteConfig.name,
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      images: [{ url: siteConfig.seo.ogImage }],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)

  return (
    <div lang={htmlLang[locale]} className="site-shell">
      <a className="skip-link" href="#main">
        {dict.common.skipToContent}
      </a>
      <Header locale={locale} dict={dict} />
      <main id="main" className="site-main">
        {children}
      </main>
      <Footer locale={locale} dict={dict} />
      <SiteChrome locale={locale} dict={dict} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BeautySalon',
          name: siteConfig.legalName,
          url: siteConfig.url,
          image: `${siteConfig.url}${siteConfig.brand.logo}`,
          telephone: siteConfig.contact.phoneDisplay,
          email: siteConfig.contact.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.contact.address.street,
            addressLocality: siteConfig.contact.address.city,
            addressRegion: siteConfig.contact.address.district,
            postalCode: siteConfig.contact.address.postalCode,
            addressCountry: 'PT',
          },
          sameAs: [siteConfig.social.instagram.url, siteConfig.social.facebook.url],
        }}
      />
    </div>
  )
}
