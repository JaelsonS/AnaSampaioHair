import type { UrlLocale } from '@/i18n/config'

const G = '/images/mechas/gallery'
const A = '/images/mechas/ana'

/** Four Ana highlight portraits for the mechas cover grid */
export const mechasAnaHighlights = [
  { id: 'ana-01', src: `${A}/ana-mechas-01.webp`, altKey: 'consultoria' as const },
  { id: 'ana-02', src: `${A}/ana-mechas-02.webp`, altKey: 'visagismo' as const },
  { id: 'ana-03', src: `${A}/ana-mechas-03.webp`, altKey: 'tecnica' as const },
  { id: 'ana-04', src: `${A}/ana-mechas-04.webp`, altKey: 'formacao' as const },
] as const

export type MechasColorPair = {
  id: string
  before: string
  after: string
}

/**
 * Pares antes/depois organizados manualmente a partir de docs/img-AnaAtualizado.
 * Ordem: cada caso aparece no carrossel como slide Antes → slide Depois.
 */
export const mechasColorPairs: MechasColorPair[] = [
  { id: 'c00', before: `${G}/coloracao-00-antes.webp`, after: `${G}/coloracao-00-depois.webp` },
  {
    id: 'c01f',
    before: `${G}/coloracao-01-frente-antes.webp`,
    after: `${G}/coloracao-02-frente-depois.webp`,
  },
  { id: 'c02', before: `${G}/coloracao-02-antes.webp`, after: `${G}/coloracao-02-depois.webp` },
  { id: 'c01', before: `${G}/coloracao-01-antes.webp`, after: `${G}/coloracao-01-depois.webp` },
  {
    id: 'c02f',
    before: `${G}/coloracao-02-frente-antes.webp`,
    after: `${G}/coloracao-01-frente-depois.webp`,
  },
  { id: 'c03', before: `${G}/coloracao-03-antes.webp`, after: `${G}/coloracao-03-depois.webp` },
  {
    id: 'c-lado',
    before: `${G}/coloracao-lado01-antes.webp`,
    after: `${G}/coloracao-lado01-depois.webp`,
  },
  {
    id: 'm01',
    before: `${G}/coloracao-mechas01-antes.webp`,
    after: `${G}/coloracao-mechas01-depois.webp`,
  },
  {
    id: 'm02',
    before: `${G}/coloracao-mechas02-antes.webp`,
    after: `${G}/coloracao-mechas02-depois.webp`,
  },
]

export type MechasColorSlide = {
  id: string
  src: string
  phase: 'before' | 'after'
  pairId: string
}

/** Flat slide list: Antes → Depois for each case */
export function getMechasColorSlides(): MechasColorSlide[] {
  return mechasColorPairs.flatMap((pair) => [
    { id: `${pair.id}-antes`, src: pair.before, phase: 'before' as const, pairId: pair.id },
    { id: `${pair.id}-depois`, src: pair.after, phase: 'after' as const, pairId: pair.id },
  ])
}

const COPY: Record<
  UrlLocale,
  {
    galleryTitle: string
    galleryLead: string
    before: string
    after: string
    prev: string
    next: string
    slideLabel: string
    anaAlts: Record<(typeof mechasAnaHighlights)[number]['altKey'], string>
  }
> = {
  pt: {
    galleryTitle: 'Trabalhos reais de coloração',
    galleryLead:
      'Cada transformação aparece em sequência: primeiro o antes, depois o resultado. Use as setas ou deslize.',
    before: 'Antes',
    after: 'Depois',
    prev: 'Anterior',
    next: 'Seguinte',
    slideLabel: 'Coloração e mechas',
    anaAlts: {
      consultoria: 'Ana Sampaio — consultoria de cor e mechas',
      visagismo: 'Ana Sampaio — visagismo capilar',
      tecnica: 'Ana Sampaio — técnica de coloração',
      formacao: 'Ana Sampaio — formação e especialização',
    },
  },
  es: {
    galleryTitle: 'Trabajos reales de coloración',
    galleryLead:
      'Cada transformación en secuencia: primero el antes, luego el resultado. Use las flechas o deslice.',
    before: 'Antes',
    after: 'Después',
    prev: 'Anterior',
    next: 'Siguiente',
    slideLabel: 'Coloración y mechas',
    anaAlts: {
      consultoria: 'Ana Sampaio — consultoría de color y mechas',
      visagismo: 'Ana Sampaio — visagismo capilar',
      tecnica: 'Ana Sampaio — técnica de coloración',
      formacao: 'Ana Sampaio — formación y especialización',
    },
  },
  en: {
    galleryTitle: 'Real colour work',
    galleryLead:
      'Each transformation in sequence: before first, then the result. Use arrows or swipe.',
    before: 'Before',
    after: 'After',
    prev: 'Previous',
    next: 'Next',
    slideLabel: 'Colour and highlights',
    anaAlts: {
      consultoria: 'Ana Sampaio — colour and highlights consultation',
      visagismo: 'Ana Sampaio — hair visagism',
      tecnica: 'Ana Sampaio — colour technique',
      formacao: 'Ana Sampaio — training and expertise',
    },
  },
}

export function getMechasGalleryCopy(locale: UrlLocale) {
  return COPY[locale]
}
