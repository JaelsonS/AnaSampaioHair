import { useEffect } from 'react'
import { siteConfig } from '@/config/site'

type SeoProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

export function Seo({
  title,
  description = siteConfig.description,
  path = '/',
  image = siteConfig.seo.ogImage,
  type = 'website',
}: SeoProps) {
  const fullTitle = title
    ? siteConfig.seo.titleTemplate.replace('%s', title)
    : siteConfig.seo.title
  const url = `${siteConfig.url}${path}`

  useEffect(() => {
    document.title = fullTitle
    document.documentElement.lang = siteConfig.lang

    const meta: Record<string, string> = {
      description,
      'og:title': fullTitle,
      'og:description': description,
      'og:type': type,
      'og:url': url,
      'og:image': `${siteConfig.url}${image}`,
      'og:locale': siteConfig.locale,
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': `${siteConfig.url}${image}`,
    }

    Object.entries(meta).forEach(([key, value]) => {
      const attr = key.startsWith('og:') || key.startsWith('twitter:') ? 'property' : 'name'
      const selector =
        attr === 'property' ? `meta[property="${key}"]` : `meta[name="${key}"]`
      let el = document.head.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    })

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [fullTitle, description, url, image, type])

  return null
}
