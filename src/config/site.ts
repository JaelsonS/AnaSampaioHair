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
    logo: '/images/brand/logo.png',
    /** Official salon interior — primary homepage hero */
    heroSalon: '/images/hero/salon-interior.jpg',
    heroSalonPortrait: '/images/hero/salon-portrait.jpg',
    /** Cinematic hair result (landscape) — secondary / results */
    heroResults: '/images/hero/results-wide.jpg',
    heroMechas: '/images/hero/mechas-hero.jpg',
    anaCutout: '/images/about/ana-cutout.png',
    anaStudio: '/images/about/ana-studio.jpg',
    /** Transparent full-body cutout over salon atmosphere */
    anaHero: '/images/about/ana-hero.png',
    /** Studio portrait (instituto) — quotes / Ana fala */
    anaHeroPortrait: '/images/about/ana-studio.jpg',
    /** Transparent cutout alternate */
    anaHeroCutout: '/images/about/ana-cutout.png',
    /** Virtual assistant face (not Ana) */
    assistantAvatar: '/images/brand/assistant-avatar.jpg',
    /** Full-body real Ana (fundo preto) */
    anaFull: '/images/about/ana-full.jpg',
    anaPortrait: '/images/about/ana-studio.jpg',
    /** Clear studio portrait for “Escrito por” / author / legal identity */
    anaAuthor: '/images/about/ana-studio.jpg',
    ambiente: [
      '/images/about/ambiente-1.jpg',
      '/images/about/ambiente-2.jpg',
      '/images/about/ambiente-3.jpg',
      '/images/about/ambiente-4.jpg',
      '/images/about/ambiente-5.jpg',
      '/images/about/ambiente-6.jpg',
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
