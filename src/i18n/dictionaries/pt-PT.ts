import type { PathKey } from '@/i18n/routes'

export type Dictionary = {
  meta: {
    siteName: string
    defaultTitle: string
    titleTemplate: string
    defaultDescription: string
  }
  nav: Record<PathKey, string> & {
    book: string
    menu: string
    close: string
    language: string
  }
  common: {
    skipToContent: string
    learnMore: string
    readMore: string
    backHome: string
    loading: string
    required: string
    optional: string
    send: string
    continue: string
    back: string
    notNow: string
    openMaps: string
    call: string
    email: string
    share: string
    related: string
    minutesRead: string
    draftNotice: string
    placeholderProduct: string
    requestOnlyNotice: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    metaBeauty: string
    metaBeautyDesc: string
    metaHealth: string
    metaHealthDesc: string
    metaCare: string
    metaCareDesc: string
  }
  trust: {
    yearsBeauty: string
    yearsTherapy: string
    uniqueLook: string
    continuousStudy: string
  }
  sections: {
    needsTitle: string
    needsLead: string
    servicesTitle: string
    servicesLead: string
    therapyTitle: string
    therapyLead: string
    treatmentsTitle: string
    treatmentsLead: string
    resultsTitle: string
    resultsLead: string
    aboutTitle: string
    aboutLead: string
    experienceTitle: string
    experienceLead: string
    testimonialsTitle: string
    testimonialsLead: string
    productsTitle: string
    productsLead: string
    coursesTitle: string
    coursesLead: string
    planTitle: string
    planLead: string
    blogTitle: string
    blogLead: string
    faqTitle: string
    faqLead: string
    contactTitle: string
    contactLead: string
    finalCtaTitle: string
    finalCtaLead: string
    locationTitle: string
  }
  booking: {
    title: string
    lead: string
    stepService: string
    stepDay: string
    stepTime: string
    stepDetails: string
    name: string
    contact: string
    notes: string
    submit: string
    disclaimer: string
    successHint: string
  }
  assistant: {
    title: string
    greeting: string
    askService: string
    askDay: string
    askTime: string
    askDetails: string
    sendWhatsApp: string
    openLabel: string
    closeLabel: string
    subtitle: string
    progressLabel: string
    summaryTitle: string
    tip: string
  }
  blog: {
    writtenBy: string
    authorBio: string
    railBookTitle: string
    railBookLead: string
    coursePendingNote: string
    toc: string
    related: string
    listen: string
    featured: string
    allArticles: string
    contentLanguageNote: string
  }
  exitIntent: {
    title: string
    lead: string
    findTreatment: string
    book: string
    whatsapp: string
    dismiss: string
  }
  cookies: {
    title: string
    lead: string
    acceptAll: string
    rejectOptional: string
    customize: string
    save: string
    essential: string
    essentialDesc: string
    analytics: string
    analyticsDesc: string
    marketing: string
    marketingDesc: string
    reopen: string
    policyLink: string
  }
  hours: {
    weekdays: string
    weekdaysValue: string
    tuesday: string
    tuesdayValue: string
    sunday: string
    sundayValue: string
  }
  footer: {
    tagline: string
    rights: string
    developedBy: string
    legal: string
    follow: string
    contactUs: string
  }
  notFound: {
    title: string
    lead: string
    cta: string
  }
  whatsapp: {
    floatLabel: string
    bookingRequest: string
  }
}

