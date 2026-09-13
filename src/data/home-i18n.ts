import type { UrlLocale } from '@/i18n/config'
import { homeWp } from '@/data/home-wp'

export type HomeContent = {
  hero: {
    brand: string
    title: string
    subtitle: string
    lede: string
    servicesLine: string
    ctaPrimary: string
    ctaHeader: string
  }
  ambient: {
    eyebrow: string
    title: string
    body: string
    cta: string
  }
  therapyIntro: {
    eyebrow: string
    title: string
    lead: string
    cta: string
  }
  therapyItems: { id: string; title: string; body: string }[]
  about: {
    eyebrow: string
    title: string
    lead: string
    pillars: { title: string; body: string }[]
  }
  mechas: {
    eyebrow: string
    title: string
    lead: string
    manifesto: string
    processSteps: { id: string; label: string }[]
    techniqueNote: string
    cta: string
    cards: { id: string; title: string; short: string; long: string; image: string }[]
  }
  plan: { eyebrow: string; title: string; body: string; cta: string }
  benefits: {
    eyebrow: string
    title: string
    lead: string
    items: { title: string; body: string }[]
  }
  ebook: {
    eyebrow: string
    title: string
    body: string
    cta: string
    url: string
    kicker: string
    campaignBody: string
    byline: string
    ctaCampaign: string
    alt: string
  }
  faq: {
    title: string
    lead: string
    items: { q: string; a: string }[]
  }
  alts: {
    salon: string
    ana: string
  }
  topics: {
    institute: string
    therapy: string
    mechas: string
    plan: string
    assessment: string
  }
}

const pt: HomeContent = {
  hero: { ...homeWp.hero },
  ambient: { ...homeWp.ambient },
  therapyIntro: { ...homeWp.therapyIntro },
  therapyItems: homeWp.therapyItems.map((i) => ({ id: i.id, title: i.title, body: i.body })),
  about: {
    eyebrow: homeWp.about.eyebrow,
    title: homeWp.about.title,
    lead: homeWp.about.lead,
    pillars: homeWp.about.pillars.map((p) => ({ title: p.title, body: p.body })),
  },
  mechas: {
    eyebrow: homeWp.mechas.eyebrow,
    title: homeWp.mechas.title,
    lead: homeWp.mechas.lead,
    manifesto: homeWp.mechas.manifesto,
    processSteps: homeWp.mechas.processSteps.map((s) => ({ id: s.id, label: s.label })),
    techniqueNote: homeWp.mechas.techniqueNote,
    cta: homeWp.mechas.cta,
    cards: homeWp.mechas.cards.map((c) => ({
      id: c.id,
      title: c.title,
      short: c.short,
      long: c.long,
      image: c.image,
    })),
  },
  plan: { ...homeWp.plan },
  benefits: {
    eyebrow: homeWp.benefits.eyebrow,
    title: homeWp.benefits.title,
    lead: homeWp.benefits.lead,
    items: homeWp.benefits.items.map((i) => ({ title: i.title, body: i.body })),
  },
  ebook: {
    ...homeWp.ebook,
    kicker: 'E-book · Por Ana Sampaio',
    campaignBody:
      'O conhecimento de Ana Sampaio — 16 anos como cabeleireira e 5 anos em terapia capilar integrativa — transformado num guia para entender o fio, escolher produtos com critério e cuidar em casa sem desperdiçar tempo.',
    byline: 'Por Ana Sampaio · Instituto de Beleza e Saúde Capilar',
    ctaCampaign: 'Conhecer o E-book',
    alt: 'Ana Sampaio — autora do Guia Meu Cabelo dos Sonhos',
  },
  faq: {
    title: homeWp.faq.title,
    lead: homeWp.faq.lead,
    items: homeWp.faq.items.map((i) => ({ q: i.q, a: i.a })),
  },
  alts: {
    salon: 'Interior do Instituto Ana Sampaio',
    ana: 'Ana Sampaio — cabeleireira e terapeuta capilar integrativa',
  },
  topics: {
    institute: 'tratamento no instituto',
    therapy: 'terapia capilar',
    mechas: 'Mechas / Madeixas',
    plan: 'Plano de Saúde Capilar',
    assessment: 'avaliação',
  },
}

