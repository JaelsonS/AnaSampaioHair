/**
 * Strategic inventory of Ana’s original photographs.
 * Use only where narrative requires her presence — never as filler.
 */

export type AnaPhotoId =
  | 'ana-hero'
  | 'ana-hero-portrait'
  | 'ana-full'
  | 'ana-studio'
  | 'ana-cutout'

export type AnaPhotoAsset = {
  id: AnaPhotoId
  src: string
  width: number
  height: number
  orientation: 'portrait' | 'square'
  mode: 'RGBA' | 'RGB'
  recommendedUse: string
  context: string
  cropHint: string
  alt: string
  avoid: string
}

export const anaPhotoInventory: AnaPhotoAsset[] = [
  {
    id: 'ana-hero',
    src: '/images/about/ana-hero.png',
    width: 413,
    height: 957,
    orientation: 'portrait',
    mode: 'RGBA',
    recommendedUse: 'Hero home (cutout sobre atmosfera do salão)',
    context: 'Apresentação institucional / primeiro contacto',
    cropHint: 'Manter corpo completo; object-position center bottom',
    alt: 'Ana Sampaio, cabeleireira e terapeuta capilar integrativa',
    avoid: 'Não repetir na mesma página abaixo do hero',
  },
  {
    id: 'ana-hero-portrait',
    src: '/images/about/ana-studio.jpg',
    width: 680,
    height: 1024,
    orientation: 'portrait',
    mode: 'RGB',
    recommendedUse: 'Ana fala · manifesto · citações',
    context: 'Primeira pessoa',
    cropHint: 'Rosto e ombros; object-position center 12%',
    alt: 'Retrato de Ana Sampaio',
    avoid: 'Não usar como stock genérico de tratamentos',
  },
  {
    id: 'ana-full',
    src: '/images/about/ana-full.jpg',
    width: 1024,
    height: 1024,
    orientation: 'square',
    mode: 'RGB',
    recommendedUse: 'Sobre · e-book · corpo inteiro',
    context: 'Trajectória e confiança',
    cropHint: 'Contain',
    alt: 'Ana Sampaio em retrato de corpo inteiro',
    avoid: 'Não saturar home + sobre + produtos na mesma sessão',
  },
  {
    id: 'ana-studio',
    src: '/images/about/ana-studio.jpg',
    width: 680,
    height: 1024,
    orientation: 'portrait',
    mode: 'RGB',
    recommendedUse: 'Sobre · blog autor · políticas · Ana fala',
    context: 'Espaço e presença no instituto',
    cropHint: 'Centro vertical / rosto',
    alt: 'Ana Sampaio no espaço do instituto',
    avoid: 'Não confundir com fotos só de ambiente',
  },
  {
    id: 'ana-cutout',
    src: '/images/about/ana-cutout.png',
    width: 413,
    height: 957,
    orientation: 'portrait',
    mode: 'RGBA',
    recommendedUse: 'Cutout · CTAs pessoais',
    context: 'Citação em primeira pessoa',
    cropHint: 'Contain; fundo transparente',
    alt: 'Ana Sampaio — retrato com fundo transparente',
    avoid: 'Evitar halo em fundos escuros',
  },
]

export function getAnaPhoto(id: AnaPhotoId) {
  return anaPhotoInventory.find((p) => p.id === id)!
}

export const anaPhotoLegacy = [
  '/images/about/ana.jpg',
  '/images/about/ana.png',
  '/images/about/ana-cutout.jpg',
  '/images/about/ana-hero-light.png',
  '/images/about/ana-hero-studio.jpg',
  '/images/about/ana-hero-portrait.jpg',
  '/images/about/ana-studio.png',
  '/images/about/ana-full.png',
] as const
