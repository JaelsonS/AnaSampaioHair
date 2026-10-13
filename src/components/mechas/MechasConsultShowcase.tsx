'use client'

import Image from 'next/image'
import type { UrlLocale } from '@/i18n/config'
import { getHomeContent, therapyLearnMore } from '@/data/home-i18n'
import { openAssistantIntent } from '@/lib/assistant-bridge'
import { ProtectedMediaFrame } from '@/components/media/ProtectedMediaFrame'

const SLOT = ['ana-01', 'ana-02', 'ana-03'] as const

/** Três pilares da consultoria — mosaico + overlay (Íris, Pele, Coloração). */
export function MechasConsultShowcase({ locale }: { locale: UrlLocale }) {
  const content = getHomeContent(locale)
  const cards = content.mechas.cards.slice(0, 3)
  const cta = therapyLearnMore[locale]
  const topic = content.topics.mechas

  return (
    <div className="mechas-consult-showcase" aria-label={content.mechas.title}>
      {cards.map((card, index) => (
        <article
          key={card.id}
          className={`mechas-consult-cell mechas-consult-cell--${SLOT[index]} mechas-consult-cell--${card.id}`}
        >
          <ProtectedMediaFrame src={card.image} className="mechas-consult-protected">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 899px) 92vw, (max-width: 1199px) 560px, 640px"
              quality={85}
              className={`mechas-consult-img mechas-consult-img--${card.id}`}
            />
          </ProtectedMediaFrame>
          <div className="mechas-consult-overlay">
            <h3>{card.title}</h3>
            <p className="mechas-consult-short">{card.short}</p>
            <p className="mechas-consult-long">{card.long}</p>
            <button
              type="button"
              className="btn btn-on-dark"
              onClick={() =>
                openAssistantIntent({
                  mode: 'gate',
                  topic: card.title,
                  serviceName: topic,
                })
              }
            >
              {cta}
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}
