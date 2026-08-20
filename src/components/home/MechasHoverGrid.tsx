'use client'

import Image from 'next/image'
import type { UrlLocale } from '@/i18n/config'
import { getHomeContent, therapyLearnMore } from '@/data/home-i18n'
import { openAssistantIntent } from '@/lib/assistant-bridge'

export function MechasHoverGrid({ locale = 'pt' }: { locale?: UrlLocale }) {
  const mechas = getHomeContent(locale).mechas
  const topics = getHomeContent(locale).topics
  const cta = therapyLearnMore[locale]

  return (
    <div className="mechas-grid">
      {mechas.cards.map((card) => (
        <article key={card.id} className={`mechas-card mechas-card-${card.id}`}>
          <Image
            src={card.image}
            alt=""
            fill
            sizes="(max-width:900px) 100vw, 40vw"
            className="mechas-card-img"
          />
          <div className="mechas-card-overlay">
            <h3>{card.title}</h3>
            <p className="mechas-short">{card.short}</p>
            <p className="mechas-long">{card.long}</p>
            <button
              type="button"
              className="btn btn-on-dark"
              onClick={() =>
                openAssistantIntent({
                  mode: 'gate',
                  topic: card.title,
                  serviceName: topics.mechas,
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