const es: HomeContent = {
  hero: {
    brand: 'Ana Sampaio Hair',
    title: 'Belleza con salud capilar',
    subtitle: 'Salón de belleza — Peluquera en Marinha Grande — Leiria — PT',
    lede: 'Instituto de Belleza y Salud Capilar en Marinha Grande — valoración personalizada, terapia y estética con el cuidado de Ana Sampaio.',
    servicesLine:
      'Mechas — Brushing — Alisado — Corte — Coloración — Tratamientos para el cabello — Tratamientos para el cuero cabelludo.',
    ctaPrimary: 'Reserve su valoración',
    ctaHeader: 'Agende una visita',
  },
  ambient: {
    eyebrow: 'Un espacio donde belleza y bienestar se encuentran',
    title: 'Excelencia en atención y ambiente',
    body: 'En el Instituto de Belleza y Salud Capilar Ana Sampaio, cada detalle del ambiente está pensado para ofrecer confort y tranquilidad. Nuestra misión es una experiencia que realce la belleza natural y promueva un verdadero bienestar, con un equipo cualificado y un espacio acogedor.',
    cta: 'Reserve su tratamiento',
  },
  therapyIntro: {
    eyebrow: 'Cabello bonito es cabello sano',
    title: 'Servicios de terapia capilar',
    lead: 'En el Instituto Ana Sampaio encuentra tratamientos pensados para cuidar la salud de su cabello — del cuero cabelludo al hilo.',
    cta: 'Pedir valoración',
  },
  therapyItems: [
    {
      id: "queda",
      title: "Caída capilar",
      body: "La caída capilar es multifactorial. Para identificar la causa en cada caso, realizamos una valoración detallada con tricoscopia y biorresonancia. Con estos datos, diseñamos un plan personalizado para tratar las causas identificadas y mejorar la salud capilar.",
    },
    {
      id: "caspa",
      title: "Caspa",
      body: "La caspa puede deberse a impregnación cosmética, factores climáticos y emocionales. Usamos tricoscopia para diagnosticar; el tratamiento incluye detox del cuero cabelludo, sesiones de calmia y blends de aceites naturales para restaurar el equilibrio.",
    },
    {
      id: "oleosidade",
      title: "Oleosidad excesiva",
      body: "La oleosidad excesiva puede provocarse por agua muy caliente y productos inadecuados. Recomendamos blends de aceites naturales y productos fitoterapéuticos para regular el sebo y restaurar el equilibrio del cuero cabelludo.",
    },
    {
      id: "dermatite",
      title: "Dermatitis seborreica",
      body: "Puede desencadenarse por dieta inadecuada y productos incompatibles. Se recomiendan sesiones de calmia para calmar la inflamación y restaurar la salud del cuero cabelludo.",
    },
    {
      id: "calvicie",
      title: "Calvicie",
      body: "A menudo ligada a alopecia androgenética, puede tratarse con microagujado para estimular el cuero cabelludo y facilitar la penetración de activos de crecimiento.",
    },
    {
      id: "alopecia",
      title: "Alopecia areata",
      body: "Condición autoinmune que provoca caída en zonas circulares, a menudo asociada a estrés intenso. Adoptamos un enfoque con tratamientos antiinflamatorios para reducir la actividad en el cuero cabelludo.",
    },
    {
      id: "massagens",
      title: "Masajes con aceites terapéuticos",
      body: "Masaje combinado con aceites esenciales específicos para relajar, estimular la circulación y nutrir cuero cabelludo e hilos.",
    },
    {
      id: "chaterapia",
      title: "Chaterapia",
      body: "Una forma de usar la naturaleza a nuestro favor para promover calmia y bienestar.",
    },
    {
      id: "musicaterapia",
      title: "Musicoterapia",
      body: "Uso de la música como herramienta terapéutica para relajación, alivio del estrés y estimulación mental y emocional.",
    },
    {
      id: "blend",
      title: "Blend de aceites naturales personalizados",
      body: "Combinación única de aceites naturales según las necesidades específicas de la clienta para la salud del cuero cabelludo y del cabello.",
    },
    {
      id: "alta-freq",
      title: "Alta frecuencia",
      body: "Corriente de alta frecuencia para estimular la circulación, oxigenar el cuero cabelludo y ayudar a la absorción de nutrientes.",
    },
    {
      id: "led",
      title: "LED rojo",
      body: "Terapia de luz roja de baja intensidad que estimula el metabolismo celular y ayuda a la salud del cuero cabelludo y de los hilos.",
    },
    {
      id: "micro",
      title: "Microagujado",
      body: "Pequeñas agujas crean microperforaciones en el cuero cabelludo, estimulando colágeno y absorción de nutrientes.",
    },
    {
      id: "reconstrucao",
      title: "Reconstrucción del hilo",
      body: "Tratamiento para reparar daños en los hilos, fortaleciendo la estructura y restaurando la salud del cabello.",
    },
    {
      id: "hidrica",
      title: "Reposición hídrica",
      body: "Reposición de agua en el cabello para mantener hidratación y salud de los hilos.",
    },
    {
      id: "lipidica",
      title: "Reposición lipídica",
      body: "Reposición de lípidos esenciales: brillo, suavidad y protección frente a daños externos.",
    },
    {
      id: "escova",
      title: "Cepillado terapéutico",
      body: "Técnica de cepillado específica que estimula la salud de los hilos.",
    },
    {
      id: "corte-bordado",
      title: "Corte bordado",
      body: "Técnica que elimina puntas dobles y dañadas, promoviendo salud y crecimiento.",
    },
    {
      id: "detox",
      title: "Detox del cuero cabelludo",
      body: "Elimina toxinas y residuos acumulados, promoviendo un entorno saludable para el crecimiento.",
    },
  ],
  about: {
    eyebrow: '¿Quién soy?',
    title: 'Ana Sampaio',
    lead: 'Ana Sampaio es peluquera y terapeuta capilar integrativa. En el instituto, cada cita parte de la escucha — de lo que siente en el cabello, en el cuero y en el visual que quiere vivir.',
    pillars: [
      {
        title: 'Experiencia',
        body: '16 años como peluquera y 5 como terapeuta capilar integrativa, con soluciones personalizadas para problemas capilares comunes.',
      },
      {
        title: 'Certificados',
        body: 'Especialización en aromaterapia y cosmetología; visagismo aplicado al cabello; formación por la ABT y seminario internacional de tricología en Europa.',
      },
      {
        title: 'Exclusividad',
        body: 'Atención individual: investigar la causa de cada situación y construir un plan con criterio — sin protocolos genéricos.',
      },
      {
        title: 'Tratamiento',
        body: 'Enfoque integrativo para caída, caspa, oleosidad y otras condiciones del hilo y del cuero cabelludo.',
      },
    ],
  },
  mechas: {
    eyebrow: 'Mechas personalizadas · consultoría antes del color',
    title: 'Especialista en Mechas (Madeixas)',
    lead: 'Cada cabello, cada rostro y cada identidad son únicos. En el Instituto Ana Sampaio, las mechas no empiezan en un catálogo de tendencias — empiezan en una consultoría: observamos quién es usted, qué comunican su piel y sus ojos, y solo después definimos técnica y tonos. La aplicación es parte del trabajo; el diferencial está en traducir ese análisis en un color hecho a su medida.',
    manifesto:
      'No elegimos solo un color bonito. Encontramos el color que tiene sentido para usted.',
    processSteps: [
      { id: 'analise', label: 'Análisis' },
      { id: 'identidade', label: 'Identidad' },
      { id: 'harmonia', label: 'Armonía' },
      { id: 'tecnica', label: 'Técnica' },
      { id: 'resultado', label: 'Resultado' },
    ],
    techniqueNote:
      'Balayage, mechas finas, papel u otra técnica entra solo cuando el análisis está concluido — con pruebas de mechas cuando sea necesario y respeto por la salud del hilo.',
    cta: 'Reservar consultoría de mechas',
    cards: [
      {
        id: 'iris',
        title: 'Análisis del Iris',
        short: 'Observación de las características naturales que orientan la elección de tonos.',
        long: 'El iris revela matices y particularidades que ayudan a comprender qué familias de color tienden a armonizar con usted — antes de cualquier prueba de mechas en el cabello.',
        image: '/images/services/mechas-iris.webp',
      },
      {
        id: 'pele',
        title: 'Temperatura de la Piel',
        short: 'Cálida, fría o neutra: la base para elegir familias de tono con criterio.',
        long: 'Evaluamos la temperatura de la piel para entender qué matices — dorados, cenizos, cobrizos — crean mayor equilibrio con su apariencia natural, sin depender de modas pasajeras.',
        image: '/images/services/mechas-produtos-qualidade.webp',
      },
      {
        id: 'coloracao',
        title: 'Coloración Personal',
        short: 'Armonía entre piel, ojos, cabello y la imagen que desea transmitir.',
        long: 'La coloración personal se integra en el proceso de definición de tonos: consideramos contraste natural, profundidad e intensidad — y la presencia que desea tener.',
        image: '/images/services/mechas-coloracao.webp',
      },
      {
        id: 'visagismo',
        title: 'Visagismo',
        short: 'Rostro, rasgos y proporciones orientan dónde debe incidir la luz.',
        long: 'Aplicamos principios de visagismo para comprender cómo el color y la iluminación del cabello valorizan la estructura facial y refuerzan la identidad que desea expresar.',
        image: '/images/services/mechas-visagismo.webp',
      },
    ],
  },
  plan: {
    eyebrow: '¡Descubra nuestro Plan de Salud Capilar!',
    title: 'Plan de Belleza y Salud Capilar',
    body: 'Una solución económica para cuidados continuos del cabello. Disfrute de tratamientos especializados y tecnologías avanzadas a un precio accesible. Inscríbase hoy y dé a su cabello el cuidado que merece.',
    cta: 'Saber más',
  },
  benefits: {
    eyebrow: 'Aquí usted es especial',
    title: 'Beneficios exclusivos para la salud y el tratamiento de su cabello',
    lead: 'Con tratamientos de 1 a 6 meses y un seguimiento personalizado según su protocolo, buscamos resultados duraderos. La belleza duradera nace de un plan cuidadoso.',
    items: [
      {
        title: 'Protocolo personalizado',
        body: 'Tratamientos diseñados para las necesidades de su cabello — con seguimiento alineado al protocolo.',
      },
      {
        title: 'Investigación de la causa',
        body: 'Vamos más allá de la superficie: investigamos lo que hay detrás de la queja, no solo el síntoma visible.',
      },
      {
        title: 'Plan a medida',
        body: 'Tipo de hilo, cuero cabelludo e historial cuentan — cada detalle informa el cuidado.',
      },
      {
        title: 'Ciencia con sensibilidad',
        body: 'Tricoscopia y biorresonancia ayudan a leer el cuero y orientar el camino con más claridad.',
      },
      {
        title: 'Terapias complementarias',
        body: 'Masajes, chaterapia, musicoterapia, blends, alta frecuencia, LED y microagujado — cuando tienen sentido para usted.',
      },
      {
        title: 'Cuerpo, mente y presencia',
        body: 'La terapia capilar integrativa une técnica y escucha: el cabello no se trata aparte de la persona.',
      },
    ],
  },
  ebook: {
    eyebrow: '¡Aprenda a cuidar su cabello!',
    title: 'Guía Mi Cabello de Ensueño',
    body: 'El e-book “Guía Mi Cabello de Ensueño” de Ana Sampaio ayuda a las lectoras a entender y cuidar la estructura de su cabello, ahorrando tiempo y dinero. Ana Sampaio, peluquera con 16 años de experiencia y terapeuta capilar integrativa desde hace 5 años, ofrece una guía para montar un cronograma capilar personalizado y enseña a elegir productos adecuados. El contenido incluye técnicas para identificar las necesidades específicas del cabello y evitar errores comunes. El e-book está estructurado en capítulos que abarcan desde la estructura del cabello hasta prácticas diarias de mantenimiento y salud capilar, con consejos específicos para cada tipo de cabello y condición.',
    cta: 'Lo quiero',
    url: homeWp.ebook.url,
    kicker: 'E-book · Por Ana Sampaio',
    campaignBody:
      'El conocimiento de Ana Sampaio — 16 años como peluquera y 5 en terapia capilar integrativa — convertido en una guía para entender el hilo, elegir productos con criterio y cuidar en casa sin perder tiempo.',
    byline: 'Por Ana Sampaio · Instituto de Belleza y Salud Capilar',
    ctaCampaign: 'Conocer el e-book',
    alt: 'Ana Sampaio — autora de la Guía Mi Cabello de Ensueño',
  },
  faq: {
    title: 'Dudas principales',
    lead: 'Algunas de las principales dudas sobre nuestros servicios y tratamientos',
    items: [
      {
        q: '¿Cómo puede beneficiar la terapia capilar integrativa a mi cabello?',
        a: 'Nuestro enfoque personalizado investiga y trata la causa de las condiciones capilares, buscando hilos más bonitos y sanos.',
      },
      {
        q: '¿Qué factores se consideran en el análisis?',
        a: 'Tipo de cabello, condiciones del cuero cabelludo e historial capilar para un tratamiento adecuado.',
      },
      {
        q: '¿Qué servicios ofrece la terapia capilar integrativa?',
        a: 'Masajes terapéuticos, chaterapia, musicoterapia y más, según los principios de integración cuerpo, alma y espíritu.',
      },
      {
        q: '¿Cómo ayudan la anamnesis y la biorresonancia?',
        a: 'La anamnesis aporta el historial del cabello y el estado físico y emocional. La biorresonancia analiza nutrientes y otros factores que afectan la salud capilar.',
      },
      {
        q: '¿Cuánto duran los tratamientos y con qué frecuencia debo volver?',
        a: 'La duración suele ser de 1 a 6 meses, con retorno mensual o semanal según el protocolo. También ofrecemos orientación personalizada.',
      },
    ],
  },
  alts: {
    salon: 'Interior del Instituto Ana Sampaio',
    ana: 'Ana Sampaio — peluquera y terapeuta capilar integrativa',
  },
  topics: {
    institute: 'tratamiento en el instituto',
    therapy: 'terapia capilar',
    mechas: 'Mechas / Madeixas',
    plan: 'Plan de Salud Capilar',
    assessment: 'valoración',
  },
}

