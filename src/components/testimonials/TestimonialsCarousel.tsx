'use client'

import { useEffect, useRef, useState } from 'react'
import type { Testimonial } from '@/types/domain'
import { IconChevronDown, IconGoogle, IconStar } from '@/components/icons'
import { cn } from '@/lib/utils'

const AUTO_MS = 5500

export function TestimonialsCarousel({
  items,
  label = 'Depoimentos',
}: {
  items: Testimonial[]
  label?: string
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const total = items.length

  useEffect(() => {
    if (total <= 1 || paused) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [total, paused])

  if (total === 0) return null

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + total) % total)
  const current = items[index]

  return (
    <div
      className="testimonials-carousel"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current
        touchX.current = null
        if (Math.abs(dx) < 40) return
        go(dx < 0 ? 1 : -1)
      }}
    >
      <div className="testimonials-carousel-track">
        <article
          key={current.id}
          className="testimonial-slide"
          aria-live="polite"
        >
          <div className="testimonial-slide-top">
            <div className="stars stars-gold" aria-label={`${current.rating ?? 5} / 5`}>
              {Array.from({ length: current.rating ?? 5 }).map((_, i) => (
                <IconStar key={i} />
              ))}
            </div>
            {current.source === 'google' || current.serviceCategory === 'Google' ? (
              <span className="google-review-badge">
                <IconGoogle width={18} height={18} aria-hidden />
                Google
              </span>
            ) : (
              <span className="google-review-badge is-soft">{current.serviceCategory ?? 'Cliente'}</span>
            )}
          </div>
          <p className="testimonial-slide-quote">“{current.quote}”</p>
          <footer className="testimonial-slide-foot">
            <strong>{current.name}</strong>
            <span>
              {index + 1} / {total}
            </span>
          </footer>
        </article>
      </div>

      <div className="testimonials-carousel-controls">
        <button
          type="button"
          className="testimonials-nav-btn"
          aria-label="Anterior"
          onClick={() => go(-1)}
        >
          <IconChevronDown width={18} height={18} style={{ transform: 'rotate(90deg)' }} />
        </button>
        <div className="testimonials-dots" role="tablist" aria-label="Slides">
          {items.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={cn('testimonials-dot', i === index && 'is-active')}
              onClick={() => setIndex(i)}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="testimonials-nav-btn"
          aria-label="Seguinte"
          onClick={() => go(1)}
        >
          <IconChevronDown width={18} height={18} style={{ transform: 'rotate(-90deg)' }} />
        </button>
      </div>
    </div>
  )
}