export const ptPT: Dictionary = {
  meta: {
    siteName: 'Ana Sampaio Hair',
    defaultTitle: 'Ana Sampaio Hair | Beleza e Terapia Capilar em Marinha Grande',
    titleTemplate: '%s | Ana Sampaio Hair',
    defaultDescription:
      'Instituto de Beleza e Saúde Capilar em Marinha Grande. Cabeleireira, terapia capilar integrativa, mechas, coloração e cuidados personalizados.',
  },
  nav: {
    home: 'Início',
    services: 'Serviços',
    treatments: 'Tratamentos',
    therapy: 'Terapia Capilar',
    about: 'Sobre',
    products: 'Produtos',
    courses: 'Formações',
    blog: 'Conteúdos',
    glossary: 'Glossário',
    testimonials: 'Depoimentos',
    results: 'Resultados',
    contact: 'Contacto',
    booking: 'Agendamento',
    faq: 'FAQ',
    terms: 'Termos',
    privacy: 'Privacidade',
    cookies: 'Cookies',
    cancellation: 'Cancelamento',
    bookingPolicy: 'Política de agendamento',
    purchasePolicy: 'Política de compras',
    complaints: 'Livro de Reclamações',
    compliments: 'Livro de Elogios',
    book: 'Agendar',
    menu: 'Menu',
    close: 'Fechar',
    language: 'Idioma',
  },
  common: {
    skipToContent: 'Saltar para o conteúdo',
    learnMore: 'Saber mais',
    readMore: 'Ler artigo',
    backHome: 'Voltar ao início',
    loading: 'A carregar…',
    required: 'Obrigatório',
    optional: 'Opcional',
    send: 'Enviar',
    continue: 'Continuar',
    back: 'Voltar',
    notNow: 'Agora não',
    openMaps: 'Ver no mapa',
    call: 'Telefonar',
    email: 'Email',
    share: 'Partilhar',
    related: 'Também pode interessar',
    minutesRead: 'min de leitura',
    draftNotice:
      'Conteúdo em rascunho — sujeito a validação jurídica. Não constitui aconselhamento legal.',
    placeholderProduct:
      'Produto ilustrativo — será substituído pelo catálogo oficial.',
    requestOnlyNotice:
      'Isto é um pedido de horário. A confirmação só acontece depois de a Ana Sampaio verificar a disponibilidade.',
  },
  hero: {
    eyebrow: 'Ana Sampaio Hair · Marinha Grande',
    title: 'O seu cabelo merece ser escutado.',
    lead: 'Num espaço pensado para cuidado e tranquilidade, a Ana Sampaio olha para si — para a saúde dos fios, para o couro cabeludo e para o visual que quer sentir no espelho.',
    ctaPrimary: 'Pedir avaliação',
    ctaSecondary: 'Conhecer tratamentos',
    metaBeauty: 'Beleza',
    metaBeautyDesc: 'Mechas, corte, cor e brushing',
    metaHealth: 'Saúde',
    metaHealthDesc: 'Terapia capilar integrativa',
    metaCare: 'Cuidado',
    metaCareDesc: 'Avaliação antes de transformar',
  },
  trust: {
    yearsBeauty: 'anos a cuidar de cabelos como cabeleireira',
    yearsTherapy: 'anos em terapia capilar integrativa',
    uniqueLook: 'aromaterapia e visagismo no cabelo',
    continuousStudy: 'tricologia e formação internacional',
  },
  sections: {
    needsTitle: 'O que o seu cabelo pede agora?',
    needsLead: 'Comece pelo que sente — nós ajudamos a encontrar o caminho certo.',
    servicesTitle: 'Serviços com intenção',
    servicesLead: 'Beleza e saúde capilar no mesmo olhar — nunca um protocolo genérico.',
    therapyTitle: 'Terapia Capilar Integrativa',
    therapyLead: 'Escutar, observar, planear e acompanhar — um caminho feito para si.',
    treatmentsTitle: 'Tratamentos em destaque',
    treatmentsLead: 'Cada recurso entra no plano só quando faz sentido para o seu cabelo.',
    resultsTitle: 'Resultados com honestidade',
    resultsLead: 'Transformações reais, sempre com o cuidado que o fio precisa.',
    aboutTitle: 'Ana Sampaio',
    aboutLead: 'Cabeleireira e terapeuta capilar integrativa — com escuta e rigor.',
    experienceTitle: 'A experiência no instituto',
    experienceLead: 'Ambiente pensado para calma, natureza e um atendimento só para si.',
    testimonialsTitle: 'O que dizem quem confia',
    testimonialsLead: 'Palavras reais de clientes — sem inventar elogios.',
    productsTitle: 'Cuidados para casa',
    productsLead:
      'E-book, cuidados recomendados e acesso às formações — sem inventar preços de prateleira.',
    coursesTitle: 'Formações com a Ana Sampaio',
    coursesLead:
      'Terapia capilar, técnicas de salão e leitura de cosméticos — peça informação e confirme a próxima turma directamente.',
    planTitle: 'Plano de Saúde Capilar',
    planLead: 'Acompanhamento contínuo, personalizado e com intenção.',
    blogTitle: 'Conteúdos e dicas',
    blogLead: 'Saúde capilar, terapia e beleza — no tom da Ana Sampaio.',
    faqTitle: 'Perguntas frequentes',
    faqLead: 'Respostas claras, sem promessas milagrosas.',
    contactTitle: 'Contacto e localização',
    contactLead: 'Marinha Grande — estamos prontas para a receber.',
    finalCtaTitle: 'Pronta para o próximo passo?',
    finalCtaLead: 'Peça a sua avaliação. A Ana Sampaio confirma a disponibilidade consigo.',
    locationTitle: 'Como chegar',
  },
  booking: {
    title: 'Pedir um horário',
    lead: 'Escolha o que pretende, o dia e a hora preferidos. Enviamos o pedido pelo WhatsApp — a Ana Sampaio confirma se tem disponibilidade.',
    stepService: 'Procedimento',
    stepDay: 'Dia preferido',
    stepTime: 'Hora preferida',
    stepDetails: 'Os seus dados',
    name: 'Nome',
    contact: 'Telefone ou email',
    notes: 'Observação',
    submit: 'Enviar pedido no WhatsApp',
    disclaimer:
      'Ao enviar, está a pedir um horário — não uma reserva automática. A confirmação é feita pela Ana Sampaio.',
    successHint: 'Vamos abrir o WhatsApp com a sua mensagem pronta a enviar.',
  },
  assistant: {
    title: 'Assistente Ana Sampaio',
    subtitle: 'Recepcionista digital · pré-agendamento',
    greeting:
      'Olá! Sou a assistente pessoal da Ana Sampaio. Em poucos passos preparo o seu pedido de avaliação — a Ana Sampaio confirma a disponibilidade consigo.',
    askService: 'Qual procedimento deseja?',
    askDay: 'Qual dia prefere?',
    askTime: 'Qual horário prefere?',
    askDetails: 'Para finalizar, indique o seu nome e contacto.',
    sendWhatsApp: 'Enviar pedido à Ana Sampaio',
    openLabel: 'Falar com a assistente',
    closeLabel: 'Fechar assistente',
    progressLabel: 'Passo',
    summaryTitle: 'Resumo do pedido',
    tip: 'Sem compromisso: isto é um pedido, não uma reserva automática.',
  },
  blog: {
    writtenBy: 'Escrito por',
    authorBio:
      'Cabeleireira e terapeuta capilar integrativa em Marinha Grande. Conteúdos com escuta, rigor e cuidado real pelos fios.',
    railBookTitle: 'Pronta para uma avaliação?',
    railBookLead:
      'Peça o seu horário. A assistente prepara o pré-agendamento e a Ana Sampaio confirma consigo.',
    coursePendingNote:
      'Datas e detalhes são confirmados directamente com a Ana Sampaio — com calma e sem compromisso.',
    toc: 'Neste artigo',
    related: 'Continue a ler',
    listen: 'Ouça este artigo',
    featured: 'Em destaque',
    allArticles: 'Todos os artigos',
    contentLanguageNote:
      'Os artigos do blog estão publicados em português. A tradução completa chega em breve.',
  },
  exitIntent: {
    title: 'Antes de sair…',
    lead: 'Posso ajudar a encontrar o tratamento ideal para o seu cabelo?',
    findTreatment: 'Encontrar o meu tratamento',
    book: 'Pedir avaliação',
    whatsapp: 'Falar no WhatsApp',
    dismiss: 'Agora não',
  },
  cookies: {
    title: 'Preferências de cookies',
    lead: 'Usamos tecnologias essenciais para o site funcionar. Categorias opcionais (estatística/marketing) estão preparadas para o futuro — neste momento não carregamos scripts dessas categorias.',
    acceptAll: 'Aceitar tudo',
    rejectOptional: 'Rejeitar opcionais',
    customize: 'Personalizar',
    save: 'Guardar preferências',
    essential: 'Essenciais',
    essentialDesc: 'Necessários ao funcionamento do site e à memorização da sua escolha.',
    analytics: 'Estatísticas',
    analyticsDesc: 'Reservado para medição futura. Atualmente não há ferramentas de analytics ativas neste website.',
    marketing: 'Marketing',
    marketingDesc: 'Reservado para publicidade futura. Atualmente não há pixels de marketing ativos neste website.',
    reopen: 'Cookies',
    policyLink: 'Ler a Política de Cookies',
  },
  hours: {
    weekdays: 'Segunda a sábado',
    weekdaysValue: '09h às 18h',
    tuesday: 'Terças-feiras',
    tuesdayValue: 'Horário pós-laboral até às 21h mediante agendamento',
    sunday: 'Domingos',
    sundayValue: 'Encerrado',
  },
  footer: {
    tagline: 'Instituto de Beleza e Saúde Capilar',
    rights: 'Todos os direitos reservados.',
    developedBy: 'Desenvolvido por',
    legal: 'Informação legal',
    follow: 'Siga-nos',
    contactUs: 'Contactos',
  },
  notFound: {
    title: 'Página não encontrada',
    lead: 'Este endereço não existe ou o conteúdo ainda não está disponível neste idioma.',
    cta: 'Ir para o início',
  },
  whatsapp: {
    floatLabel: 'WhatsApp',
    bookingRequest:
      'Olá Ana Sampaio, gostaria de pedir um horário para avaliação.\n\nProcedimento: {service}\nDia: {date}\nHorário: {time}\nNome: {name}\nContacto: {contact}{notes}',
  },
}
