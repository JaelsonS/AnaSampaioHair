import type { Product } from '@/types/domain'

/** Catálogo reservado — a página pública de produtos apresenta o E-book e cuidados; sem placeholders publicados. */
export const products: Product[] = []

export function getProducts() {
  return products
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
