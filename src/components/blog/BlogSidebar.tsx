import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { toAppLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { getOfferByKind } from '@/data/offers'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { IconBookOpen, IconLeaf } from '@/components/icons'

const CATEGORY_HINTS = {
  pt: ['Couro cabeludo', 'Cuidados do fio', 'Cor & mechas', 'Rotina em casa'],
  es: ['Cuero cabelludo', 'Cuidado del cabello', 'Color y mechas', 'Rutina en casa'],
  en: ['Scalp', 'Hair care', 'Color & highlights', 'At-home routine'],
} as const

const SIDEBAR = {
  pt: { explore: 'Explorar', categories: 'Categorias', fromAna: 'Da Ana Sampaio para si', aria: 'Explorar conteúdos' },
  es: { explore: 'Explorar', categories: 'Categorías', fromAna: 'De Ana Sampaio para ti', aria: 'Explorar contenidos' },
  en: { explore: 'Explore', categories: 'Categories', fromAna: 'From Ana Sampaio to you', aria: 'Browse content' },
} as const

export function BlogSidebar({
  locale,
  dict,
  categories = [],
}: {
  locale: UrlLocale
  dict: Dictionary
  categories?: string[]
}) {
  const app = toAppLocale(locale)
  const ebook = getOfferByKind('ebook')
  const course = getOfferByKind('course')
  const copy = SIDEBAR[locale]
  const cats = categories.length > 0 ? categories.slice(0, 8) : [...CATEGORY_HINTS[locale]]

  return (
    <aside className="blog-sidebar" aria-label={copy.aria}>
      <div className="blog-sidebar-block">
        <p className="blog-sidebar-kicker">
          <IconBookOpen width={14} height={14} aria-hidden /> {copy.explore}
        </p>
        <h2 className="blog-sidebar-title">{copy.categories}</h2>
        <ul className="blog-sidebar-list">
          {cats.map((cat) => (
            <li key={cat}>
              <span className="blog-sidebar-chip">{cat}</span>
            </li>
          ))}
        </ul>
      </div>

      {ebook ? (
        <div className="blog-sidebar-block blog-sidebar-ebook">
          <div className="blog-sidebar-ana-row">
            <div className="blog-sidebar-ana-photo">
              <Image
                src={siteConfig.brand.anaAuthor}
                alt="Ana Sampaio"
                fill
                sizes="48px"
                style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
              />
            </div>
            <p className="blog-sidebar-kicker" style={{ margin: 0 }}>
              <IconLeaf width={14} height={14} aria-hidden /> {copy.fromAna}
            </p>
          </div>
          <h2 className="blog-sidebar-title">{ebook.title[app]}</h2>
          <p className="blog-sidebar-text">{ebook.description[app]}</p>
          {ebook.hrefKey === 'external' && ebook.externalUrl ? (
            <a
              className="btn btn-secondary"
              href={ebook.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ebook.cta[app]}
            </a>
          ) : null}
        </div>
      ) : null}

      {course ? (
        <div className="blog-sidebar-block">
          <div className="blog-sidebar-ana-row">
            <div className="blog-sidebar-ana-photo">
              <Image
                src={siteConfig.brand.anaAuthor}
                alt="Ana Sampaio"
                fill
                sizes="48px"
                style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
              />
            </div>
            <p className="blog-sidebar-kicker" style={{ margin: 0 }}>
              {dict.nav.courses}
            </p>
          </div>
          <h2 className="blog-sidebar-title">{course.title[app]}</h2>
          <p className="blog-sidebar-text">{course.description[app]}</p>
          <Button href={localizedPath(locale, 'courses')} variant="ghost">
            {course.cta[app]}
          </Button>
        </div>
      ) : null}

      <div className="blog-sidebar-block blog-sidebar-cta">
        <p className="blog-sidebar-kicker">{dict.nav.book}</p>
        <h2 className="blog-sidebar-title">{dict.blog.railBookTitle}</h2>
        <p className="blog-sidebar-text">{dict.blog.railBookLead}</p>
        <Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button>
        <Link href={localizedPath(locale, 'contact')} className="blog-sidebar-link">
          {dict.nav.contact} →
        </Link>
      </div>
    </aside>
  )
}
