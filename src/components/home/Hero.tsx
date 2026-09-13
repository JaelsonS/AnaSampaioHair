'use client'

import Image from 'next/image'
import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { siteConfig } from '@/config/site'
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
    <section className="hero-stage" id="page-hero" data-site-hero data-header-tone="on-light" aria-label={h.brand}>
      <div className="hero-stage-atmosphere" aria-hidden>
        <Image
          src={siteConfig.brand.heroSalon}
          alt=""
          fill
          priority
          quality={80}
          className="hero-stage-atmosphere-img"
          sizes="100vw"
        />
        <div className="hero-stage-veil" />
      </div>

      <div className="container hero-stage-grid">
        <div className="hero-stage-copy">
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

        <div className="hero-stage-portrait reveal-stagger" style={{ ['--i' as string]: 2 }}>
          <div className="hero-portrait-glow" aria-hidden />
          <div className="hero-portrait-ground" aria-hidden />
          <figure className="hero-portrait-cutout hero-portrait-cutout--featured">
            <Image
              src={siteConfig.brand.anaHeroHome}
              alt={content.alts.ana}
              width={682}
              height={1024}
              priority
              quality={90}
              className="hero-portrait-img"
              sizes="(max-width: 640px) 78vw, (max-width: 900px) 68vw, 42vw"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
