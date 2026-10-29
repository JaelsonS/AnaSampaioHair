const WHATSAPP = '351963503988'

export const siteConfig = {
  name: 'Ana Sampaio Hair',
  legalName: 'Instituto de Beleza e Saúde Capilar Ana Sampaio',
  tagline: 'Instituto de Beleza e Saúde Capilar',
  description:
    'Instituto de Beleza e Saúde Capilar Ana Sampaio Hair, em Marinha Grande. Cabeleireira, terapia capilar integrativa, mechas, coloração, tratamentos e cuidados personalizados.',
  url: 'https://anasampaio.pt',
  locale: 'pt_PT',
  lang: 'pt',

  bookingMode: 'whatsapp' as 'whatsapp' | 'route' | 'url',
  bookingUrl: null as string | null,

  contact: {
    email: 'ana_samppaio@hotmail.com',
    phone: WHATSAPP,
    phoneDisplay: '+351 963 503 988',
    whatsapp: WHATSAPP,
    address: {
      street: 'Rua Machado Santos 39, Centro',
      city: 'Marinha Grande',
      district: 'Leiria',
      country: 'Portugal',
      postalCode: '2430-249',
      full: 'Rua Machado Santos 39, Centro — Marinha Grande — Leiria — Portugal',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Ana+Sampaio+Hair,+Rua+Machado+Santos+39,+Marinha+Grande',
      mapsEmbed:
        'https://www.google.com/maps?q=Ana+Sampaio+Hair,+Rua+Machado+Santos+39,+Marinha+Grande&output=embed',
    },
    hours: [
      { labelKey: 'weekdays', valueKey: 'weekdaysValue' },
      { labelKey: 'tuesday', valueKey: 'tuesdayValue' },
      { labelKey: 'sunday', valueKey: 'sundayValue' },
    ],
  },

  social: {
    instagram: {
      handle: '@ana_sampaiohair',
      url: 'https://www.instagram.com/ana_sampaiohair/',
    },
    facebook: {
      label: 'Instituto Capilar',
      url: 'https://www.facebook.com/instcapilar/',
    },
  },

  google: {
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Ana+Sampaio+Hair,+Rua+Machado+Santos+39,+Marinha+Grande',
    reviewUrl:
      'https://www.google.com/maps/search/?api=1&query=Ana+Sampaio+Hair,+Rua+Machado+Santos+39,+Marinha+Grande',
  },

  developer: {
    name: 'AfDigital - Soluções Tecnológicas',
    url: 'https://www.afdigitalweb.com',
  },

  /** Livro Raízes e Asas — link único de afiliado Amazon (amzn.to / link.amazon). */
  commerce: {
    bookRaizesAsas: {
      title: 'Raízes e Asas',
      amazonUrl: 'https://link.amazon/B03mmuQSH',
    },
  },

  /** Identificação legal da prestadora (uso em políticas e termos — não substituir a marca comercial). */
  legalIdentification: {
    providerFullName: 'Ana Sampaio Bárbara Nazario',
    taxId: '302057641',
  },

  infrastructure: {
    hostingProvider: 'Vercel Inc.',
  },

  legal: {
    complaintsBookUrl: 'https://www.livroreclamacoes.pt/Inicio/',
    complimentsBookUrl: 'https://www.livroreclamacoes.pt/Pedido/ElogioSugestao',
    complaintsImage: '/images/legal/livro-reclamacoes.svg',
    complimentsImage: '/images/legal/livro-elogios.svg',
  },

  form: {
    endpoint:
      process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
      'https://formsubmit.co/ajax/ana_samppaio@hotmail.com',
    subject: 'Novo contacto — Ana Sampaio Hair',
  },

  seo: {
    ogImage: '/images/brand/logo.png',
  },

  brand: {
    /** Logótipo oficial completo (gota + Ana Sampaio + tagline), fundo transparente */
    logoLockup: '/images/brand/logo-lockup.webp',
    logoLockupFallback: '/images/brand/logo-lockup.png',
    /** Tagline clara para footer e header sobre hero escuro */
    logoLockupOnDark: '/images/brand/logo-lockup-on-dark.webp',
    logoLockupOnDarkFallback: '/images/brand/logo-lockup-on-dark.png',
    /** Ícone só gota — favicon, Google, partilhas compactas */
    logoMark: '/images/brand/logo-mark.webp',
    logoMarkFallback: '/images/brand/logo-mark.png',
    /** Quadrado 512×512 (gota centrada) — schema.org / Google */
    logoIcon: '/images/brand/icon-512.png',
    logoName: 'Ana Sampaio',
    logoTagline: 'INSTITUTO DE BELEZA E SAÚDE CAPILAR',
    /** Fonte master + partilhas sociais (OG) */
    logo: '/images/brand/logo.png',
    /** Official salon interior — primary homepage hero */
    heroSalon: '/images/hero/salon-interior.jpg',
    heroSalonPortrait: '/images/hero/salon-interior.jpg',
    /** Cinematic hair result (landscape) — secondary / results */
    heroResults: '/images/trabalhos/coloracaodepois05.webp',
    heroMechas: '/images/mechas/ana/ana-mechas-03.webp',
    /** Homepage mechas — Ana com painel Art Visage (destaque) */
    mechasFeatured: '/images/mechas/ana/ana-mechas-03.webp',
    anaStudio: '/images/about/ana-about-home.webp',
    /** E-book “Guia Meu Cabelo dos Sonhos” — resultado / instituto */
    ebookGuia: '/images/ebook/guia-meu-cabelo-dos-sonhos.webp',
    /** Fonte: docs/AnaImg2026/ana-HeroDestaques.jpeg → sync hero destaque */
    anaHeroHome: '/images/hero/ana-home-destaque.webp',
    /** Hero esquerda — ripas verticais (sem retrato) */
    heroWoodPanelsLeft: '/images/hero/hero-wood-panels-left.webp',
    /** Homepage “Quem sou?” — Ana full-body at the institute */
    anaAboutHome: '/images/about/ana-about-home.webp',
    /** About page — “Um olhar que une…” (Ana com tablet) */
    anaAboutLook: '/images/blog/como-escolher-um-terapeuta-capilar.webp',
    /** About page — Formação e especialização */
    anaAboutTraining: '/images/about/ana-formacao-especialidade.webp',
    /** About page — livro Raízes e Asas (capa) */
    bookRaizesAsas: '/images/about/livro-raizes-e-asas.webp',
    /** Retrato corpo inteiro — instituto */
    anaHero: '/images/about/ana-about-home.webp',
    /** Studio portrait (instituto) — quotes / Ana fala */
    anaHeroPortrait: '/images/about/ana-formacao-especialidade.webp',
    /** Virtual assistant face (not Ana) — Unsplash, ver docs/assistant/LICENSE.md */
    assistantAvatar: '/images/brand/assistant-avatar.webp',
    /** Full-body real Ana (fundo preto) */
    anaFull: '/images/about/ana-about-home.webp',
    anaPortrait: '/images/about/ana-formacao-especialidade.webp',
    /** Clear studio portrait for “Escrito por” / author / legal identity */
    anaAuthor: '/images/about/ana-formacao-especialidade.webp',
    /** About page — O espaço (instituto + trabalhos reais) */
    ambiente: [
      '/images/about/ambiente-trabalho-01.webp',
      '/images/about/ambiente-trabalho-02.webp',
      '/images/about/ambiente-trabalho-03.webp',
      '/images/about/ambiente-trabalho-04.webp',
      '/images/about/ambiente-guia.webp',
    ] as const,
  },
} as const

export function getWhatsAppUrl(message?: string) {
  const number = siteConfig.contact.whatsapp
  if (!number) return null
  const base = `https://wa.me/${number}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
