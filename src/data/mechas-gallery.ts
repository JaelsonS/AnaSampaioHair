import type { UrlLocale } from '@/i18n/config'

const G = '/images/mechas/gallery'
const A = '/images/mechas/ana'

/** Três retratos da Ana — consultoria de mechas (sem duplicados) */
export const mechasAnaHighlights = [
  { id: 'ana-01', src: `${A}/ana-mechas-01.webp`, altKey: 'consultoria' as const },
  { id: 'ana-02', src: `${A}/ana-mechas-02.webp`, altKey: 'visagismo' as const },
  { id: 'ana-03', src: `${A}/ana-mechas-03.webp`, altKey: 'tecnica' as const },
] as const

export type MechasColorPair = {
  id: string
  before: string
  after: string
  /** px — evita cortes no carrossel (object-fit contain) */
  beforeSize: { width: number; height: number }
  afterSize: { width: number; height: number }
}

/**
 * Carrossel «Trabalhos reais de coloração pessoal» — ordem fixa (Antes → Depois por caso).
 * Fonte: docs/AnaImg2026 → `npm run sync:coloracao-pessoal`
 * Novos pares: acrescentar ao array (id 02, 03, …) e correr o sync.
 */
export const mechasColorPairs: MechasColorPair[] = [
  {
    id: 'pessoal-01',
    before: `${G}/coloracao-pessoal-01-antes.webp`,
    after: `${G}/coloracao-pessoal-01-depois.webp`,
    beforeSize: { width: 1800, height: 3173 },
    afterSize: { width: 1800, height: 2876 },
  },
  {
    id: 'pessoal-02',
    before: `${G}/coloracao-pessoal-02-antes.webp`,
    after: `${G}/coloracao-pessoal-02-depois.webp`,
    beforeSize: { width: 1800, height: 2400 },
    afterSize: { width: 1800, height: 2691 },
  },
  {
    id: 'pessoal-03',
    before: `${G}/coloracao-pessoal-03-antes.webp`,
    after: `${G}/coloracao-pessoal-03-depois.webp`,
    beforeSize: { width: 1800, height: 2403 },
    afterSize: { width: 1800, height: 2403 },
  },
]

export type MechasColorSlide = {
  id: string
  src: string
  phase: 'before' | 'after'
  pairId: string
  width: number
  height: number
}

/** Flat slide list: Antes → Depois for each case */
export function getMechasColorSlides(): MechasColorSlide[] {
  return mechasColorPairs.flatMap((pair) => [
    {
      id: `${pair.id}-antes`,
      src: pair.before,
      phase: 'before' as const,
      pairId: pair.id,
      width: pair.beforeSize.width,
      height: pair.beforeSize.height,
    },
    {
      id: `${pair.id}-depois`,
      src: pair.after,
      phase: 'after' as const,
      pairId: pair.id,
      width: pair.afterSize.width,
      height: pair.afterSize.height,
    },
  ])
}

/** Imagens «depois» aprovadas — reutilizar noutros destaques do site */
export function getMechasColoracaoDepoisImages(): { src: string; alt: string }[] {
  return mechasColorPairs.map((pair, i) => ({
    src: pair.after,
    alt: `Coloração pessoal — resultado ${i + 1}`,
  }))
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
    galleryTitle: 'Trabalhos reais de coloração pessoal',
    galleryLead:
      'Cada transformação em sequência: primeiro o antes, depois o resultado. Use as setas ou deslize.',
    before: 'Antes',
    after: 'Depois',
    prev: 'Anterior',
    next: 'Seguinte',
    slideLabel: 'Coloração pessoal',
    anaAlts: {
      consultoria: 'Ana Sampaio — consultoria de cor e mechas',
      visagismo: 'Ana Sampaio — visagismo capilar',
      tecnica: 'Ana Sampaio — técnica de coloração',
    },
  },
  es: {
    galleryTitle: 'Trabajos reales de coloración personal',
    galleryLead:
      'Cada transformación en secuencia: primero el antes, luego el resultado. Use las flechas o deslice.',
    before: 'Antes',
    after: 'Después',
    prev: 'Anterior',
    next: 'Siguiente',
    slideLabel: 'Coloración personal',
    anaAlts: {
      consultoria: 'Ana Sampaio — consultoría de color y mechas',
      visagismo: 'Ana Sampaio — visagismo capilar',
      tecnica: 'Ana Sampaio — técnica de coloración',
    },
  },
  en: {
    galleryTitle: 'Real personal colour work',
    galleryLead:
      'Each transformation in sequence: before first, then the result. Use arrows or swipe.',
    before: 'Before',
    after: 'After',
    prev: 'Previous',
    next: 'Next',
    slideLabel: 'Personal colour',
    anaAlts: {
      consultoria: 'Ana Sampaio — colour and highlights consultation',
      visagismo: 'Ana Sampaio — hair visagism',
      tecnica: 'Ana Sampaio — colour technique',
    },
  },
}

export function getMechasGalleryCopy(locale: UrlLocale) {
  return COPY[locale]
}
