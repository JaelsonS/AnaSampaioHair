import Link from 'next/link'
import type { ReactNode } from 'react'
import type { UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'

/** Keyword → internal path for journal-style in-article linking (PT-first). */
const LINK_RULES: { pattern: RegExp; key: Parameters<typeof localizedPath>[1]; label?: string }[] = [
  { pattern: /\bterapia capilar\b/gi, key: 'treatments' },
  { pattern: /\bmechas?\b/gi, key: 'treatments' },
  { pattern: /\bavalia(ção|cao)\b/gi, key: 'booking' },
  { pattern: /\bforma(ções|coes|ção|cao)\b/gi, key: 'courses' },
  { pattern: /\be-?book\b/gi, key: 'products' },
  { pattern: /\bglossário\b/gi, key: 'blog' },
]

/**
 * Lightly enrich plain paragraphs with internal links (first match only per rule).
 * Does not invent medical claims — only navigational links.
 */
export function linkifyBlogText(text: string, locale: UrlLocale): ReactNode {
  type Piece = { start: number; end: number; key: (typeof LINK_RULES)[number]['key']; text: string }
  const hits: Piece[] = []
  for (const rule of LINK_RULES) {
    rule.pattern.lastIndex = 0
    const m = rule.pattern.exec(text)
    if (!m || m.index == null) continue
    const overlaps = hits.some((h) => !(m.index! + m[0].length <= h.start || m.index! >= h.end))
    if (overlaps) continue
    hits.push({ start: m.index, end: m.index + m[0].length, key: rule.key, text: m[0] })
  }
  hits.sort((a, b) => a.start - b.start)
  if (!hits.length) return text

  const out: ReactNode[] = []
  let cursor = 0
  hits.forEach((h, i) => {
    if (h.start > cursor) out.push(text.slice(cursor, h.start))
    out.push(
      <Link key={`${h.key}-${i}`} href={localizedPath(locale, h.key)} className="article-inline-link">
        {h.text}
      </Link>,
    )
    cursor = h.end
  })
  if (cursor < text.length) out.push(text.slice(cursor))
  return out
}
