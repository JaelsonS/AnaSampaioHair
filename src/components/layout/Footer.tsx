import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { siteConfig, getWhatsAppUrl } from '@/config/site'
import { formatYear } from '@/lib/utils'
import {
  IconFacebook,
  IconInstagram,
  IconMail,
  IconWhatsApp,
} from '@/components/icons'
import { Button } from '@/components/ui/Button'

export function Footer({ locale, dict }: { locale: UrlLocale; dict: Dictionary }) {
  const year = formatYear()
  const wa = getWhatsAppUrl('Olá Ana Sampaio, vim pelo site.')

  return (
    <footer className="footer footer-premium">
      <div className="container footer-premium-inner">
        <div className="footer-cta-band">
          <div>
            <p className="footer-brand-name">{siteConfig.name}</p>
            <p className="footer-brand-line">{dict.footer.tagline}</p>
          </div>
          <Button href={localizedPath(locale, 'booking')} variant="on-dark">
            {dict.nav.book}
          </Button>
        </div>

        <div className="footer-premium-grid">
          <div>
            <p className="footer-col-label">Explorar</p>
            <ul className="footer-list">
              {(
                ['home', 'about', 'treatments', 'courses', 'blog', 'contact'] as const
              ).map((key) => (
                <li key={key}>
                  <Link href={localizedPath(locale, key)}>{dict.nav[key]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-col-label">{dict.nav.treatments}</p>
            <ul className="footer-list">
              <li>
                <Link href={`${localizedPath(locale, 'treatments')}#beleza`}>
                  {locale === 'en' ? 'Beauty' : locale === 'es' ? 'Belleza' : 'Beleza'}
                </Link>
              </li>
              <li>
                <Link href={`${localizedPath(locale, 'treatments')}#terapia`}>
                  {locale === 'en' ? 'Therapy' : locale === 'es' ? 'Terapia' : 'Terapia & couro'}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(locale, 'products')}>E-book</Link>
              </li>
              <li>
                <Link href={localizedPath(locale, 'faq')}>{dict.nav.faq}</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-col-label">{dict.footer.contactUs}</p>
            <ul className="footer-list footer-contact-block">
              <li>
                <a href={`tel:+${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
              <li>
                <span>
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                </span>
              </li>
            </ul>
            <div className="footer-social" aria-label={dict.footer.follow}>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram width={18} height={18} />
              </a>
              <a
                href={siteConfig.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconFacebook width={18} height={18} />
              </a>
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <IconWhatsApp width={18} height={18} />
                </a>
              ) : null}
              <a href={`mailto:${siteConfig.contact.email}`} aria-label="Email">
                <IconMail width={18} height={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-legal-row">
          <nav className="footer-legal-links" aria-label={dict.footer.legal}>
            {(
              ['privacy', 'cookies', 'terms'] as const
            ).map((key) => (
              <Link key={key} href={localizedPath(locale, key)}>
                {dict.nav[key]}
              </Link>
            ))}
            <a
              href={siteConfig.legal.complaintsBookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.nav.complaints}
            </a>
          </nav>
          <p className="footer-copy">
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
          <p className="footer-dev">
            {dict.footer.developedBy}{' '}
            <a href={siteConfig.developer.url} target="_blank" rel="noopener noreferrer">
              {siteConfig.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
