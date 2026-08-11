/**
 * Configuração central do website.
 * Alterar aqui facilita futuras integrações (CMS, booking, WhatsApp, etc.).
 */

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

  /**
   * Agendamento:
   * - 'whatsapp' (padrão): CTAs abrem WhatsApp
   * - 'route': usa bookingRoute
   * - 'url': usa bookingUrl externo (sistema de booking futuro)
   */
  bookingMode: 'whatsapp' as 'whatsapp' | 'route' | 'url',
  bookingUrl: null as string | null,
  bookingRoute: '/contacto#agendar',
  bookingWhatsAppMessage:
    'Olá Ana! Gostaria de agendar uma avaliação no Ana Sampaio Hair.',

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
      { label: 'Segunda a sábado', value: '09h às 18h' },
      {
        label: 'Terças-feiras',
        value: 'Horário pós-laboral até às 21h mediante agendamento',
      },
      { label: 'Domingos', value: 'Encerrado' },
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

  /** Avaliação no Google Maps — abre a ficha para classificar com estrelas e comentário. */
  google: {
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Ana+Sampaio+Hair,+Rua+Machado+Santos+39,+Marinha+Grande',
    /**
     * Quando tiver o Place ID oficial do Google Business, substitua por:
     * https://search.google.com/local/writereview?placeid=SEU_PLACE_ID
     */
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

  /**
   * Envio seguro do formulário via HTTPS (FormSubmit).
   * Os dados não ficam guardados no browser — são transmitidos encriptados para o serviço
   * e encaminhados para o email do instituto.
   */
  form: {
    endpoint: `https://formsubmit.co/ajax/ana_samppaio@hotmail.com`,
    subject: 'Novo contacto — Ana Sampaio Hair',
  },

  seo: {
    title: 'Ana Sampaio Hair | Beleza e Terapia Capilar em Marinha Grande',
    titleTemplate: '%s | Ana Sampaio Hair',
    ogImage: '/og-image.svg',
  },
} as const

export const bookingRoute = siteConfig.bookingRoute
export const bookingUrl = siteConfig.bookingUrl

export function getWhatsAppUrl(message?: string) {
  const number = siteConfig.contact.whatsapp
  if (!number) return null
  const base = `https://wa.me/${number}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function getBookingHref() {
  if (siteConfig.bookingMode === 'url' && siteConfig.bookingUrl) {
    return siteConfig.bookingUrl
  }
  if (siteConfig.bookingMode === 'whatsapp') {
    return (
      getWhatsAppUrl(siteConfig.bookingWhatsAppMessage) ?? siteConfig.bookingRoute
    )
  }
  return siteConfig.bookingRoute
}

export function isBookingExternal() {
  return siteConfig.bookingMode === 'whatsapp' || siteConfig.bookingMode === 'url'
}
