import { useMemo, useState } from 'react'
import { galleryFilters, galleryItems, type GalleryCategory } from '@/data/gallery'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function Gallery({ showAllLink = true }: { showAllLink?: boolean }) {
  const [filter, setFilter] = useState<GalleryCategory>('todos')

  const items = useMemo(() => {
    if (filter === 'todos') return galleryItems
    return galleryItems.filter((item) => item.category === filter)
  }, [filter])

  return (
    <section className="section" id="resultados" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading
            eyebrow="Resultados"
            title={<span id="gallery-title">Veja o cuidado a acontecer</span>}
            lead="Mechas, cor, corte, tratamentos e terapia — resultados reais, com respeito pelo cabelo."
          />
          {showAllLink ? (
            <Button as="link" to="/resultados" variant="secondary">
              Ver galeria completa
            </Button>
          ) : null}
        </div>

        <div className="gallery-filters" role="group" aria-label="Filtrar resultados">
          {galleryFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              className="filter-chip"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {items.map((item) => (
            <article key={item.id} className="gallery-item">
              {item.beforeImage && item.afterImage ? (
                <div className="ba-compare" aria-label={`Antes e depois — ${item.title}`}>
                  <div className="ba-side">
                    <img
                      src={item.beforeImage}
                      alt={`Antes — ${item.title}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>Antes</span>
                  </div>
                  <div className="ba-side">
                    <img
                      src={item.afterImage}
                      alt={`Depois — ${item.title}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>Depois</span>
                  </div>
                </div>
              ) : (
                <div className="media-frame media-frame--parallax" style={{ aspectRatio: '4 / 5' }}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="parallax-img"
                    data-parallax="0.08"
                  />
                </div>
              )}
              <div className="gallery-caption">
                <strong>{item.title}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
