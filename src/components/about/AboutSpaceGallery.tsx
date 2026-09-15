'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  aboutAmbienteGallery,
  aboutResultsGallery,
  type AboutGalleryItem,
} from '@/data/about-gallery'

type GalleryCopy = {
  spaceAlt: string
  spaceAmbienteEyebrow: string
  spaceResultsEyebrow: string
  resultLabels: Record<string, string>
  lightboxClose: string
  lightboxPrev: string
  lightboxNext: string
}

function itemAlt(item: AboutGalleryItem, copy: GalleryCopy, index: number) {
  if (item.category === 'ambiente') {
    return `${copy.spaceAlt} ${index + 1}`
  }
  const label = copy.resultLabels[item.label] ?? copy.spaceAlt
  return `${label} — resultado no instituto Ana Sampaio`
}

export function AboutSpaceGallery({ copy }: { copy: GalleryCopy }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const allItems = [...aboutAmbienteGallery, ...aboutResultsGallery]

  const close = useCallback(() => setLightboxIndex(null), [])
  const go = useCallback(
    (dir: -1 | 1) => {
      setLightboxIndex((i) => {
        if (i == null) return i
        return (i + dir + allItems.length) % allItems.length
      })
    },
    [allItems.length],
  )

  useEffect(() => {
    if (lightboxIndex == null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, close, go])

  const renderGrid = (items: AboutGalleryItem[], startIndex: number) => (
    <div className="about-space-grid about-space-grid--compact">
      {items.map((item, i) => {
        const globalIndex = startIndex + i
        return (
          <button
            key={item.id}
            type="button"
            className="about-space-thumb"
            onClick={() => setLightboxIndex(globalIndex)}
            aria-label={itemAlt(item, copy, i)}
          >
            <Image
              src={item.src}
              alt={itemAlt(item, copy, i)}
              fill
              sizes="(max-width:560px) 33vw, 160px"
              quality={75}
              className="about-space-thumb-img"
            />
          </button>
        )
      })}
    </div>
  )

  const active = lightboxIndex != null ? allItems[lightboxIndex] : null

  return (
    <>
      <div className="about-space-sections">
        <div>
          <p className="eyebrow">{copy.spaceAmbienteEyebrow}</p>
          {renderGrid(aboutAmbienteGallery, 0)}
        </div>
        <div>
          <p className="eyebrow">{copy.spaceResultsEyebrow}</p>
          {renderGrid(aboutResultsGallery, aboutAmbienteGallery.length)}
        </div>
      </div>

      {active && lightboxIndex != null ? (
        <div
          className="about-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={itemAlt(active, copy, lightboxIndex)}
          onClick={close}
        >
          <button type="button" className="about-lightbox-close" onClick={close} aria-label={copy.lightboxClose}>
            ×
          </button>
          <button
            type="button"
            className="about-lightbox-nav about-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            aria-label={copy.lightboxPrev}
          >
            ‹
          </button>
          <figure className="about-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={itemAlt(active, copy, lightboxIndex)}
              width={1200}
              height={1600}
              quality={85}
              className="about-lightbox-img"
              sizes="(max-width:900px) 92vw, 720px"
            />
          </figure>
          <button
            type="button"
            className="about-lightbox-nav about-lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            aria-label={copy.lightboxNext}
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  )
}
