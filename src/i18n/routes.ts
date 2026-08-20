import type { UrlLocale } from './config'

/** Stable path keys used by the app — never hardcode public slugs in components */
export type PathKey =
  | 'home'
  | 'services'
  | 'treatments'
  | 'therapy'
  | 'about'
  | 'products'
  | 'blog'
  | 'glossary'
  | 'testimonials'
  | 'results'
  | 'contact'
  | 'booking'
  | 'faq'
  | 'terms'
  | 'privacy'
  | 'cookies'
  | 'cancellation'
  | 'bookingPolicy'
  | 'purchasePolicy'
  | 'complaints'
  | 'compliments'
  | 'courses'

const routeSegments: Record<PathKey, Record<UrlLocale, string>> = {
  home: { pt: '', es: '', en: '' },
  services: { pt: 'servicos', es: 'servicios', en: 'services' },
  treatments: { pt: 'tratamentos', es: 'tratamientos', en: 'treatments' },
  therapy: { pt: 'terapia-capilar', es: 'terapia-capilar', en: 'hair-scalp-therapy' },
  about: { pt: 'sobre', es: 'sobre', en: 'about' },
  products: { pt: 'produtos', es: 'productos', en: 'products' },
  blog: { pt: 'blog', es: 'blog', en: 'blog' },
  glossary: { pt: 'glossario', es: 'glosario', en: 'glossary' },
  testimonials: { pt: 'depoimentos', es: 'testimonios', en: 'testimonials' },
  results: { pt: 'resultados', es: 'resultados', en: 'results' },
  contact: { pt: 'contacto', es: 'contacto', en: 'contact' },
  booking: { pt: 'agendamento', es: 'cita', en: 'booking' },
  faq: { pt: 'faq', es: 'faq', en: 'faq' },
  courses: { pt: 'formacoes', es: 'formaciones', en: 'training' },
  terms: { pt: 'termos', es: 'terminos', en: 'terms' },
  privacy: {
    pt: 'politica-de-privacidade',
    es: 'politica-de-privacidad',
    en: 'privacy-policy',
  },
  cookies: {
    pt: 'politica-de-cookies',
    es: 'politica-de-cookies',
    en: 'cookie-policy',
  },
  cancellation: {
    pt: 'politica-de-cancelamento',
    es: 'politica-de-cancelacion',
    en: 'cancellation-policy',
  },
  bookingPolicy: {
    pt: 'politica-de-agendamento',
    es: 'politica-de-citas',
    en: 'booking-policy',
  },
  purchasePolicy: {
    pt: 'politica-de-compras',
    es: 'politica-de-compras',
    en: 'purchase-policy',
  },
  complaints: {
    pt: 'livro-de-reclamacoes',
    es: 'libro-de-reclamaciones',
    en: 'complaints-book',
  },
  compliments: {
    pt: 'livro-de-elogios',
    es: 'libro-de-elogios',
    en: 'compliments-book',
  },
}

export function localizedPath(
  locale: UrlLocale,
  key: PathKey,
  slug?: string,
): string {
  const segment = routeSegments[key][locale]
  const base = segment ? `/${locale}/${segment}` : `/${locale}`
  if (!slug) return base
  return `${base}/${slug}`
}

export function getPathKeyFromSegment(
  locale: UrlLocale,
  segment: string,
): PathKey | null {
  const entry = Object.entries(routeSegments).find(
    ([, map]) => map[locale] === segment,
  )
  return (entry?.[0] as PathKey) ?? null
}

export const mainNavKeys: PathKey[] = [
  'home',
  'about',
  'treatments',
  'courses',
  'blog',
  'contact',
]

/** Compact treatments dropdown — categories, not 24 links */
export const treatmentsNavGroups = [
  {
    id: 'beleza',
    label: { pt: 'Beleza', es: 'Belleza', en: 'Beauty' },
    anchors: '#beleza',
  },
  {
    id: 'terapia',
    label: { pt: 'Terapia & couro', es: 'Terapia y cuero', en: 'Therapy & scalp' },
    anchors: '#terapia',
  },
  {
    id: 'fio',
    label: { pt: 'Cuidados do fio', es: 'Cuidados del cabello', en: 'Hair care' },
    anchors: '#fio',
  },
] as const

/** Editorial hub links under Conteúdos */
export const contentsNavGroups = [
  {
    id: 'blog',
    key: 'blog' as const,
    label: { pt: 'Blog', es: 'Blog', en: 'Blog' },
  },
  {
    id: 'ebook',
    key: 'products' as const,
    label: { pt: 'E-book', es: 'E-book', en: 'E-book' },
  },
  {
    id: 'faq',
    key: 'faq' as const,
    label: { pt: 'FAQ', es: 'FAQ', en: 'FAQ' },
  },
] as const

export { routeSegments }
