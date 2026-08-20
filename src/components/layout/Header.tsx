'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { locales } from '@/i18n/config'
import {
  localizedPath,
  mainNavKeys,
  treatmentsNavGroups,
  contentsNavGroups,
  getPathKeyFromSegment,
  type PathKey,
} from '@/i18n/routes'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { IconClose, IconFlagEs, IconFlagGb, IconFlagPt, IconMenu } from '@/components/icons'
import { cn } from '@/lib/utils'

const localeLabels: Record<UrlLocale, string> = {
  pt: 'PT',
  es: 'ES',
  en: 'EN',
}

const localeFlags: Record<UrlLocale, typeof IconFlagPt> = {
  pt: IconFlagPt,
  es: IconFlagEs,
  en: IconFlagGb,
}

/** Text tone while floating over a hero image. */
export type HeaderTone = 'on-light' | 'on-dark'

type HeaderMode = 'over-hero' | 'solid'

function findHero(): HTMLElement | null {
  return (
    document.getElementById('page-hero') ??
    document.querySelector<HTMLElement>('[data-site-hero]')
  )
}

function readHeroTone(hero: HTMLElement): HeaderTone {
  const raw = hero.getAttribute('data-header-tone')
  if (raw === 'on-light' || raw === 'on-dark') return raw
  if (hero.classList.contains('about-hero') || hero.classList.contains('page-hero')) {
    return 'on-dark'
  }
  if (hero.classList.contains('hero-stage')) return 'on-light'
  return 'on-dark'
}

function heroStillUnderHeader(hero: HTMLElement) {
  const headerH =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72
  return hero.getBoundingClientRect().bottom > headerH + 8
}

function resolvePathKey(pathname: string, locale: UrlLocale): { pathKey: PathKey; slug?: string } {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length < 2 || parts[0] !== locale) return { pathKey: 'home' }
  const segment = parts[1]
  const pathKey = getPathKeyFromSegment(locale, segment)
  if (!pathKey) return { pathKey: 'home' }
  const slug = parts.length > 2 ? parts.slice(2).join('/') : undefined
  return { pathKey, slug }
}

/**
 * Single global header.
 * Dropdowns: CSS hover only (bridge gap fixed). Clicking any option navigates and closes.
 * Language switch keeps the current page key (and slug when present).
 */
