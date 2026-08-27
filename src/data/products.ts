import type { Product } from '@/types/domain'

/** Placeholder catalogue — clearly marked; not real products/prices */
export const products: Product[] = [
  {
    id: 'placeholder-oil',
    slug: 'oleo-capilar-placeholder',
    name: 'Óleo capilar (placeholder)',
    description:
      'Exemplo de produto para estrutura de catálogo. Será substituído pelo produto oficial da Ana Sampaio.',
    image: '/images/services/lipidica.jpg',
    category: 'Cuidados',
    price: null,
    stock: null,
    isPlaceholder: true,
  },
  {
    id: 'placeholder-mask',
    slug: 'mascara-placeholder',
    name: 'Máscara de tratamento (placeholder)',
    description:
      'Espaço reservado no catálogo. Sem preço nem claims — apenas estrutura para o futuro e-commerce.',
    image: '/images/services/hidrica.jpg',
    category: 'Tratamento',
    price: null,
    stock: null,
    isPlaceholder: true,
  },
  {
    id: 'placeholder-serum',
    slug: 'serum-placeholder',
    name: 'Sérum couro cabeludo (placeholder)',
    description:
      'Produto ilustrativo para a arquitectura de loja. Substituir por referência real quando disponível.',
    image: '/images/services/detox.jpg',
    category: 'Couro cabeludo',
    price: null,
    stock: null,
    isPlaceholder: true,
  },
]

export function getProducts() {
  return products
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
