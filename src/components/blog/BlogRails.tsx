import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { toAppLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { siteConfig } from '@/config/site'
import { getOfferByKind } from '@/data/offers'
import { Button } from '@/components/ui/Button'
import { IconCalendar, IconLeaf, IconSpark } from '@/components/icons'

export function BlogAuthorCard({ dict }: { dict: Dictionary }) {
  return (
    <aside className="blog-rail-card blog-author-card reveal-in">
      <div className="blog-author-photo">
        <Image
          src={siteConfig.brand.anaAuthor}
          alt="Ana Sampaio — autora do blog"
          fill
          sizes="120px"
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
      </div>
      <div>
        <p className="eyebrow">{dict.blog.writtenBy}</p>
        <h2 className="display-md" style={{ fontSize: '1.35rem' }}>
          Ana Sampaio
        </h2>
        <p className="blog-rail-text">{dict.blog.authorBio}</p>
      </div>
    </aside>
  )
}

export function BlogBookingRail({
  locale,
  dict,
}: {
  locale: UrlLocale
  dict: Dictionary
}) {
  return (
    <aside className="blog-rail-card blog-rail-cta reveal-in">
      <span className="icon-badge">
        <IconCalendar />
      </span>
      <h2 className="display-md" style={{ fontSize: '1.35rem' }}>
        {dict.blog.railBookTitle}
      </h2>
      <p className="blog-rail-text">{dict.blog.railBookLead}</p>
      <p className="notice" style={{ fontSize: '0.85rem' }}>
        {dict.common.requestOnlyNotice}
      </p>
      <Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button>
    </aside>
  )
}

export function BlogOffersRail({
  locale,
  dict,
}: {
  locale: UrlLocale
  dict: Dictionary
}) {
  const app = toAppLocale(locale)
  const ebook = getOfferByKind('ebook')
  const course = getOfferByKind('course')

  return (
    <div className="blog-offers-row">
      {ebook ? (
        <aside className="blog-offer-tile reveal-in">
          <div className="blog-offer-media">
            <Image
              src={ebook.image}
              alt=""
              fill
              sizes="360px"
              style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
            />
          </div>
          <div className="blog-offer-copy">
            <p className="eyebrow">
              <IconSpark width={14} height={14} /> {ebook.badge?.[app] ?? 'E-book'}
            </p>
            <h2 className="display-md" style={{ fontSize: '1.3rem' }}>
              {ebook.title[app]}
            </h2>
            <p className="blog-rail-text">{ebook.description[app]}</p>
            {ebook.hrefKey === 'external' && ebook.externalUrl ? (
              <a
                className="btn btn-secondary"
                href={ebook.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ebook.cta[app]}
              </a>
            ) : ebook.hrefKey !== 'external' ? (
              <Button href={localizedPath(locale, ebook.hrefKey)} variant="secondary">
                {ebook.cta[app]}
              </Button>
            ) : null}
          </div>
        </aside>
      ) : null}

      {course ? (
        <aside className="blog-offer-tile blog-rail-course reveal-in">
          <div className="blog-offer-copy">
            <span className="icon-badge">
              <IconLeaf />
            </span>
            <p className="eyebrow">{course.badge?.[app]}</p>
            <h2 className="display-md" style={{ fontSize: '1.3rem' }}>
              {course.title[app]}
            </h2>
            <p className="blog-rail-text">{course.description[app]}</p>
            {course.isPlaceholder ? (
              <p className="notice" style={{ fontSize: '0.82rem' }}>
                {dict.blog.coursePendingNote}
              </p>
            ) : null}
            <Button href={localizedPath(locale, 'courses')} variant="ghost">
              {course.cta[app]}
            </Button>
            <Link href={localizedPath(locale, 'treatments')} className="blog-rail-link">
              {dict.nav.treatments} →
            </Link>
          </div>
        </aside>
      ) : null}
    </div>
  )
}
