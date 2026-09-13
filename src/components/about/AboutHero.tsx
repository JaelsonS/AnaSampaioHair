import Image from 'next/image'
import type { Dictionary } from '@/i18n/get-dictionary'
import { siteConfig } from '@/config/site'

/**
 * About page hero — salon atmosphere + Ana on the side (no text over face).
 */
export function AboutHero({
  dict,
  title,
  lead,
}: {
  dict: Dictionary
  title: string
  lead?: string
}) {
  return (
    <section className="about-hero" id="page-hero" data-site-hero data-header-tone="on-dark">
      <div className="about-hero-bg" aria-hidden>
        <Image
          src={siteConfig.brand.heroSalon}
          alt=""
          fill
          priority
          quality={80}
          sizes="100vw"
          className="about-hero-bg-img"
        />
        <div className="about-hero-veil" />
      </div>

      <div className="container about-hero-grid">
        <div className="about-hero-copy">
          <p className="eyebrow about-hero-eyebrow">{dict.meta.siteName}</p>
          <h1 className="about-hero-title">{title}</h1>
          {lead ? <p className="about-hero-lead">{lead}</p> : null}
        </div>
        <figure className="about-hero-portrait">
          <Image
            src={siteConfig.brand.anaHeroHome}
            alt="Ana Sampaio — cabeleireira e terapeuta capilar integrativa"
            width={682}
            height={1024}
            priority
            quality={90}
            sizes="(max-width:900px) 55vw, 380px"
            className="about-hero-portrait-img"
          />
        </figure>
      </div>
    </section>
  )
}
