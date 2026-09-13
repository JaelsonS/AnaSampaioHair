'use client'

import { useState } from 'react'
import type { UrlLocale } from '@/i18n/config'
import { getHomeContent, therapyLearnMore } from '@/data/home-i18n'
import { openAssistantIntent } from '@/lib/assistant-bridge'
import {
  IconAward,
  IconBookOpen,
  IconBrandMark,
  IconCheck,
  IconClock,
  IconCookie,
  IconDroplet,
  IconHairStrand,
  IconHairTool,
  IconHeartPulse,
  IconLeaf,
  IconList,
  IconScissors,
  IconSearch,
  IconShield,
  IconSpark,
  IconStar,
  IconTarget,
  IconUserStars,
} from '@/components/icons'

/** One distinct icon per therapy item — no repeats. */
const ITEM_ICONS: Record<string, typeof IconLeaf> = {
  queda: IconHairStrand,
  caspa: IconDroplet,
  oleosidade: IconSearch,
  dermatite: IconHeartPulse,
  calvicie: IconTarget,
  alopecia: IconShield,
  massagens: IconLeaf,
  chaterapia: IconBookOpen,
  musicaterapia: IconSpark,
  blend: IconAward,
  'alta-freq': IconStar,
  led: IconBrandMark,
  micro: IconList,
  reconstrucao: IconHairTool,
  hidrica: IconCheck,
  lipidica: IconCookie,
  escova: IconClock,
  'corte-bordado': IconScissors,
  detox: IconUserStars,
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
