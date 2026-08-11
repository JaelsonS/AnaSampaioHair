import { siteConfig } from '@/config/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { FacebookIcon, InstagramIcon } from '@/components/shared/SocialIcons'

const slots = [
  '/images/gallery/g6.jpg',
  '/images/mechas.jpg',
  '/images/gallery/g2.jpg',
  '/images/nutricao.jpg',
  '/images/gallery/g5.jpg',
  '/images/brushing.jpg',
]

export function Instagram() {
  return (
    <section className="section" aria-labelledby="instagram-title">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading
            eyebrow="No dia a dia"
            title={<span id="instagram-title">Veja o instituto a viver</span>}
            lead={`${siteConfig.social.instagram.handle} — bastidores, resultados e o jeito da Ana cuidar.`}
          />
          <div className="btn-group">
            <Button
              as="a"
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon /> Abrir Instagram
            </Button>
            <Button
              as="a"
              href={siteConfig.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <FacebookIcon /> Facebook
            </Button>
          </div>
        </div>

        <div className="ig-grid ig-grid--rich">
          {slots.map((src) => (
            <a
              key={src}
              className="ig-slot"
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir Instagram ${siteConfig.social.instagram.handle}`}
            >
              <img src={src} alt="" loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
