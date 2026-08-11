import type { ReactNode } from 'react'
import { BookingButton } from '@/components/ui/Button'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  lead: string
  image: string
  imageAlt: string
  ctaLabel?: string
  service?: string
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  ctaLabel = 'Agendar com a Ana',
  service,
}: PageHeroProps) {
  return (
    <section className="page-hero page-hero--visual" id="page-hero">
      <div className="page-hero__media" aria-hidden={!imageAlt}>
        <img
          src={image}
          alt={imageAlt}
          className="parallax-img"
          data-parallax="0.2"
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
        />
        <div className="page-hero__overlay" />
      </div>
      <div className="container page-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-xl">{title}</h1>
        <p className="lead">{lead}</p>
        <div className="btn-group" style={{ marginTop: '1.5rem' }}>
          <BookingButton label={ctaLabel} service={service} variant="light" />
        </div>
      </div>
    </section>
  )
}
