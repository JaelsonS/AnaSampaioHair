import { treatmentsHeroWorkSlides } from '@/data/treatments-hero-slides'

export type AboutGalleryItem = {
  id: string
  src: string
  /** Chave em resultLabels (WhatsApp + legenda) */
  label: string
  /** Primeira imagem em destaque na grelha */
  featured?: boolean
}

function workLabel(slideId: string): AboutGalleryItem['label'] {
  if (slideId.includes('corte')) return 'corte'
  if (slideId.includes('mechas')) return 'mechas'
  return 'coloracao'
}

/**
 * Sobre — «Trabalhos realizados»: todos os ficheiros em docs/AnaImg2026/trabalhos/
 * (mesma lista que o carrossel Tratamentos, sem repetir paths).
 * Novas fotos: meter em trabalhos/ → npm run sync:trabalhos-hero
 */
export const aboutTrabalhosGallery: AboutGalleryItem[] = treatmentsHeroWorkSlides.map(
  (slide, index) => ({
    id: `work-${slide.id}`,
    src: slide.src,
    label: workLabel(slide.id),
    featured: index === 0,
  }),
)

export const aboutGalleryAll = aboutTrabalhosGallery

/** @deprecated Só trabalhos — lista vazia */
export const aboutAmbienteGallery: AboutGalleryItem[] = []

/** @deprecated Use aboutTrabalhosGallery */
export const aboutResultsGallery = aboutTrabalhosGallery
