import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { isUrlLocale, toAppLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import { getBlogPostBySlug, getBlogPosts } from '@/data/blog'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { BlogBody } from '@/components/blog/BlogBody'
import { BlogOffersRail } from '@/components/blog/BlogRails'
import { CourseLeadForm } from '@/components/courses/CourseLeadForm'
import { extractToc, parseBlogBody, titleCasePt } from '@/lib/blog/parse-body'
import { enrichJournalBlocks } from '@/lib/blog/journal-enrich'
import { siteConfig } from '@/config/site'
import { IconBookOpen, IconCalendar, IconClock, IconList } from '@/components/icons'

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of ['pt', 'es', 'en'] as const) {
    for (const post of getBlogPosts('pt-PT')) {
      const slug = post.slugs['pt-PT']
      if (slug) params.push({ locale, slug })
    }
  }
  const seen = new Set<string>()
  return params.filter((p) => {
    const k = `${p.locale}/${p.slug}`
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale: raw, slug } = await params
  if (!isUrlLocale(raw)) return {}
  const app = toAppLocale(raw)
  const post = getBlogPostBySlug(app, slug)
  if (!post) return {}
  const title = post.seoTitle?.[app] ?? post.title[app]
  const description = post.seoDescription?.[app] ?? post.excerpt[app]
  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'blog', slug)}` },
    openGraph: {
      title: title ?? undefined,
      description: description ?? undefined,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: raw, slug } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  const app = toAppLocale(locale)
  const post = getBlogPostBySlug(app, slug)
  if (!post) notFound()

  const title = titleCasePt(post.title[app] ?? post.title['pt-PT'] ?? '')
  const body = post.body[app] ?? post.body['pt-PT'] ?? ''
  const excerpt = post.excerpt[app] ?? post.excerpt['pt-PT'] ?? ''
  const blocks = enrichJournalBlocks(parseBlogBody(body))
  const toc = extractToc(blocks)
  const related = getBlogPosts(app)
    .filter((p) => p.id !== post.id)
    .slice(0, 3)

  return (
    <article className="blog-article-shell">
      <div className="blog-reading">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href={localizedPath(locale, 'home')}>{dict.nav.home}</Link>
          <span>/</span>
          <Link href={localizedPath(locale, 'blog')}>{dict.nav.blog}</Link>
          <span>/</span>
          <span>{title}</span>
        </nav>

        {locale !== 'pt' ? (
          <p className="notice" style={{ marginBottom: '1rem' }}>
            {dict.blog.contentLanguageNote}
          </p>
        ) : null}

        <header className="blog-article-header">
          <p className="eyebrow blog-article-meta">
            <span className="blog-meta-chip">
              <IconBookOpen width={14} height={14} aria-hidden />
              {post.categories[0]}
            </span>
            <span className="blog-meta-chip">
              <IconCalendar width={14} height={14} aria-hidden />
              {post.publishedAt}
            </span>
            {post.readingMinutes ? (
              <span className="blog-meta-chip">
                <IconClock width={14} height={14} aria-hidden />
                {post.readingMinutes} {dict.common.minutesRead}
              </span>
            ) : null}
          </p>
          <h1 className="blog-article-title">{title}</h1>
          <p className="lead blog-article-excerpt">{excerpt}</p>
          <div className="blog-author-inline">
            <div className="blog-author-inline-photo">
              <Image
                src={siteConfig.brand.anaAuthor}
                alt="Ana Sampaio"
                fill
                sizes="56px"
                style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
              />
            </div>
            <div>
              <strong>Ana Sampaio</strong>
              <p>{dict.blog.writtenBy}</p>
            </div>
          </div>
        </header>

        {post.featuredImage ? (
          <div className="blog-article-hero-media">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt ?? title}
              fill
              priority
              sizes="(max-width:900px) 100vw, 760px"
              quality={85}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ) : null}

        {toc.length > 2 ? (
          <nav className="toc toc-inline" aria-label={dict.blog.toc}>
            <strong>
              <IconList width={16} height={16} aria-hidden /> {dict.blog.toc}
            </strong>
            <div className="toc-chips">
              {toc.map((h) => (
                <a key={h.id} href={`#${h.id}`}>
                  {h.text}
                </a>
              ))}
            </div>
          </nav>
        ) : null}

        <div className="blog-col-main">
          <BlogBody blocks={blocks} locale={locale} />
        </div>

        <div className="blog-article-cta">
          <h2 className="display-md">{dict.blog.railBookTitle}</h2>
          <p>{dict.blog.railBookLead}</p>
          <div className="btn-group">
            <Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button>
            <Button href={localizedPath(locale, 'treatments')} variant="ghost">
              {dict.nav.treatments}
            </Button>
          </div>
        </div>

        <section className="blog-article-offers">
          <BlogOffersRail locale={locale} dict={dict} />
        </section>

        <section className="blog-course-lead">
          <CourseLeadForm compact locale={locale} />
        </section>

        <section className="blog-related">
          <h2 className="display-md">{dict.blog.related}</h2>
          <div className="blog-grid blog-grid-related">
            {related.map((r) => {
              const s = r.slugs[app]
              const t = r.title[app]
              if (!s || !t) return null
              return (
                <Link key={r.id} href={localizedPath(locale, 'blog', s)} className="blog-card-premium">
                  <div className="blog-card-image media-frame">
                    {r.featuredImage ? (
                      <Image
                        src={r.featuredImage}
                        alt={r.featuredImageAlt ?? t}
                        fill
                        sizes="33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : null}
                  </div>
                  <h3 className="display-md" style={{ fontSize: '1.25rem', marginTop: '0.75rem' }}>
                    {titleCasePt(t)}
                  </h3>
                </Link>
              )
            })}
          </div>
        </section>
      </div>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          datePublished: post.publishedAt,
          inLanguage: app,
          author: {
            '@type': 'Person',
            name: 'Ana Sampaio',
            image: `${siteConfig.url}${siteConfig.brand.anaPortrait}`,
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.legalName,
            logo: `${siteConfig.url}${siteConfig.brand.logo}`,
          },
          image: post.featuredImage
            ? post.featuredImage.startsWith('http')
              ? post.featuredImage
              : `${siteConfig.url}${post.featuredImage}`
            : undefined,
          mainEntityOfPage: `${siteConfig.url}${localizedPath(locale, 'blog', slug)}`,
        }}
      />
    </article>
  )
}
