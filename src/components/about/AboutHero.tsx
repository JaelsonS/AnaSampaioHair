import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { HeroAnaPortrait } from '@/components/layout/HeroAnaPortrait'
import { Button } from '@/components/ui/Button'
import { IconArrowRight } from '@/components/icons'
import { getHomeContent } from '@/data/home-i18n'
import { aboutHeroCopyByLocale } from '@/data/content-i18n'

/** Sobre — textos à esquerda, foto original da Ana (com fundo) à direita. */
export function AboutHero({ locale, dict }: { locale: UrlLocale; dict: Dictionary }) {
  const content = getHomeContent(locale)
  const about = content.about
  const location = content.hero.subtitle
  const heroExtra = aboutHeroCopyByLocale[locale]

  return (
    <section
      className="about-hero about-hero-split about-hero--wood"
      id="page-hero"
      data-site-hero
      data-header-tone="on-light"
      data-hero-wood
    >
      <div className="about-hero-split-inner">
        <div className="about-hero-pane about-hero-pane--copy">
          <div className="container about-hero-copy about-hero-copy--split">
            <p className="eyebrow about-hero-eyebrow about-hero-eyebrow--split">{about.eyebrow}</p>
            <h1 className="about-hero-title about-hero-title--split">{about.title}</h1>
            <p className="about-hero-tagline">{heroExtra.tagline}</p>
            <p className="about-hero-lead about-hero-lead--split">{about.lead}</p>
            <p className="about-hero-body">{heroExtra.body}</p>

            <ul className="about-hero-pillars" aria-label={dict.nav.about}>
              {about.pillars.map((pillar) => (
                <li key={pillar.title}>
                  <strong>{pillar.title}</strong>
                  <span>{pillar.body}</span>
                </li>
              ))}
            </ul>

            <div className="btn-group about-hero-actions">
              <Button href={localizedPath(locale, 'booking')}>
                {heroExtra.ctaPrimary}
                <IconArrowRight />
              </Button>
              <Button href={localizedPath(locale, 'treatments')} variant="secondary">
                {dict.nav.treatments}
              </Button>
            </div>

            <p className="hero-location about-hero-location">
              <span className="hero-location-pin" aria-hidden>
                ●
              </span>
              <span>{location}</span>
            </p>
          </div>
        </div>
        <div className="about-hero-pane about-hero-pane--portrait">
          <HeroAnaPortrait alt={content.alts.ana} />
        </div>
      </div>
    </section>
  )
}