export function Header({
  locale,
  dict,
  pathKey: pathKeyProp,
}: {
  locale: UrlLocale
  dict: Dictionary
  pathKey?: PathKey
}) {
  const pathname = usePathname() || `/${locale}`
  const resolved = resolvePathKey(pathname, locale)
  const pathKey = pathKeyProp ?? resolved.pathKey
  const pageSlug = resolved.slug

  const [mode, setMode] = useState<HeaderMode>('solid')
  const [tone, setTone] = useState<HeaderTone>('on-light')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const update = () => {
      const hero = findHero()
      if (!hero) {
        setMode('solid')
        return
      }
      setTone(readHeroTone(hero))
      setMode(heroStillUnderHeader(hero) ? 'over-hero' : 'solid')
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const treatmentsHref = localizedPath(locale, 'treatments')
  const contentsHref = localizedPath(locale, 'blog')
  const close = () => setOpen(false)

  const viewAll =
    locale === 'es' ? 'Ver todos' : locale === 'en' ? 'View all' : 'Ver todos'

  function renderNavItem(key: PathKey) {
    if (key === 'treatments') {
      return (
        <div
          key={key}
          className="nav-item-dropdown"
          onMouseLeave={(e) => e.currentTarget.classList.remove('is-force-closed')}
        >
          <Link
            href={treatmentsHref}
            className="nav-link"
            aria-current={
              pathKey === 'treatments' || pathKey === 'services' || pathKey === 'therapy'
                ? 'page'
                : undefined
            }
            aria-haspopup="true"
          >
            {dict.nav.treatments}
            <span className="nav-caret" aria-hidden>
              ▾
            </span>
          </Link>
          <div className="nav-dropdown" role="menu">
            <div className="nav-dropdown-panel">
              {treatmentsNavGroups.map((g) => (
                <Link
                  key={g.id}
                  href={`${treatmentsHref}${g.anchors}`}
                  role="menuitem"
                  className="nav-dropdown-link"
                  onClick={(e) => {
                    e.currentTarget.closest('.nav-item-dropdown')?.classList.add('is-force-closed')
                  }}
                >
                  {g.label[locale]}
                </Link>
              ))}
              <Link
                href={treatmentsHref}
                role="menuitem"
                className="nav-dropdown-link nav-dropdown-all"
                onClick={(e) => {
                  e.currentTarget.closest('.nav-item-dropdown')?.classList.add('is-force-closed')
                }}
              >
                {viewAll}
              </Link>
            </div>
          </div>
        </div>
      )
    }

    if (key === 'blog') {
      return (
        <div
          key={key}
          className="nav-item-dropdown"
          onMouseLeave={(e) => e.currentTarget.classList.remove('is-force-closed')}
        >
          <Link
            href={contentsHref}
            className="nav-link"
            aria-current={pathKey === 'blog' || pathKey === 'products' ? 'page' : undefined}
            aria-haspopup="true"
          >
            {dict.nav.blog}
            <span className="nav-caret" aria-hidden>
              ▾
            </span>
          </Link>
          <div className="nav-dropdown" role="menu">
            <div className="nav-dropdown-panel">
              {contentsNavGroups.map((g) => (
                <Link
                  key={g.id}
                  href={localizedPath(locale, g.key)}
                  role="menuitem"
                  className="nav-dropdown-link"
                  onClick={(e) => {
                    e.currentTarget.closest('.nav-item-dropdown')?.classList.add('is-force-closed')
                  }}
                >
                  {g.label[locale]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )
    }

    return (
      <Link
        key={key}
        href={localizedPath(locale, key)}
        className="nav-link"
        aria-current={pathKey === key ? 'page' : undefined}
      >
        {dict.nav[key]}
      </Link>
    )
  }

  return (
    <>
      <header
        className={cn(
          'site-header',
          mode === 'over-hero' ? 'is-over-hero' : 'is-solid',
          mode === 'over-hero' && `tone-${tone}`,
        )}
      >
        <div className="container header-inner">
          <Link
            href={localizedPath(locale, 'home')}
            className="brand-link"
            aria-label={siteConfig.name}
          >
            <Image
              src={siteConfig.brand.logo}
              alt={siteConfig.legalName}
              width={160}
              height={56}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="nav-desktop" aria-label="Principal">
            {mainNavKeys.map(renderNavItem)}
          </nav>

          <div className="header-actions">
            <details className="lang-switch">
              <summary aria-label={dict.nav.language}>
                {(() => {
                  const Flag = localeFlags[locale]
                  return <Flag />
                })()}
                <span>{localeLabels[locale]}</span>
              </summary>
              <div className="lang-menu" role="list">
                {locales.map((l) => {
                  const Flag = localeFlags[l]
                  return (
                    <Link
                      key={l}
                      href={localizedPath(l, pathKey, pageSlug)}
                      aria-current={l === locale}
                      role="listitem"
                      hrefLang={l === 'pt' ? 'pt-PT' : l}
                      className="lang-option"
                      onClick={(e) => {
                        const root = (e.currentTarget as HTMLElement).closest('details')
                        if (root) root.removeAttribute('open')
                      }}
                    >
                      <Flag />
                      <span>
                        {localeLabels[l]} —{' '}
                        {l === 'pt' ? 'Português' : l === 'es' ? 'Español' : 'English'}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </details>

            <Button
              href={localizedPath(locale, 'booking')}
              variant={mode === 'over-hero' && tone === 'on-dark' ? 'on-dark' : 'primary'}
              className="header-cta"
            >
              {dict.nav.book}
            </Button>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? dict.nav.close : dict.nav.menu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose width={20} height={20} /> : <IconMenu width={20} height={20} />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={cn('mobile-drawer', open && 'is-open')} hidden={!open}>
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label={dict.nav.menu}>
          <div className="mobile-panel-top">
            <Image src={siteConfig.brand.logo} alt="" width={120} height={42} className="brand-logo" />
            <button type="button" className="menu-toggle" onClick={close} aria-label={dict.nav.close}>
              <IconClose width={20} height={20} />
            </button>
          </div>
          <nav className="mobile-nav">
            {mainNavKeys.map((key) => (
              <Link
                key={key}
                href={localizedPath(locale, key)}
                onClick={close}
                aria-current={pathKey === key ? 'page' : undefined}
              >
                {dict.nav[key]}
              </Link>
            ))}
            <p className="mobile-nav-label">{dict.nav.treatments}</p>
            {treatmentsNavGroups.map((g) => (
              <Link
                key={g.id}
                href={`${treatmentsHref}${g.anchors}`}
                onClick={close}
                className="mobile-nav-sub"
              >
                {g.label[locale]}
              </Link>
            ))}
            <p className="mobile-nav-label">{dict.nav.blog}</p>
            {contentsNavGroups.map((g) => (
              <Link
                key={g.id}
                href={localizedPath(locale, g.key)}
                onClick={close}
                className="mobile-nav-sub"
              >
                {g.label[locale]}
              </Link>
            ))}
            <p className="mobile-nav-label">{dict.nav.language}</p>
            {locales.map((l) => (
              <Link
                key={l}
                href={localizedPath(l, pathKey, pageSlug)}
                onClick={close}
                className="mobile-nav-sub"
                hrefLang={l === 'pt' ? 'pt-PT' : l}
              >
                {localeLabels[l]} — {l === 'pt' ? 'Português' : l === 'es' ? 'Español' : 'English'}
              </Link>
            ))}
          </nav>
          <Button href={localizedPath(locale, 'booking')} onClick={close}>
            {dict.nav.book}
          </Button>
        </div>
      </div>
    </>
  )
}
