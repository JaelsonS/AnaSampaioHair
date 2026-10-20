import { treatmentsHeroWorkSlides } from '@/data/treatments-hero-slides'

export type AboutGalleryItem = {
  id: string
  src: string
  /** Chave em resultLabels (WhatsApp + legenda) */
  label: string
}

/** Colunas por fila na grelha Sobre (CSS `.about-space-row`). */
export const ABOUT_TRABALHOS_ROW_SIZE = 6

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
/** Sobre — só resultados finais (nunca «antes» nem fotos de arquivo erradas). */
const ABOUT_TRABALHO_SKIP = /imganatrabalhos04|antes/i

const slideById = new Map(treatmentsHeroWorkSlides.map((s) => [s.id, s]))

/** Substituições — foto dourada / evitar ficheiros que falham no optimizador. */
const ABOUT_GALLERY_REPLACE: Record<string, string> = {
  imgcoloracaodepois02frente: 'coloracaodepois05',
}

export const aboutTrabalhosGallery: AboutGalleryItem[] = treatmentsHeroWorkSlides
  .filter((slide) => !ABOUT_TRABALHO_SKIP.test(slide.id))
  .map((slide, index) => {
    const replaceId = ABOUT_GALLERY_REPLACE[slide.id]
    const resolved = replaceId ? slideById.get(replaceId) ?? slide : slide
    return {
      id: `work-${resolved.id}-${index}`,
      src: resolved.src,
      label: workLabel(resolved.id),
    }
  })

export const aboutGalleryAll = aboutTrabalhosGallery

/** @deprecated Só trabalhos — lista vazia */
export const aboutAmbienteGallery: AboutGalleryItem[] = []

/** @deprecated Use aboutTrabalhosGallery */
export const aboutResultsGallery = aboutTrabalhosGallery
