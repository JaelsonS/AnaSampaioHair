import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { footerNav, legalNav } from '@/data/navigation'
import { formatYear } from '@/lib/utils'
import { FacebookIcon, InstagramIcon } from '@/components/shared/SocialIcons'
import { GoogleReviewCard } from '@/components/shared/GoogleReviewCard'
import { LegalBadges } from '@/components/shared/LegalBadges'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-name">Ana Sampaio</span>
            <span className="brand-tag">Hair</span>
          </div>
          <p>
            Beleza e terapia capilar integrativa em Marinha Grande — cuidado personalizado para
            transformar o visual respeitando a saúde dos fios e do couro cabeludo.
          </p>
          <div className="social-row" aria-label="Redes sociais">
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${siteConfig.social.instagram.handle}`}
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Facebook ${siteConfig.social.facebook.label}`}
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Navegação</h3>
          {footerNav.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <p>{siteConfig.contact.address.full}</p>
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          <a href={`tel:+${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>
          <a href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer">
            Instagram {siteConfig.social.instagram.handle}
          </a>
          <a href={siteConfig.social.facebook.url} target="_blank" rel="noopener noreferrer">
            Facebook / {siteConfig.social.facebook.label}
          </a>
        </div>
      </div>

      <div className="container" style={{ marginTop: '2.5rem' }}>
        <GoogleReviewCard />
      </div>

      <div className="container" style={{ marginTop: '1.5rem' }}>
        <LegalBadges />
      </div>

      <div className="container footer-bottom">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {legalNav.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <p>
          © {formatYear()} {siteConfig.name}. Todos os direitos reservados.
          <br />
          Desenvolvido pela{' '}
          <a href={siteConfig.developer.url} target="_blank" rel="noopener noreferrer">
            {siteConfig.developer.name}
          </a>
        </p>
      </div>
    </footer>
  )
}
