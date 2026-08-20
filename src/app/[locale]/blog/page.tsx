import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { isUrlLocale, toAppLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import { getBlogPosts } from '@/data/blog'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { BlogSidebar } from '@/components/blog/BlogSidebar'
import { titleCasePt } from '@/lib/blog/parse-body'
import { siteConfig } from '@/config/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: dict.nav.blog,
    description: dict.sections.blogLead,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'blog')}` },
  }
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  const appLocale = toAppLocale(locale)
  const posts = getBlogPosts(appLocale)
  const [featured, ...rest] = posts
  const categories = Array.from(
    new Set(posts.flatMap((p) => p.categories).filter(Boolean)),
  ).slice(0, 8)

  function postSlug(post: (typeof posts)[number]) {
    return post.slugs[appLocale] ?? post.slugs['pt-PT']
  }
  function postTitle(post: (typeof posts)[number]) {
    return post.title[appLocale] ?? post.title['pt-PT']
  }
  function postExcerpt(post: (typeof posts)[number]) {
    return post.excerpt[appLocale] ?? post.excerpt['pt-PT']
  }

  return (
    <div className="blog-shell">
      <Section className="blog-hero">
        <Reveal>
          <p className="eyebrow">{dict.meta.siteName}</p>
          <h1 className="display-xl">{dict.nav.blog}</h1>
          <p className="lead" style={{ maxWidth: '36rem' }}>
            {dict.sections.blogLead}
          </p>
          {locale !== 'pt' ? (
            <p className="notice" style={{ marginTop: '0.75rem', maxWidth: '36rem' }}>
              {dict.blog.contentLanguageNote}
            </p>
          ) : null}
          <div className="btn-group" style={{ marginTop: '1rem' }}>
            <Button href={localizedPath(locale, 'products')} variant="secondary">
              E-book
            </Button>
            <Button href={localizedPath(locale, 'courses')} variant="ghost">
              {dict.nav.courses}
            </Button>
          </div>
        </Reveal>

        {featured ? (
          <Reveal>
            <article className="blog-featured">
              <Link
                href={localizedPath(locale, 'blog', postSlug(featured)!)}
                className="blog-featured-link"
              >
                <div className="blog-featured-media">
                  {featured.featuredImage ? (
                    <Image
                      src={featured.featuredImage}
                      alt={featured.featuredImageAlt ?? postTitle(featured)!}
                      fill
                      priority
                      sizes="(max-width:900px) 100vw, 70vw"
                      quality={85}
                      style={{ objectFit: 'cover' }}
                    />
                  ) : null}
                </div>
                <div className="blog-featured-copy">
                  <p className="eyebrow">{dict.blog.featured}</p>
                  <h2 className="display-lg">
                    {titleCasePt(postTitle(featured)!)}
                  </h2>
                  <p>{postExcerpt(featured)}</p>
                  <span className="blog-meta">
                    {featured.publishedAt}
                    {featured.readingMinutes
                      ? ` · ${featured.readingMinutes} ${dict.common.minutesRead}`
                      : ''}
                  </span>
                </div>
              </Link>
            </article>
          </Reveal>
        ) : (
          <p>{dict.notFound.lead}</p>
        )}
      </Section>

      <Section>
        <div className="blog-editorial-layout">
          <div className="blog-editorial-main">
            <h2 className="display-md" style={{ marginBottom: '1.25rem' }}>
              {dict.blog.allArticles}
            </h2>
            <div className="blog-grid blog-grid-premium">
              {rest.map((post, index) => {
                const slug = postSlug(post)
                const title = postTitle(post)
                if (!slug || !title) return null
                return (
                  <article
                    key={post.id}
                    className="blog-card blog-card-premium reveal-in"
                    style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
                  >
                    <Link href={localizedPath(locale, 'blog', slug)}>
                      <div className="blog-card-image media-frame">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.featuredImageAlt ?? title}
                            fill
                            sizes="(max-width:768px) 100vw, 33vw"
                            quality={80}
                            style={{ objectFit: 'cover' }}
                          />
                        ) : null}
                      </div>
                      <p className="eyebrow" style={{ marginTop: '0.85rem' }}>
                        {post.categories[0]}
                      </p>
                      <h3 className="display-md" style={{ fontSize: '1.35rem' }}>
                        {titleCasePt(title)}
                      </h3>
                      <p className="blog-card-excerpt">{postExcerpt(post)}</p>
                      <p className="blog-meta">
                        {post.publishedAt}
                        {post.readingMinutes
                          ? ` · ${post.readingMinutes} ${dict.common.minutesRead}`
                          : ''}
                      </p>
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>

          <BlogSidebar locale={locale} dict={dict} categories={categories} />
        </div>
      </Section>
    </div>
  )
}
