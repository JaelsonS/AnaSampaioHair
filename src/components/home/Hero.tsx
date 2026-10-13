'use client'

import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { HeroAnaPortrait } from '@/components/layout/HeroAnaPortrait'
import { getHomeContent, servicesPrefix } from '@/data/home-i18n'
import { getServiceOptionsForLocale } from '@/data/service-i18n'
import { Button } from '@/components/ui/Button'
import { IconArrowRight } from '@/components/icons'
import { openAssistantIntent } from '@/lib/assistant-bridge'
import { HeroTypewriter } from '@/components/home/HeroTypewriter'

export function Hero({ locale, dict }: { locale: UrlLocale; dict: Dictionary }) {
  const content = getHomeContent(locale)
  const h = content.hero
  const serviceNames = getServiceOptionsForLocale(locale).map((s) => s.name)

  return (
    <section
      className="hero-stage hero-stage-split hero-stage--wood"
      id="page-hero"
      data-site-hero
      data-header-tone="on-light"
      data-hero-wood
      aria-label={h.brand}
    >
      <div className="hero-stage-split-inner">
        <div className="hero-stage-pane hero-stage-pane--copy">
          <div className="container hero-stage-copy">
            <p className="hero-brand reveal-stagger" style={{ ['--i' as string]: 0 }}>
              {h.brand}
            </p>
            <h1 className="hero-headline reveal-stagger" style={{ ['--i' as string]: 1 }}>
              {h.title}
            </h1>

            <div className="reveal-stagger" style={{ ['--i' as string]: 2 }}>
              <HeroTypewriter phrases={serviceNames} prefix={servicesPrefix[locale]} />
            </div>

            <p className="hero-lede reveal-stagger" style={{ ['--i' as string]: 3 }}>
              {h.lede}
            </p>

            <div className="btn-group reveal-stagger" style={{ ['--i' as string]: 4 }}>
              <Button
                type="button"
                onClick={() =>
                  openAssistantIntent({ mode: 'gate', topic: content.topics.assessment })
                }
              >
                {h.ctaPrimary}
                <IconArrowRight />
              </Button>
              <Button href={localizedPath(locale, 'treatments')} variant="secondary">
                {dict.nav.treatments}
              </Button>
            </div>

            <p className="hero-location reveal-stagger" style={{ ['--i' as string]: 5 }}>
              <span className="hero-location-pin" aria-hidden>
                ●
              </span>
              <span>{h.subtitle}</span>
            </p>
          </div>
        </div>

        <div className="hero-stage-pane hero-stage-pane--portrait reveal-stagger" style={{ ['--i' as string]: 2 }}>
          <HeroAnaPortrait alt={content.alts.ana} />
        </div>
      </div>
    </section>
  )
}
