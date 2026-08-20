import type { MetadataRoute } from 'next'
import { locales, toAppLocale } from '@/i18n/config'
import { localizedPath, type PathKey } from '@/i18n/routes'
import { getBlogPosts } from '@/data/blog'
import { siteConfig } from '@/config/site'

/**
 * Dynamic sitemap from real routes + PT blog content.
 * Excludes: merged hubs (services/therapy/results/glossary index),
 * legal drafts that should not be pushed as fresh SEO targets beyond basics,
 * and empty ES/EN blog (no fabricated translations).
 */
const indexableStatic: PathKey[] = [
  'home',
  'treatments',
  'about',
  'products',
  'courses',
  'blog',
  'testimonials',
  'contact',
  'booking',
  'faq',
  'terms',
  'privacy',
  'cookies',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const key of indexableStatic) {
      entries.push({
        url: `${siteConfig.url}${localizedPath(locale, key)}`,
        lastModified: new Date(),
        changeFrequency: key === 'blog' || key === 'home' ? 'weekly' : 'monthly',
        priority: key === 'home' ? 1 : key === 'treatments' || key === 'blog' ? 0.85 : 0.65,
      })
    }

    // Blog bodies exist in PT only — index only when a locale has a real slug/body
    const app = toAppLocale(locale)
    for (const post of getBlogPosts(app)) {
      const slug = post.slugs[app]
      if (!slug || !post.body[app]) continue
      entries.push({
        url: `${siteConfig.url}${localizedPath(locale, 'blog', slug)}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  return entries
}
