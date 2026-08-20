import Image from 'next/image'
import Link from 'next/link'
import type { UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { siteConfig } from '@/config/site'
import type { LegalBlock, LegalDocument } from '@/data/legal/types'
import { Button } from '@/components/ui/Button'

function renderBlock(block: LegalBlock, key: string) {
  switch (block.type) {
    case 'p':
      return (
        <p key={key} className="legal-p">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={key} className="legal-list">
          {block.items.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={key} className="legal-list legal-list-ol">
          {block.items.map((item, i) => (
            <li key={`${i}-${item.slice(0, 32)}`}>{item}</li>
          ))}
        </ol>
      )
    case 'callout':
      return (
        <aside key={key} className="legal-callout">
          <p>{block.text}</p>
        </aside>
      )
    case 'pending':
      return (
        <aside key={key} className="legal-pending" aria-label="Pendências">
          <p className="legal-pending-title">Informação a confirmar</p>
          <ul>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      )
    case 'table':
      return (
        <div key={key} className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={`${ri}-${ci}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

function identityLabels(locale: UrlLocale) {
  if (locale === 'en') {
    return {
      kicker: 'Controller',
      name: 'Ana Sampaio',
      role: 'Hairdresser and integrative scalp therapist',
    }
  }
  if (locale === 'es') {
    return {
      kicker: 'Responsable',
      name: 'Ana Sampaio',
      role: 'Peluquera y terapeuta capilar integrativa',
    }
  }
  return {
    kicker: 'Responsável',
    name: 'Ana Sampaio',
    role: 'Cabeleireira e terapeuta capilar integrativa',
  }
}

export function LegalPage({
  locale,
  doc,
  current,
}: {
  locale: UrlLocale
  doc: LegalDocument
  current: 'privacy' | 'cookies' | 'terms'
}) {
  const idLabels = identityLabels(locale)
  const related = [
    {
      key: 'privacy' as const,
      href: localizedPath(locale, 'privacy'),
      label: locale === 'en' ? 'Privacy Policy' : locale === 'es' ? 'Privacidad' : 'Privacidade',
    },
    { key: 'cookies' as const, href: localizedPath(locale, 'cookies'), label: 'Cookies' },
    {
      key: 'terms' as const,
      href: localizedPath(locale, 'terms'),
      label: locale === 'en' ? 'Terms' : locale === 'es' ? 'Términos' : 'Termos',
    },
  ]

  return (
    <div className="legal-page">
      <div className="legal-doc-banner">
        <div className="container legal-doc-banner-inner">
          <p className="eyebrow">{siteConfig.name}</p>
          <h1 className="display-xl legal-title">{doc.title}</h1>
          <p className="lead legal-lead">{doc.subtitle}</p>
          <p className="legal-updated">
            {doc.updatedLabel}: <time dateTime="2026-08-20">{doc.updatedAt}</time>
          </p>
        </div>
      </div>

      <div className="container legal-layout">
        <nav className="legal-toc" aria-label={doc.tocLabel}>
          <p className="legal-toc-label">{doc.tocLabel}</p>
          <ol>
            {doc.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="legal-body">
          <aside className="legal-ana-card">
            <div className="legal-ana-photo">
              <Image
                src={siteConfig.brand.anaAuthor}
                alt="Ana Sampaio"
                fill
                sizes="96px"
                style={{ objectFit: 'cover', objectPosition: 'center 12%' }}
              />
            </div>
            <div>
              <p className="legal-ana-kicker">{idLabels.kicker}</p>
              <p className="legal-ana-name">{idLabels.name}</p>
              <p className="legal-ana-role">{idLabels.role}</p>
              <p className="legal-ana-meta">{siteConfig.legalName}</p>
            </div>
          </aside>

          <aside className="legal-review notice">{doc.reviewNotice}</aside>

          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="legal-section">
              <h2 className="display-md">{section.title}</h2>
              {section.blocks.map((block, i) => renderBlock(block, `${section.id}-${i}`))}
            </section>
          ))}

          <footer className="legal-related">
            <h2 className="display-md">{doc.relatedLabel}</h2>
            <ul className="legal-related-links">
              {related
                .filter((r) => r.key !== current)
                .map((r) => (
                  <li key={r.key}>
                    <Link href={r.href}>{r.label}</Link>
                  </li>
                ))}
            </ul>
            <div className="btn-group" style={{ marginTop: '1.25rem' }}>
              <Button href={localizedPath(locale, 'contact')} variant="secondary">
                {locale === 'en' ? 'Contact' : 'Contacto'}
              </Button>
              <Button href={localizedPath(locale, 'booking')}>
                {locale === 'en' ? 'Book' : locale === 'es' ? 'Reservar' : 'Agendar'}
              </Button>
            </div>
          </footer>
        </article>
      </div>
    </div>
  )
}
