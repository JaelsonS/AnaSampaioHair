/**
 * Strategic inventory of Ana’s original photographs.
 * Use only where narrative requires her presence — never as filler.
 */

export type AnaPhotoId =
  | 'ana-hero-home'
  | 'ana-about-home'
  | 'ana-hero'
  | 'ana-hero-portrait'
  | 'ana-full'
  | 'ana-studio'

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
    id: 'ana-hero-home',
    src: '/images/hero/ana-home-destaque.webp',
    width: 1067,
    height: 1600,
    orientation: 'portrait',
    mode: 'RGB',
    recommendedUse: 'Hero home e Sobre — fundo madeira contínuo + Ana à direita',
    context: 'Primeira impressão / página inicial',
    cropHint: 'site-hero-wood-bg-img object-position 58% 18% (desktop)',
    alt: 'Ana Sampaio, cabeleireira e terapeuta capilar integrativa',
    avoid: 'Não repetir na mesma página abaixo do hero',
  },
  {
    id: 'ana-about-home',
    src: '/images/about/ana-about-home.webp',
    width: 1067,
    height: 1600,
    orientation: 'portrait',
    mode: 'RGB',
    recommendedUse: 'Home — secção “Quem sou?” ao lado dos pilares',
    context: 'Instituto / credibilidade / botão Saber mais',
    cropHint: 'Corpo completo no instituto; object-position center 12–14%',
    alt: 'Ana Sampaio no Instituto de Beleza e Saúde Capilar',
    avoid: 'Não duplicar no hero da mesma página',
  },
  {
    id: 'ana-hero',
    src: '/images/about/ana-about-home.webp',
    width: 1800,
    height: 2700,
    orientation: 'square',
    mode: 'RGB',
    recommendedUse: 'Apresentação institucional / corpo inteiro',
    context: 'Apresentação institucional / primeiro contacto',
    cropHint: 'Contain ou cover suave',
    alt: 'Ana Sampaio, cabeleireira e terapeuta capilar integrativa',
    avoid: 'Não repetir na mesma página abaixo do hero',
  },
  {
    id: 'ana-hero-portrait',
    src: '/images/about/ana-formacao-especialidade.webp',
    width: 1800,
    height: 2700,
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
    src: '/images/about/ana-about-home.webp',
    width: 1800,
    height: 2700,
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
    src: '/images/about/ana-formacao-especialidade.webp',
    width: 1800,
    height: 2700,
    orientation: 'portrait',
    mode: 'RGB',
    recommendedUse: 'Sobre · blog autor · políticas · Ana fala',
    context: 'Espaço e presença no instituto',
    cropHint: 'Centro vertical / rosto',
    alt: 'Ana Sampaio no espaço do instituto',
    avoid: 'Não confundir com fotos só de ambiente',
  },
]

export function getAnaPhoto(id: AnaPhotoId) {
  return anaPhotoInventory.find((p) => p.id === id)!
}

export const anaPhotoLegacy = [
  '/images/about/ana-about-home.webp',
  '/images/about/ana-formacao-especialidade.webp',
] as const