const en: HomeContent = {
  hero: {
    brand: 'Ana Sampaio Hair',
    title: 'Beauty with hair health',
    subtitle: 'Beauty salon — Hairdresser in Marinha Grande — Leiria — PT',
    lede: 'Hair beauty & scalp institute in Marinha Grande — personalised assessment, therapy and aesthetics with Ana Sampaio’s care.',
    servicesLine:
      'Highlights — Blow-dry — Straightening — Cut — Colour — Hair treatments — Scalp treatments.',
    ctaPrimary: 'Book your assessment',
    ctaHeader: 'Schedule a visit',
  },
  ambient: {
    eyebrow: 'A space where beauty and wellbeing meet',
    title: 'Excellence in care and atmosphere',
    body: 'At Ana Sampaio’s institute, every detail of the space is designed for comfort and calm. Our mission is an experience that enhances natural beauty and true wellbeing, with a skilled team and a welcoming room.',
    cta: 'Book your treatment',
  },
  therapyIntro: {
    eyebrow: 'Beautiful hair is healthy hair',
    title: 'Hair & scalp therapy services',
    lead: 'At the Ana Sampaio institute you will find treatments focused on the health of your hair — from scalp to strand.',
    cta: 'Request an assessment',
  },
  therapyItems: [
    {
      id: "queda",
      title: "Hair shedding",
      body: "Hair shedding is multifactorial. We identify causes with a detailed assessment using trichoscopy and bioresonance when indicated, then design a personalised plan.",
    },
    {
      id: "caspa",
      title: "Dandruff",
      body: "Dandruff can come from cosmetic build-up, climate and emotional factors. We use trichoscopy to diagnose; treatment may include scalp detox, calming sessions and natural oil blends.",
    },
    {
      id: "oleosidade",
      title: "Excess oiliness",
      body: "Often linked to hot water and unsuitable products. We recommend natural oil blends and phytotherapeutic care to rebalance sebum.",
    },
    {
      id: "dermatite",
      title: "Seborrhoeic dermatitis",
      body: "May be triggered by diet and incompatible products. Calming sessions help soothe inflammation and restore scalp comfort.",
    },
    {
      id: "calvicie",
      title: "Baldness patterns",
      body: "Often linked to androgenetic alopecia; microneedling can stimulate the scalp and support growth actives.",
    },
    {
      id: "alopecia",
      title: "Alopecia areata",
      body: "An autoimmune condition causing circular patches of loss, often linked to intense stress. We take an anti-inflammatory approach on the scalp.",
    },
    {
      id: "massagens",
      title: "Therapeutic oil massages",
      body: "Massage with specific essential oils to relax, stimulate circulation and nourish scalp and hair.",
    },
    {
      id: "chaterapia",
      title: "Tea therapy",
      body: "Using nature to promote calm and wellbeing.",
    },
    {
      id: "musicaterapia",
      title: "Music therapy",
      body: "Music as a therapeutic tool for relaxation, stress relief and emotional support.",
    },
    {
      id: "blend",
      title: "Personalised natural oil blends",
      body: "A unique mix of natural oils chosen for your scalp and hair needs.",
    },
    {
      id: "alta-freq",
      title: "High frequency",
      body: "High-frequency current to stimulate circulation, oxygenate the scalp and aid nutrient absorption.",
    },
    {
      id: "led",
      title: "Red LED",
      body: "Low-level red light therapy that supports cellular metabolism and scalp/hair health.",
    },
    {
      id: "micro",
      title: "Microneedling",
      body: "Fine needles create micro-channels to stimulate collagen and nutrient absorption.",
    },
    {
      id: "reconstrucao",
      title: "Hair reconstruction",
      body: "Repairs fibre damage, strengthening structure and restoring hair health.",
    },
    {
      id: "hidrica",
      title: "Hydration refill",
      body: "Replenishes water in the hair to maintain soft, healthy strands.",
    },
    {
      id: "lipidica",
      title: "Lipid refill",
      body: "Restores essential lipids for shine, softness and protection.",
    },
    {
      id: "escova",
      title: "Therapeutic brush-out",
      body: "A specific brushing technique that supports fibre health.",
    },
    {
      id: "corte-bordado",
      title: "Point-cutting (bordado)",
      body: "Removes split ends while protecting length and encouraging healthy growth.",
    },
    {
      id: "detox",
      title: "Scalp detox",
      body: "Clears toxins and residue for a healthier growth environment.",
    },
  ],
  about: {
    eyebrow: 'Who am I?',
    title: 'Ana Sampaio',
    lead: 'Ana Sampaio is a hairdresser and integrative scalp therapist. Every appointment starts with listening — to what you feel in your hair, scalp and the look you want to live.',
    pillars: [
      {
        title: 'Experience',
        body: '16 years as a hairdresser and 5 as an integrative scalp therapist, with personalised solutions for common hair concerns.',
      },
      {
        title: 'Credentials',
        body: 'Specialisation in aromatherapy and cosmetology; hair visagism; ABT training and an international trichology seminar in Europe.',
      },
      {
        title: 'Exclusivity',
        body: 'Individual care: investigate the cause of each situation and build a considered plan — no generic protocols.',
      },
      {
        title: 'Treatment',
        body: 'An integrative approach to shedding, dandruff, oiliness and other scalp and strand conditions.',
      },
    ],
  },
  mechas: {
    eyebrow: 'Personalised highlights · consultation before colour',
    title: 'Specialist in Highlights (Madeixas)',
    lead: 'Every head of hair, every face and every identity is unique. At Ana Sampaio’s institute, highlights do not start from a trend catalogue — they start with a consultation: we observe who you are, what your skin and eyes communicate, and only then define technique and tones. Application is part of the work; the difference is turning that analysis into colour made for you.',
    manifesto:
      'We do not choose just a pretty colour. We find the colour that makes sense for you.',
    processSteps: [
      { id: 'analise', label: 'Analysis' },
      { id: 'identidade', label: 'Identity' },
      { id: 'harmonia', label: 'Harmony' },
      { id: 'tecnica', label: 'Technique' },
      { id: 'resultado', label: 'Result' },
    ],
    techniqueNote:
      'Balayage, fine highlights, foils or another technique comes only once analysis is complete — with strand tests when needed and respect for fibre health.',
    cta: 'Book a highlights consultation',
    cards: [
      {
        id: 'iris',
        title: 'Iris Analysis',
        short: 'Observing natural characteristics that guide tone selection.',
        long: 'The iris reveals nuances that help us understand which colour families tend to harmonise with you — before any highlight test on the hair.',
        image: '/images/services/mechas-iris.webp',
      },
      {
        id: 'pele',
        title: 'Skin Undertone',
        short: 'Warm, cool or neutral: the basis for choosing tone families with criteria.',
        long: 'We assess skin undertone to understand which shades — golden, ash, copper — create the greatest balance with your natural appearance, without relying on passing trends.',
        image: '/images/services/mechas-produtos-qualidade.webp',
      },
      {
        id: 'coloracao',
        title: 'Personal Colour',
        short: 'Harmony between skin, eyes, hair and the image you want to convey.',
        long: 'Personal colour is part of defining tones: we consider natural contrast, depth and intensity — and the presence you want to have.',
        image: '/images/services/mechas-coloracao.webp',
      },
      {
        id: 'visagismo',
        title: 'Visagism',
        short: 'Face, features and proportions guide where light should fall.',
        long: 'We apply visagism principles to understand how hair colour and illumination can enhance facial structure and reinforce the identity you want to express.',
        image: '/images/services/mechas-visagismo.webp',
      },
    ],
  },
  plan: {
    eyebrow: 'Discover our Hair Health Plan!',
    title: 'Beauty & Hair Health Plan',
    body: 'An accessible path for ongoing hair care. Enjoy specialised treatments and advanced technologies at a fair price. Enrol today and give your hair the care it deserves.',
    cta: 'Learn more',
  },
  benefits: {
    eyebrow: 'Here you are special',
    title: 'Exclusive benefits for your hair health and treatment',
    lead: 'With protocols lasting 1 to 6 months and personalised follow-up, we aim for lasting results. Lasting beauty comes from a carefully planned approach.',
    items: [
      {
        title: 'Personalised protocol',
        body: 'Treatments designed for your hair’s needs — with follow-up aligned to the protocol.',
      },
      {
        title: 'Cause investigation',
        body: 'We go beyond the surface: we investigate what sits behind the concern, not only the visible symptom.',
      },
      {
        title: 'Tailored plan',
        body: 'Hair type, scalp and history all matter — every detail informs the care.',
      },
      {
        title: 'Science with sensitivity',
        body: 'Trichoscopy and bioresonance help us read the scalp and guide the path with more clarity.',
      },
      {
        title: 'Complementary therapies',
        body: 'Massages, tea therapy, music therapy, blends, high frequency, LED and microneedling — when they make sense for you.',
      },
      {
        title: 'Body, mind and presence',
        body: 'Integrative scalp therapy joins technique and listening: hair is never treated apart from the person.',
      },
    ],
  },
  ebook: {
    eyebrow: 'Learn how to care for your hair!',
    title: 'My Dream Hair Guide',
    body: 'The e-book “My Dream Hair Guide” by Ana Sampaio helps readers understand and care for their hair structure, saving time and money. Ana Sampaio, a hairdresser with 16 years of experience and an integrative scalp therapist for 5 years, offers a guide to build a personalised hair schedule and teaches how to choose the right products. The content includes techniques to identify specific hair needs and avoid common mistakes. The e-book is structured in chapters covering everything from hair structure to daily practices for maintenance and scalp health, with tips for each hair type and condition.',
    cta: 'I want it',
    url: homeWp.ebook.url,
    kicker: 'E-book · By Ana Sampaio',
    campaignBody:
      'Ana Sampaio’s knowledge — 16 years as a hairdresser and 5 in integrative scalp therapy — turned into a guide to understand your hair, choose products wisely and care at home without wasting time.',
    byline: 'By Ana Sampaio · Beauty & Hair Health Institute',
    ctaCampaign: 'Discover the e-book',
    alt: 'Ana Sampaio — author of My Dream Hair Guide',
  },
  faq: {
    title: 'Key questions',
    lead: 'Some of the main questions about our services and treatments',
    items: [
      {
        q: 'How can integrative scalp therapy help my hair?',
        a: 'Our personalised approach investigates and addresses the cause of hair concerns, aiming for healthier, more beautiful hair.',
      },
      {
        q: 'What factors are considered in the analysis?',
        a: 'Hair type, scalp condition and hair history, so treatment fits you.',
      },
      {
        q: 'What services does integrative scalp therapy include?',
        a: 'Therapeutic massages, tea therapy, music therapy and more — guided by body–mind–presence principles.',
      },
      {
        q: 'How do anamnesis and bioresonance help?',
        a: 'Anamnesis gathers your hair history and physical/emotional context. Bioresonance looks at nutrients and other factors that affect hair health.',
      },
      {
        q: 'How long do treatments last and how often should I return?',
        a: 'Typically 1 to 6 months, with monthly or weekly returns depending on your protocol. We also provide personalised guidance.',
      },
    ],
  },
  alts: {
    salon: 'Interior of the Ana Sampaio Institute',
    ana: 'Ana Sampaio — hairdresser and integrative scalp therapist',
  },
  topics: {
    institute: 'treatment at the institute',
    therapy: 'scalp therapy',
    mechas: 'Highlights / Madeixas',
    plan: 'Hair Health Plan',
    assessment: 'assessment',
  },
}

const byLocale: Record<UrlLocale, HomeContent> = { pt, es, en }

/** Full homepage copy for the active locale — nothing falls back silently to PT. */
export function getHomeContent(locale: UrlLocale): HomeContent {
  return byLocale[locale]
}

export const therapyLearnMore: Record<UrlLocale, string> = {
  pt: 'Saber mais',
  es: 'Saber más',
  en: 'Learn more',
}

export const servicesPrefix: Record<UrlLocale, string> = {
  pt: 'Serviços ·',
  es: 'Servicios ·',
  en: 'Services ·',
}
