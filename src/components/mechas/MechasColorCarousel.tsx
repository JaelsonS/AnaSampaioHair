'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import type { UrlLocale } from '@/i18n/config'
import { HomeCtaButtons } from '@/components/home/HomeCtaButtons'
import { getMechasColorSlides, getMechasGalleryCopy } from '@/data/mechas-gallery'
import { ProtectedMediaFrame } from '@/components/media/ProtectedMediaFrame'

const AUTO_INTERVAL_MS = 5200

type MechasColorCarouselProps = {
  locale: UrlLocale
  techniqueNote?: string
  ctaLabel?: string
  ctaTopic?: string
  ctaServiceName?: string
}

export function MechasColorCarousel({
  locale,
  techniqueNote,
  ctaLabel,
  ctaTopic,
  ctaServiceName,
}: MechasColorCarouselProps) {
  const copy = getMechasGalleryCopy(locale)
  const slides = useMemo(() => getMechasColorSlides(), [])
  const [index, setIndex] = useState(0)
  const [autoPaused, setAutoPaused] = useState(false)
  const touchStart = useRef<number | null>(null)

  const slide = slides[index]
  const phaseLabel = slide.phase === 'before' ? copy.before : copy.after

  const go = useCallback(
    (dir: -1 | 1) => {
      setAutoPaused(true)
      setIndex((i) => (i + dir + slides.length) % slides.length)
    },
    [slides.length],
  )

  useEffect(() => {
    if (autoPaused) {
      const resume = window.setTimeout(() => setAutoPaused(false), AUTO_INTERVAL_MS * 2)
      return () => window.clearTimeout(resume)
    }
  }, [autoPaused])

  useEffect(() => {
    if (autoPaused || slides.length < 2) return
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, AUTO_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [autoPaused, slides.length])

  const showFoot = Boolean(techniqueNote || ctaLabel)

  return (
    <section className="mechas-color-highlight" aria-label={copy.galleryTitle}>
      <div className="mechas-color-highlight-media">
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
          className="mechas-color-slide"
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
          <ProtectedMediaFrame src={slide.src} className="mechas-color-protected">
            <Image
              key={slide.id}
              src={slide.src}
              alt={`${copy.slideLabel} — ${phaseLabel}`}
              width={slide.width}
              height={slide.height}
              sizes="(max-width: 899px) 94vw, (max-width: 1199px) 52vw, 680px"
              quality={90}
              className="mechas-color-slide-img"
              priority={index < 2}
            />
          </ProtectedMediaFrame>
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
            onClick={() => {
              setAutoPaused(true)
              setIndex(i)
            }}
          />
        ))}
      </div>
      </div>

      <div className="mechas-color-highlight-aside">
        <header className="mechas-color-highlight-head">
          <h3 className="display-lg mechas-color-carousel-title">{copy.galleryTitle}</h3>
          <p className="lead mechas-color-carousel-lead">{copy.galleryLead}</p>
        </header>

        {showFoot ? (
          <footer className="mechas-color-highlight-foot">
            {techniqueNote ? <p className="mechas-technique-note">{techniqueNote}</p> : null}
            {ctaLabel && ctaTopic ? (
              <HomeCtaButtons
                primaryLabel={ctaLabel}
                topic={ctaTopic}
                serviceName={ctaServiceName ?? ctaTopic}
              />
            ) : null}
          </footer>
        ) : null}
      </div>
    </section>
  )
}
