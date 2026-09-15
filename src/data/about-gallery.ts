import { siteConfig } from '@/config/site'

const G = '/images/mechas/gallery'
const R = '/images/results'

export type AboutGalleryItem = {
  id: string
  src: string
  category: 'ambiente' | 'resultado'
  /** i18n key suffix for alt text */
  label: string
}

/** Instituto — ambiente real */
export const aboutAmbienteGallery: AboutGalleryItem[] = siteConfig.brand.ambiente.map(
  (src, i) => ({
    id: `amb-${i + 1}`,
    src,
    category: 'ambiente' as const,
    label: 'ambiente',
  }),
)

/** Trabalhos concluídos — apenas resultados capilares (sem couro / condições clínicas) */
export const aboutResultsGallery: AboutGalleryItem[] = [
  { id: 'res-mechas', src: `${R}/mechas-depois.webp`, category: 'resultado', label: 'mechas' },
  { id: 'res-coloracao', src: `${R}/coloracao-depois.webp`, category: 'resultado', label: 'coloracao' },
  { id: 'res-corte', src: `${R}/corte-depois.webp`, category: 'resultado', label: 'corte' },
  { id: 'res-brushing', src: `${R}/brushing-resultado.webp`, category: 'resultado', label: 'brushing' },
  { id: 'res-alisamento', src: `${R}/alisamento-resultado.webp`, category: 'resultado', label: 'alisamento' },
  { id: 'res-escova', src: `${R}/escova-resultado.webp`, category: 'resultado', label: 'escova' },
  { id: 'res-hidrica', src: `${R}/hidrica-depois.webp`, category: 'resultado', label: 'hidrica' },
  { id: 'res-lipidica', src: `${R}/lipidica-depois.webp`, category: 'resultado', label: 'lipidica' },
  { id: 'res-reconstrucao', src: `${R}/reconstrucao-depois.webp`, category: 'resultado', label: 'reconstrucao' },
  { id: 'res-blend', src: `${R}/blend-resultado.webp`, category: 'resultado', label: 'blend' },
  { id: 'res-c00', src: `${G}/coloracao-00-depois.webp`, category: 'resultado', label: 'coloracao' },
  { id: 'res-c01', src: `${G}/coloracao-01-depois.webp`, category: 'resultado', label: 'coloracao' },
  { id: 'res-c01f', src: `${G}/coloracao-01-frente-depois.webp`, category: 'resultado', label: 'coloracao' },
  { id: 'res-c02', src: `${G}/coloracao-02-depois.webp`, category: 'resultado', label: 'coloracao' },
  { id: 'res-c02f', src: `${G}/coloracao-02-frente-depois.webp`, category: 'resultado', label: 'coloracao' },
  { id: 'res-c03', src: `${G}/coloracao-03-depois.webp`, category: 'resultado', label: 'coloracao' },
  { id: 'res-clado', src: `${G}/coloracao-lado01-depois.webp`, category: 'resultado', label: 'coloracao' },
  { id: 'res-m01', src: `${G}/coloracao-mechas01-depois.webp`, category: 'resultado', label: 'mechas' },
  { id: 'res-m02', src: `${G}/coloracao-mechas02-depois.webp`, category: 'resultado', label: 'mechas' },
]

export const aboutGalleryAll = [...aboutAmbienteGallery, ...aboutResultsGallery]
