export type GalleryCategory =
  | 'todos'
  | 'mechas'
  | 'cor'
  | 'corte'
  | 'tratamentos'
  | 'terapia'

export type GalleryItem = {
  id: string
  title: string
  category: Exclude<GalleryCategory, 'todos'>
  image: string
  imageAlt: string
  beforeImage?: string
  afterImage?: string
}

export const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'mechas', label: 'Mechas' },
  { id: 'cor', label: 'Cor' },
  { id: 'corte', label: 'Corte' },
  { id: 'tratamentos', label: 'Tratamentos' },
  { id: 'terapia', label: 'Terapia' },
]

/** Imagens distintas — evita repetir o mesmo ficheiro lado a lado. */
export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Mechas com luz',
    category: 'mechas',
    image: '/images/gallery/g1.jpg',
    imageAlt: 'Mechas luminosas',
    beforeImage: '/images/gallery/g1-before.jpg',
    afterImage: '/images/gallery/g1.jpg',
  },
  {
    id: 'g2',
    title: 'Cor profunda',
    category: 'cor',
    image: '/images/gallery/g2.jpg',
    imageAlt: 'Coloração',
  },
  {
    id: 'g3',
    title: 'Corte com movimento',
    category: 'corte',
    image: '/images/gallery/g3.jpg',
    imageAlt: 'Corte',
  },
  {
    id: 'g4',
    title: 'Fios recuperados',
    category: 'tratamentos',
    image: '/images/gallery/g4.jpg',
    imageAlt: 'Tratamento',
    beforeImage: '/images/gallery/g4-before.jpg',
    afterImage: '/images/gallery/g4.jpg',
  },
  {
    id: 'g5',
    title: 'Cuidado terapêutico',
    category: 'terapia',
    image: '/images/gallery/g5.jpg',
    imageAlt: 'Terapia',
  },
  {
    id: 'g6',
    title: 'Ondas suaves',
    category: 'corte',
    image: '/images/gallery/g6.jpg',
    imageAlt: 'Movimento',
  },
  {
    id: 'g7',
    title: 'Nutrição e brilho',
    category: 'tratamentos',
    image: '/images/nutricao.jpg',
    imageAlt: 'Nutrição',
  },
  {
    id: 'g8',
    title: 'Brushing elegante',
    category: 'mechas',
    image: '/images/brushing.jpg',
    imageAlt: 'Brushing',
  },
  {
    id: 'g9',
    title: 'Luz no rosto',
    category: 'mechas',
    image: '/images/mechas.jpg',
    imageAlt: 'Mechas',
  },
  {
    id: 'g10',
    title: 'Hidratação profunda',
    category: 'tratamentos',
    image: '/images/hidratacao.jpg',
    imageAlt: 'Hidratação',
  },
  {
    id: 'g11',
    title: 'Corte preciso',
    category: 'corte',
    image: '/images/corte.jpg',
    imageAlt: 'Corte',
  },
  {
    id: 'g12',
    title: 'Couro em equilíbrio',
    category: 'terapia',
    image: '/images/need-scalp.jpg',
    imageAlt: 'Couro cabeludo',
  },
]
