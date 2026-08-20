import Image from 'next/image'
import type { Dictionary } from '@/i18n/get-dictionary'

export function PageHero({
  dict,
  title,
  lead,
  image,
  imageAlt = '',
  objectPosition = 'center center',
  fit = 'cover',
}: {
  dict: Dictionary
  title: string
  lead?: string
  image: string
  imageAlt?: string
  objectPosition?: string
  fit?: 'cover' | 'contain'
}) {
  return (
    <section
      className={`page-hero ${fit === 'contain' ? 'page-hero-contain' : ''}`}
      id="page-hero"
      data-site-hero
      data-header-tone="on-dark"
    >
      <div className="hero-media" aria-hidden={!imageAlt}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="hero-photo"
          style={{ objectFit: fit, objectPosition }}
        />
        <div className="hero-overlay" />
      </div>
      <div className="container page-hero-content">
        <p className="eyebrow" style={{ color: 'var(--brand-mint)' }}>
          {dict.meta.siteName}
        </p>
        <h1 className="display-xl">{title}</h1>
        {lead ? (
          <p className="lead" style={{ color: 'rgba(255,255,255,0.9)' }}>
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  )
}
