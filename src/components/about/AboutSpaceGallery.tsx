'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { aboutTrabalhosGallery, type AboutGalleryItem } from '@/data/about-gallery'
import { ProtectedMediaFrame } from '@/components/media/ProtectedMediaFrame'
import { AnaImageRightsOverlay } from '@/components/media/AnaImageRightsOverlay'
import { getWhatsAppUrl } from '@/config/site'

type GalleryCopy = {
  spaceAlt: string
  spaceSalonAlt: string
  spaceResultsEyebrow: string
  resultLabels: Record<string, string>
  lightboxClose: string
  lightboxPrev: string
  lightboxNext: string
  lightboxBookCta: string
  galleryWaAmbiente: string
  galleryWaProcedure: string
}

function itemTitle(item: AboutGalleryItem, copy: GalleryCopy) {
  const label = copy.resultLabels[item.label] ?? copy.spaceAlt
  return `${label} — Instituto Ana Sampaio`
}

function whatsAppMessage(item: AboutGalleryItem, copy: GalleryCopy) {
  const procedure = copy.resultLabels[item.label] ?? item.label
  return copy.galleryWaProcedure.replace('{procedure}', procedure)
}

function GalleryThumb({
  item,
  index,
  copy,
  featured,
  onOpen,
}: {
  item: AboutGalleryItem
  index: number
  copy: GalleryCopy
  featured?: boolean
  onOpen: (index: number) => void
}) {
  const alt = itemTitle(item, copy)
  return (
    <button
      type="button"
      className={`about-space-thumb${featured ? ' about-space-thumb--feature' : ''}`}
      onClick={() => onOpen(index)}
      aria-label={alt}
    >
      <ProtectedMediaFrame src={item.src} className="about-space-thumb-protected">
        <Image
          src={item.src}
          alt={alt}
          fill
          sizes={
            featured
              ? '(max-width: 899px) 100vw, min(960px, 72vw)'
              : '(max-width:560px) 33vw, 180px'
          }
          quality={featured ? 85 : 72}
          priority={featured}
          fetchPriority={featured ? 'high' : undefined}
          loading={featured ? undefined : 'lazy'}
          className="about-space-thumb-img"
        />
      </ProtectedMediaFrame>
    </button>
  )
}

export function AboutSpaceGallery({ copy }: { copy: GalleryCopy }) {
  const items = aboutTrabalhosGallery
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [portalReady, setPortalReady] = useState(false)

  useEffect(() => {
    setPortalReady(true)
  }, [])

  const featuredIndex = items.findIndex((i) => i.featured)
  const featured = featuredIndex >= 0 ? items[featuredIndex] : null
  const gridItems = items.map((item, index) => ({ item, index })).filter(({ item }) => !item.featured)

  const close = useCallback(() => setLightboxIndex(null), [])
  const go = useCallback(
    (dir: -1 | 1) => {
      setLightboxIndex((i) => {
        if (i == null) return i
        return (i + dir + items.length) % items.length
      })
    },
    [items.length],
  )

  useEffect(() => {
    if (lightboxIndex == null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxIndex, close, go])

  const active = lightboxIndex != null ? items[lightboxIndex] : null
  const activeWa = active ? getWhatsAppUrl(whatsAppMessage(active, copy)) : null

  const lightbox =
    active && lightboxIndex != null ? (
      <div
        className="about-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={itemTitle(active, copy)}
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
        <div className="about-lightbox-panel" onClick={(e) => e.stopPropagation()}>
          <figure className="about-lightbox-figure protected-media-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={active.src}
              src={active.src}
              alt={itemTitle(active, copy)}
              className="about-lightbox-photo"
              decoding="async"
            />
            <AnaImageRightsOverlay src={active.src} />
          </figure>
          <div className="about-lightbox-meta">
            <p className="about-lightbox-caption">{itemTitle(active, copy)}</p>
            {activeWa ? (
              <a
                className="btn btn-primary about-lightbox-cta"
                href={activeWa}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.lightboxBookCta}
              </a>
            ) : null}
          </div>
        </div>
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
    ) : null

  return (
    <>
      <div className="about-space-unified">
        <p className="eyebrow">{copy.spaceResultsEyebrow}</p>
        <div className="about-space-ambiente">
          {featured && featuredIndex >= 0 ? (
            <GalleryThumb
              item={featured}
              index={featuredIndex}
              copy={copy}
              featured
              onOpen={setLightboxIndex}
            />
          ) : null}
          <div className="about-space-grid about-space-grid--compact">
            {gridItems.map(({ item, index }) => (
              <GalleryThumb
                key={item.id}
                item={item}
                index={index}
                copy={copy}
                onOpen={setLightboxIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {portalReady && lightbox ? createPortal(lightbox, document.body) : null}
    </>
  )
}
