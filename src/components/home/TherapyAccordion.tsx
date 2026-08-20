'use client'

import { useState } from 'react'
import type { UrlLocale } from '@/i18n/config'
import { getHomeContent, therapyLearnMore } from '@/data/home-i18n'
import { openAssistantIntent } from '@/lib/assistant-bridge'
import {
  IconDroplet,
  IconHairStrand,
  IconHairTool,
  IconHeartPulse,
  IconLeaf,
  IconScissors,
  IconSpark,
  IconTarget,
} from '@/components/icons'

const ITEM_ICONS: Record<string, typeof IconLeaf> = {
  queda: IconHairStrand,
  caspa: IconDroplet,
  oleosidade: IconDroplet,
  dermatite: IconHeartPulse,
  calvicie: IconTarget,
  alopecia: IconHeartPulse,
  massagens: IconLeaf,
  chaterapia: IconLeaf,
  musicaterapia: IconSpark,
  blend: IconLeaf,
  'alta-freq': IconSpark,
  led: IconSpark,
  micro: IconTarget,
  reconstrucao: IconHairTool,
  hidrica: IconDroplet,
  lipidica: IconDroplet,
  escova: IconHairTool,
  'corte-bordado': IconScissors,
  detox: IconLeaf,
}

export function TherapyAccordion({ locale = 'pt' }: { locale?: UrlLocale }) {
  const items = getHomeContent(locale).therapyItems
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)
  const cta = therapyLearnMore[locale]

  return (
    <div className="therapy-accordion">
      {items.map((item) => {
        const open = openId === item.id
        const Icon = ITEM_ICONS[item.id] ?? IconSpark
        return (
          <div key={item.id} className={`therapy-item ${open ? 'is-open' : ''}`}>
            <button
              type="button"
              className="therapy-item-head"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span className="therapy-item-label">
                <span className="therapy-item-icon" aria-hidden>
                  <Icon width={18} height={18} />
                </span>
                {item.title}
              </span>
              <span className="therapy-item-toggle" aria-hidden>
                {open ? '−' : '+'}
              </span>
            </button>
            {open ? (
              <div className="therapy-item-body">
                <p>{item.body}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    openAssistantIntent({
                      mode: 'gate',
                      topic: item.title,
                      serviceName: item.title,
                    })
                  }
                >
                  {cta}
                </button>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
