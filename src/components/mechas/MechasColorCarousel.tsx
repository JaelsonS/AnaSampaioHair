'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import type { UrlLocale } from '@/i18n/config'
import { getMechasColorSlides, getMechasGalleryCopy } from '@/data/mechas-gallery'

export function MechasColorCarousel({ locale }: { locale: UrlLocale }) {
  const copy = getMechasGalleryCopy(locale)
  const slides = useMemo(() => getMechasColorSlides(), [])
  const [index, setIndex] = useState(0)
  const touchStart = useRef<number | null>(null)

  const slide = slides[index]
  const phaseLabel = slide.phase === 'before' ? copy.before : copy.after

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + slides.length) % slides.length)
    },
    [slides.length],
  )

  return (
    <section className="mechas-color-carousel" aria-label={copy.galleryTitle}>
      <div className="mechas-color-carousel-head">
        <h3 className="display-md mechas-color-carousel-title">{copy.galleryTitle}</h3>
        <p className="mechas-color-carousel-lead">{copy.galleryLead}</p>
      </div>

      <div className="mechas-color-carousel-frame">
        <button
          type="button"
          className="mechas-color-nav mechas-color-nav-prev"
          onClick={() => go(-1)}
          aria-label={copy.prev}
        >
          ‹
        </button>

        <div
          className="mechas-color-slide media-frame"
          onTouchStart={(e) => {
            touchStart.current = e.changedTouches[0]?.clientX ?? null
          }}
          onTouchEnd={(e) => {
            if (touchStart.current == null) return
            const dx = e.changedTouches[0].clientX - touchStart.current
            touchStart.current = null
            if (Math.abs(dx) < 40) return
            go(dx < 0 ? 1 : -1)
          }}
        >
          <Image
            key={slide.id}
            src={slide.src}
            alt={`${copy.slideLabel} — ${phaseLabel}`}
            fill
            sizes="(max-width: 899px) 92vw, 720px"
            quality={75}
            className="mechas-color-slide-img"
          />
          <span
            className={`mechas-color-badge${slide.phase === 'after' ? ' mechas-color-badge--after' : ''}`}
          >
            {phaseLabel}
          </span>
        </div>

        <button
          type="button"
          className="mechas-color-nav mechas-color-nav-next"
          onClick={() => go(1)}
          aria-label={copy.next}
        >
          ›
        </button>
      </div>

      <p className="mechas-color-counter" aria-live="polite">
        {index + 1} / {slides.length}
      </p>

      <div className="mechas-color-dots" role="tablist" aria-label={copy.galleryTitle}>
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`${s.phase === 'before' ? copy.before : copy.after} — ${i + 1}`}
            className={`mechas-color-dot${i === index ? ' is-active' : ''}${s.phase === 'before' ? ' mechas-color-dot--before' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
