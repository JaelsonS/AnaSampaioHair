'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { treatmentsHeroWorkSlides } from '@/data/treatments-hero-slides'
import { ProtectedMediaFrame } from '@/components/media/ProtectedMediaFrame'

const INTERVAL_MS = 5200

export function TreatmentsWorksCarousel({
  ariaLabel,
  prevLabel,
  nextLabel,
}: {
  ariaLabel: string
  prevLabel: string
  nextLabel: string
}) {
  const slides = treatmentsHeroWorkSlides
  const [index, setIndex] = useState(0)
  const [autoPaused, setAutoPaused] = useState(false)

  const go = useCallback(
    (dir: -1 | 1) => {
      setAutoPaused(true)
      setIndex((i) => (i + dir + slides.length) % slides.length)
    },
    [slides.length],
  )

  useEffect(() => {
    if (autoPaused) {
      const resume = window.setTimeout(() => setAutoPaused(false), INTERVAL_MS * 2)
      return () => window.clearTimeout(resume)
    }
  }, [autoPaused])

  const shouldRenderSlide = useCallback(
    (i: number) => {
      if (slides.length <= 1) return true
      const prev = (index - 1 + slides.length) % slides.length
      const next = (index + 1) % slides.length
      return i === index || i === prev || i === next
    },
    [index, slides.length],
  )

  useEffect(() => {
    if (autoPaused || slides.length < 2) return
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [autoPaused, slides.length])

  return (
    <div
      className="treatments-hero-carousel"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="treatments-hero-carousel-stage">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`treatments-hero-carousel-slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          >
            {shouldRenderSlide(i) ? (
              <ProtectedMediaFrame src={s.src} className="treatments-hero-carousel-protected">
                <Image
                  src={s.src}
                  alt=""
                  fill
                  sizes="(max-width: 899px) 96vw, (max-width: 1199px) 58vw, 640px"
                  quality={82}
                  className="treatments-hero-carousel-img"
                  priority={i === index && index === 0}
                  fetchPriority={i === index && index === 0 ? 'high' : undefined}
                  loading={i === index ? undefined : 'lazy'}
                />
              </ProtectedMediaFrame>
            ) : null}
          </div>
        ))}

        <button
          type="button"
          className="treatments-hero-carousel-nav treatments-hero-carousel-nav--prev"
          onClick={() => go(-1)}
          aria-label={prevLabel}
        >
          ‹
        </button>
        <button
          type="button"
          className="treatments-hero-carousel-nav treatments-hero-carousel-nav--next"
          onClick={() => go(1)}
          aria-label={nextLabel}
        >
          ›
        </button>
      </div>

      <div className="treatments-hero-carousel-dots" role="tablist" aria-label={ariaLabel}>
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`${i + 1} / ${slides.length}`}
            className={`treatments-hero-carousel-dot${i === index ? ' is-active' : ''}`}
            onClick={() => {
              setAutoPaused(true)
              setIndex(i)
            }}
          />
        ))}
      </div>

    </div>
  )
}
