import type { PreferredLocale } from '@/types/domain'

/**
 * Digital offers — ebook links to official Hotmart product.
 * https://hotmart.com/pt-br/marketplace/produtos/guia-meu-cabelo-dos-sonhos/T93244081R
 */
export type Offer = {
  id: string
  kind: 'ebook' | 'course' | 'plan'
  slug: string
  title: Partial<Record<PreferredLocale, string>>
  description: Partial<Record<PreferredLocale, string>>
  cta: Partial<Record<PreferredLocale, string>>
  image: string
  hrefKey: 'booking' | 'contact' | 'products' | 'courses' | 'external'
  externalUrl?: string
  isPlaceholder: boolean
  badge?: Partial<Record<PreferredLocale, string>>
}

export const offers: Offer[] = [
  {
    id: 'ebook-guia-meu-cabelo',
    kind: 'ebook',
    slug: 'guia-meu-cabelo-dos-sonhos',
    title: {
      'pt-PT': 'Guia Meu Cabelo dos Sonhos',
      es: 'Guía Mi Cabello de Ensueño',
      en: 'My Dream Hair Guide',
    },
    description: {
      'pt-PT':
        'E-book da Ana Sampaio para compreender a estrutura do cabelo, montar um cronograma personalizado e escolher produtos com critério — sem desperdiçar tempo nem dinheiro.',
      es: 'E-book de Ana Sampaio para entender la estructura del cabello, crear un cronograma personalizado y elegir productos con criterio.',
      en: 'Ana Sampaio’s e-book to understand hair structure, build a personal care routine and choose products wisely.',
    },
    cta: {
      'pt-PT': 'Eu quero',
      es: 'Lo quiero',
      en: 'I want it',
    },
    image: '/images/about/ana-studio.jpg',
    hrefKey: 'external',
    externalUrl:
      'https://hotmart.com/pt-br/marketplace/produtos/guia-meu-cabelo-dos-sonhos/T93244081R',
    isPlaceholder: false,
    badge: {
      'pt-PT': 'E-book',
      es: 'E-book',
      en: 'E-book',
    },
  },
  {
    id: 'course-interest',
    kind: 'course',
    slug: 'curso-terapia-capilar',
    title: {
      'pt-PT': 'Curso / formação com a Ana',
      es: 'Curso / formación con Ana',
      en: 'Course / training with Ana',
    },
    description: {
      'pt-PT':
        'Interessada em aprender com a Ana? Entre na lista da próxima turma — terapia capilar, aromaterapia, cortes, penteados e mais.',
      es: '¿Te interesa aprender con Ana? Entra en la lista del próximo grupo — terapia capilar, aromaterapia, cortes, peinados y más.',
      en: 'Interested in learning with Ana? Join the next cohort waitlist — hair therapy, aromatherapy, cuts, styling and more.',
    },
    cta: {
      'pt-PT': 'Lista da próxima turma',
      es: 'Lista del próximo grupo',
      en: 'Join next cohort list',
    },
    image: '/images/brand/cursos-formacoes.png',
    hrefKey: 'courses',
    isPlaceholder: false,
    badge: {
      'pt-PT': 'Formação',
      es: 'Formación',
      en: 'Training',
    },
  },
]

export function getOffers() {
  return offers
}

export function getOfferByKind(kind: Offer['kind']) {
  return offers.find((o) => o.kind === kind)
}
