import type { UrlLocale } from '@/i18n/config'

export const therapyStepsByLocale: Record<
  UrlLocale,
  { number: string; title: string; description: string }[]
> = {
  pt: [
    {
      number: '01',
      title: 'Escutamos',
      description: 'Conta-nos o que sente no cabelo e no couro cabeludo. Sem pressa.',
    },
    {
      number: '02',
      title: 'Olhamos de perto',
      description: 'Observamos os fios e o que pode estar a influenciar o conforto e a saúde.',
    },
    {
      number: '03',
      title: 'Desenhamos o seu plano',
      description: 'Montamos um caminho feito para si — não uma lista genérica de tratamentos.',
    },
    {
      number: '04',
      title: 'Acompanhamos',
      description: 'Voltamos a ver a evolução e ajustamos. Cuidado de verdade pede continuidade.',
    },
  ],
  es: [
    {
      number: '01',
      title: 'Escuchamos',
      description: 'Cuéntenos qué siente en el cabello y en el cuero cabelludo. Sin prisa.',
    },
    {
      number: '02',
      title: 'Miramos de cerca',
      description: 'Observamos los hilos y lo que puede influir en el confort y la salud.',
    },
    {
      number: '03',
      title: 'Diseñamos su plan',
      description: 'Montamos un camino hecho para usted — no una lista genérica de tratamientos.',
    },
    {
      number: '04',
      title: 'Acompañamos',
      description: 'Volvemos a ver la evolución y ajustamos. El cuidado de verdad pide continuidad.',
    },
  ],
  en: [
    {
      number: '01',
      title: 'We listen',
      description: 'Tell us what you feel in your hair and scalp. No rush.',
    },
    {
      number: '02',
      title: 'We look closely',
      description: 'We observe the strands and what may affect comfort and health.',
    },
    {
      number: '03',
      title: 'We design your plan',
      description: 'We build a path made for you — not a generic treatment list.',
    },
    {
      number: '04',
      title: 'We follow up',
      description: 'We review progress and adjust. Real care needs continuity.',
    },
  ],
}

export const aboutHighlightsByLocale: Record<UrlLocale, string[]> = {
  pt: [
    '16 anos como cabeleireira',
    '5 anos como terapeuta capilar integrativa',
    'Especialização em aromaterapia',
    'Especialização em cosmetologia',
    'Visagismo e coloração pessoal aplicado ao cabelo',
    'Estudos pela ABT — Academia Brasileira de Tricologia',
    'Seminário internacional de tricologia na Europa',
  ],
  es: [
    '16 años como peluquera',
    '5 años como terapeuta capilar integrativa',
    'Especialización en aromaterapia',
    'Especialización en cosmetología',
    'Visagismo aplicado al cabello',
    'Estudios por la ABT — Academia Brasileña de Tricología',
    'Seminario internacional de tricología en Europa',
  ],
  en: [
    '16 years as a hairdresser',
    '5 years as an integrative scalp therapist',
    'Specialisation in aromatherapy',
    'Specialisation in cosmetology',
    'Hair visagism',
    'Studies with ABT — Brazilian Academy of Trichology',
    'International trichology seminar in Europe',
  ],
}

export const experiencePointsByLocale: Record<
  UrlLocale,
  { title: string; description: string }[]
> = {
  pt: [
    {
      title: 'Um espaço para respirar',
      description: 'Ambiente pensado para se sentir acolhida, em calma, do primeiro ao último minuto.',
    },
    {
      title: 'Atenção só para si',
      description: 'Não é “próxima da fila”. É tempo, escuta e um plano alinhado consigo.',
    },
    {
      title: 'Honestidade no cuidado',
      description: 'Se algo não for o melhor para o seu cabelo agora, a Ana Sampaio diz-lhe — com clareza.',
    },
    {
      title: 'Detalhe em cada gesto',
      description: 'Da avaliação à finalização, o cuidado está no que se vê e no que se sente.',
    },
  ],
  es: [
    {
      title: 'Un espacio para respirar',
      description: 'Ambiente pensado para sentirse acogida, en calma, del primero al último minuto.',
    },
    {
      title: 'Atención solo para usted',
      description: 'No es “la siguiente de la fila”. Es tiempo, escucha y un plan alineado con usted.',
    },
    {
      title: 'Honestidad en el cuidado',
      description: 'Si algo no es lo mejor para su cabello ahora, Ana Sampaio se lo dice — con claridad.',
    },
    {
      title: 'Detalle en cada gesto',
      description: 'De la valoración al acabado, el cuidado está en lo que se ve y en lo que se siente.',
    },
  ],
  en: [
    {
      title: 'A space to breathe',
      description: 'A room designed so you feel welcomed and calm from the first to the last minute.',
    },
    {
      title: 'Attention just for you',
      description: 'Not “next in line”. Time, listening and a plan aligned with you.',
    },
    {
      title: 'Honesty in care',
      description: 'If something isn’t best for your hair right now, Ana Sampaio will tell you — clearly.',
    },
    {
      title: 'Detail in every gesture',
      description: 'From assessment to finish, care is in what you see and what you feel.',
    },
  ],
}

export const treatmentsHubCopy: Record<
  UrlLocale,
  {
    heroLead: string
    metaDescription: string
    chooseEyebrow: string
    chooseTitle: string
    chooseLead: string
    intentBeautyTitle: string
    intentBeautyBody: string
    intentTherapyTitle: string
    intentTherapyBody: string
    intentFibreTitle: string
    intentFibreBody: string
    quote: string
    methodEyebrow: string
    methodTitle: string
    methodLead: string
    beautyTitle: string
    beautyLead: string
    beautyShowcaseEyebrow: string
    therapyEyebrow: string
    therapyTitle: string
    therapyLead: string
    fibreTitle: string
    fibreLead: string
  }
> = {
  pt: {
    heroLead:
      'Beleza, terapia e cuidados do fio ao couro — um só lugar para perceber o que existe, o que faz sentido para si e como marcar.',
    metaDescription:
      'Beleza, terapia capilar e cuidados do fio ao couro — catálogo unificado do Instituto Ana Sampaio em Marinha Grande.',
    chooseEyebrow: 'Como escolher',
    chooseTitle: 'O que procura hoje?',
    chooseLead: 'Comece pela intenção. Depois aprofundamos na avaliação — sem promessas genéricas.',
    intentBeautyTitle: 'Quero cor e imagem com critério',
    intentBeautyBody: 'Mechas personalizadas, corte, coloração, brushing e alisamento.',
    intentTherapyTitle: 'Quero cuidar da saúde capilar',
    intentTherapyBody: 'Queda, couro, detox, tecnologias e protocolos personalizados.',
    intentFibreTitle: 'Quero recuperar o fio',
    intentFibreBody: 'Reconstrução, hidratação, nutrição e corte bordado.',
    quote:
      'Para mim, cada atendimento começa por ouvir o cabelo — e a pessoa. Só depois escolhemos o caminho.',
    methodEyebrow: 'Metodologia',
    methodTitle: 'Como funciona o acompanhamento',
    methodLead: 'Passos reais do instituto — sem inventar durações ou resultados.',
    beautyTitle: 'Beleza & transformação',
    beautyLead: 'Serviços de salão com o mesmo cuidado de avaliação quando o fio precisa.',
    beautyShowcaseEyebrow: 'Mais resultados reais',
    therapyEyebrow: 'Terapia capilar',
    therapyTitle: 'Terapia & cuidados do couro',
    therapyLead: 'Onde a intenção de pesquisa encontra a avaliação personalizada.',
    fibreTitle: 'Cuidados do fio',
    fibreLead: 'Quando a fibra pede água, nutrição ou estrutura.',
  },
  es: {
    heroLead:
      'Belleza, terapia y cuidados del hilo al cuero — un solo lugar para ver qué existe, qué tiene sentido para usted y cómo reservar.',
    metaDescription:
      'Belleza, terapia capilar y cuidados del hilo al cuero — catálogo unificado del Instituto Ana Sampaio en Marinha Grande.',
    chooseEyebrow: 'Cómo elegir',
    chooseTitle: '¿Qué busca hoy?',
    chooseLead: 'Empiece por la intención. Luego profundizamos en la valoración — sin promesas genéricas.',
    intentBeautyTitle: 'Quiero color e imagen con criterio',
    intentBeautyBody: 'Mechas personalizadas, corte, coloración, brushing y alisado.',
    intentTherapyTitle: 'Quiero cuidar la salud capilar',
    intentTherapyBody: 'Caída, cuero, detox, tecnologías y protocolos personalizados.',
    intentFibreTitle: 'Quiero recuperar el hilo',
    intentFibreBody: 'Reconstrucción, hidratación, nutrición y corte bordado.',
    quote:
      'Para mí, cada cita empieza por escuchar el cabello — y a la persona. Solo después elegimos el camino.',
    methodEyebrow: 'Metodología',
    methodTitle: 'Cómo funciona el acompañamiento',
    methodLead: 'Pasos reales del instituto — sin inventar duraciones o resultados.',
    beautyTitle: 'Belleza y transformación',
    beautyLead: 'Servicios de salón con el mismo cuidado de valoración cuando el hilo lo necesita.',
    beautyShowcaseEyebrow: 'Más resultados reales',
    therapyEyebrow: 'Terapia capilar',
    therapyTitle: 'Terapia y cuidados del cuero',
    therapyLead: 'Donde la intención de investigación encuentra la valoración personalizada.',
    fibreTitle: 'Cuidados del hilo',
    fibreLead: 'Cuando la fibra pide agua, nutrición o estructura.',
  },
  en: {
    heroLead:
      'Beauty, therapy and care from strand to scalp — one place to see what exists, what fits you and how to book.',
    metaDescription:
      'Beauty, scalp therapy and strand-to-scalp care — the Ana Sampaio institute catalogue in Marinha Grande.',
    chooseEyebrow: 'How to choose',
    chooseTitle: 'What are you looking for today?',
    chooseLead: 'Start with intention. Then we go deeper in the assessment — no generic promises.',
    intentBeautyTitle: 'I want colour and image with criteria',
    intentBeautyBody: 'Personalised highlights, cut, colour, blow-dry and straightening.',
    intentTherapyTitle: 'I want to care for hair health',
    intentTherapyBody: 'Shedding, scalp, detox, technologies and personalised protocols.',
    intentFibreTitle: 'I want to restore the fibre',
    intentFibreBody: 'Reconstruction, hydration, nourishment and point-cutting.',
    quote:
      'For me, every appointment starts by listening to the hair — and the person. Only then do we choose the path.',
    methodEyebrow: 'Method',
    methodTitle: 'How follow-up works',
    methodLead: 'Real institute steps — without inventing durations or results.',
    beautyTitle: 'Beauty & transformation',
    beautyLead: 'Salon services with the same assessment care when the fibre needs it.',
    beautyShowcaseEyebrow: 'More real results',
    therapyEyebrow: 'Scalp therapy',
    therapyTitle: 'Therapy & scalp care',
    therapyLead: 'Where research intent meets personalised assessment.',
    fibreTitle: 'Strand care',
    fibreLead: 'When the fibre needs water, nourishment or structure.',
  },
}

export const aboutPageCopy: Record<
  UrlLocale,
  {
    quote: string
    lookTitle: string
    lookP1: string
    lookP2Prefix: string
    lookP2Suffix: string
    philosophyTitle: string
    approachTitle: string
    approachLead: string
    trainingTitle: string
    spaceTitle: string
    spaceLead: string
    ebookBridgeTitle: string
    ebookBridgeLead: string
    bookEyebrow: string
    bookTitle: string
    bookLead: string
    bookBody: string
    bookCta: string
    bookUrl: string
    bookAlt: string
    circuloEyebrow: string
    circuloTitle: string
    circuloLead: string
    circuloBody1: string
    circuloBody2: string
    circuloClosing: string
    circuloCta: string
    circuloWaMessage: string
    trainingBody1: string
    trainingBody2: string
    spaceAlt: string
    spaceAmbienteEyebrow: string
    spaceResultsEyebrow: string
    resultLabels: Record<string, string>
    lightboxClose: string
    lightboxPrev: string
    lightboxNext: string
    anaAlt: string
  }
> = {
  pt: {
    quote:
      'Na minha forma de trabalhar, o cabelo nunca é só estética — é saúde, história e a pessoa que está à frente.',
    lookTitle: 'Um olhar que une beleza e saúde capilar',
    lookP1:
      'Ana Sampaio é cabeleireira e terapeuta capilar integrativa. No Instituto de Beleza e Saúde Capilar, em Marinha Grande, cada atendimento parte da escuta — do que sente nos fios, no couro cabeludo e no visual que quer viver no espelho.',
    lookP2Prefix: 'Com',
    lookP2Suffix:
      ', o trabalho combina técnica, presença e honestidade: se algo não for o melhor caminho agora, diz-se com clareza — e propõe-se o que faz sentido.',
    philosophyTitle: 'Filosofia de atendimento',
    approachTitle: 'Abordagem integrativa',
    approachLead: 'Passos reais do cuidado — escuta, observação, plano e acompanhamento.',
    trainingTitle: 'Formação e especialização',
    trainingBody1:
      'Além da experiência em salão, Ana Sampaio aprofunda o cuidado com aromaterapia, cosmetologia, visagismo e coloração pessoal aplicado ao cabelo e estudos em tricologia — incluindo formação pela ABT e seminário internacional na Europa.',
    trainingBody2:
      'O objectivo não é prometer milagres: é investigar a causa, respeitar o fio e construir um acompanhamento sustentável consigo.',
    spaceTitle: 'O espaço',
    spaceLead: 'Um ambiente pensado para calma, natureza e atenção individual.',
    spaceAlt: 'Ambiente e trabalho no instituto Ana Sampaio',
    ebookBridgeTitle: 'O guia da Ana Sampaio',
    ebookBridgeLead: 'Para cuidar em casa com critério — o e-book Guia Meu Cabelo dos Sonhos.',
    bookEyebrow: 'Livro da Ana Sampaio',
    bookTitle: 'Raízes e Asas',
    bookLead: 'Encontre no fundo da tua alma o poder de voar além dos limites',
    bookBody:
      'Em Raízes e Asas, Ana Sampaio partilha a sua jornada real de dor, superação, fé e renascimento. Entre lágrimas que regaram sonhos e desafios que pareciam intransponíveis, revela como encontrou forças para se reerguer, reconectar-se com a fé e descobrir o seu propósito. Mais do que um livro, é um abraço para quem já se sentiu perdida — e um lembrete de que os sonhos ainda têm asas.',
    bookCta: 'Ver na Amazon',
    bookUrl: 'https://link.amazon/B03mmuQSH',
    bookAlt: 'Raízes e Asas — livro de Ana Sampaio',
    circuloEyebrow: 'Projeto',
    circuloTitle: 'Círculo de Mulheres, Raízes & Asas',
    circuloLead: 'Um espaço para pausar, acolher, partilhar e reconectar-se consigo mesma.',
    circuloBody1:
      'O Círculo de Mulheres é um encontro criado para mulheres que desejam olhar com mais carinho para si, cuidar do emocional e fortalecer a autoestima. Um espaço de acolhimento, escuta e troca, onde podemos conversar sobre autocuidado, autoestima, emoções, relacionamentos, propósito e os desafios da vida — sempre com respeito à história e à individualidade de cada mulher.',
    circuloBody2:
      'Porque, assim como as raízes nos sustentam, são as asas que nos lembram que podemos recomeçar, crescer e voar.',
    circuloClosing: 'Um encontro para cuidar de dentro para fora.',
    circuloCta: 'Saber mais',
    circuloWaMessage:
      'Olá Ana Sampaio, gostaria de saber mais sobre o Círculo de Mulheres, Raízes & Asas.',
    spaceAmbienteEyebrow: 'Ambiente do instituto',
    spaceResultsEyebrow: 'Trabalhos realizados',
    resultLabels: {
      ambiente: 'Ambiente do instituto',
      mechas: 'Mechas personalizadas',
      coloracao: 'Coloração',
      corte: 'Corte',
      brushing: 'Brushing',
      alisamento: 'Alisamento',
      escova: 'Escova terapêutica',
      queda: 'Queda capilar',
      caspa: 'Caspa',
      dermatite: 'Dermatite seborreica',
      calvicie: 'Calvície',
      alopecia: 'Alopecia areata',
      microagulhamento: 'Microagulhamento',
      detox: 'Detox do couro',
      oleosidade: 'Oleosidade',
      hidrica: 'Reposição hídrica',
      lipidica: 'Reposição lipídica',
      reconstrucao: 'Reconstrução do fio',
      blend: 'Blend de óleos',
    },
    lightboxClose: 'Fechar',
    lightboxPrev: 'Imagem anterior',
    lightboxNext: 'Imagem seguinte',
    anaAlt: 'Ana Sampaio no instituto',
  },
  es: {
    quote:
      'En mi forma de trabajar, el cabello nunca es solo estética — es salud, historia y la persona que está delante.',
    lookTitle: 'Una mirada que une belleza y salud capilar',
    lookP1:
      'Ana Sampaio es peluquera y terapeuta capilar integrativa. En el Instituto de Belleza y Salud Capilar, en Marinha Grande, cada cita parte de la escucha — de lo que siente en los hilos, en el cuero y en el visual que quiere vivir frente al espejo.',
    lookP2Prefix: 'Con',
    lookP2Suffix:
      ', el trabajo combina técnica, presencia y honestidad: si algo no es el mejor camino ahora, se dice con claridad — y se propone lo que tiene sentido.',
    philosophyTitle: 'Filosofía de atención',
    approachTitle: 'Enfoque integrativo',
    approachLead: 'Pasos reales del cuidado — escucha, observación, plan y acompañamiento.',
    trainingTitle: 'Formación y especialización',
    trainingBody1:
      'Además de la experiencia en salón, Ana Sampaio profundiza el cuidado con aromaterapia, cosmetología, visagismo aplicado al cabello y estudios en tricología — incluida formación por la ABT y un seminario internacional en Europa.',
    trainingBody2:
      'El objetivo no es prometer milagros: es investigar la causa, respetar el hilo y construir un acompañamiento sostenible con usted.',
    spaceTitle: 'El espacio',
    spaceLead: 'Un ambiente pensado para la calma, la naturaleza y la atención individual.',
    spaceAlt: 'Ambiente y trabajo en el instituto Ana Sampaio',
    ebookBridgeTitle: 'La guía de Ana Sampaio',
    ebookBridgeLead: 'Para cuidar en casa con criterio — el e-book Guía Mi Cabello de Ensueño.',
    bookEyebrow: 'Libro de Ana Sampaio',
    bookTitle: 'Raízes e Asas',
    bookLead: 'Encuentra en el fondo de tu alma el poder de volar más allá de los límites',
    bookBody:
      'En Raízes e Asas, Ana Sampaio comparte su viaje real de dolor, superación, fe y renacimiento. Entre lágrimas que regaron sueños y desafíos que parecían infranqueables, revela cómo encontró fuerzas para levantarse, reconectar con su fe y descubrir su propósito. Más que un libro, es un abrazo para quien se ha sentido perdida — y un recordatorio de que los sueños aún tienen alas.',
    bookCta: 'Ver en Amazon',
    bookUrl: 'https://link.amazon/B03mmuQSH',
    bookAlt: 'Raízes e Asas — libro de Ana Sampaio',
    circuloEyebrow: 'Proyecto',
    circuloTitle: 'Círculo de Mujeres, Raízes & Asas',
    circuloLead: 'Un espacio para pausar, acoger, compartir y reconectar consigo misma.',
    circuloBody1:
      'El Círculo de Mujeres es un encuentro creado para mujeres que desean mirarse con más cariño, cuidar lo emocional y fortalecer la autoestima. Un espacio de acogida, escucha e intercambio, donde podemos hablar de autocuidado, autoestima, emociones, relaciones, propósito y los desafíos de la vida — siempre con respeto a la historia y a la individualidad de cada mujer.',
    circuloBody2:
      'Porque, así como las raíces nos sostienen, son las alas las que nos recuerdan que podemos recomenzar, crecer y volar.',
    circuloClosing: 'Un encuentro para cuidar de dentro hacia fuera.',
    circuloCta: 'Saber más',
    circuloWaMessage:
      'Hola Ana Sampaio, me gustaría saber más sobre el Círculo de Mujeres, Raízes & Asas.',
    spaceAmbienteEyebrow: 'Ambiente del instituto',
    spaceResultsEyebrow: 'Trabajos realizados',
    resultLabels: {
      ambiente: 'Ambiente del instituto',
      mechas: 'Mechas personalizadas',
      coloracao: 'Coloración',
      corte: 'Corte',
      brushing: 'Brushing',
      alisamento: 'Alisado',
      escova: 'Cepillado terapéutico',
      queda: 'Caída capilar',
      caspa: 'Caspa',
      dermatite: 'Dermatitis seborreica',
      calvicie: 'Calvicie',
      alopecia: 'Alopecia areata',
      microagulhamento: 'Microagujado',
      detox: 'Detox del cuero',
      oleosidade: 'Oleosidad',
      hidrica: 'Reposición hídrica',
      lipidica: 'Reposición lipídica',
      reconstrucao: 'Reconstrucción del cabello',
      blend: 'Blend de aceites',
    },
    lightboxClose: 'Cerrar',
    lightboxPrev: 'Imagen anterior',
    lightboxNext: 'Imagen siguiente',
    anaAlt: 'Ana Sampaio en el instituto',
  },
  en: {
    quote:
      'In how I work, hair is never only aesthetics — it is health, history and the person in front of me.',
    lookTitle: 'A view that joins beauty and hair health',
    lookP1:
      'Ana Sampaio is a hairdresser and integrative scalp therapist. At the Beauty & Hair Health Institute in Marinha Grande, every appointment starts with listening — to what you feel in your hair, scalp and the look you want in the mirror.',
    lookP2Prefix: 'With',
    lookP2Suffix:
      ', the work combines technique, presence and honesty: if something isn’t the best path right now, we say so clearly — and propose what makes sense.',
    philosophyTitle: 'Care philosophy',
    approachTitle: 'Integrative approach',
    approachLead: 'Real care steps — listening, observation, plan and follow-up.',
    trainingTitle: 'Training and specialisation',
    trainingBody1:
      'Beyond salon experience, Ana Sampaio deepens care with aromatherapy, cosmetology, hair visagism and trichology studies — including ABT training and an international seminar in Europe.',
    trainingBody2:
      'The goal is not to promise miracles: it is to investigate the cause, respect the fibre and build sustainable follow-up with you.',
    spaceTitle: 'The space',
    spaceLead: 'An environment designed for calm, nature and individual attention.',
    spaceAlt: 'Atmosphere and work at the Ana Sampaio institute',
    ebookBridgeTitle: 'Ana Sampaio’s guide',
    ebookBridgeLead: 'For at-home care with criteria — the My Dream Hair Guide e-book.',
    bookEyebrow: 'Ana Sampaio’s book',
    bookTitle: 'Raízes e Asas',
    bookLead: 'Find in the depths of your soul the power to fly beyond limits',
    bookBody:
      'In Raízes e Asas, Ana Sampaio shares her real journey of pain, overcoming, faith and rebirth. Between tears that watered dreams and challenges that seemed impossible, she reveals how she found strength to rise again, reconnect with faith and discover purpose. More than a book, it is an embrace for anyone who has felt lost — and a reminder that dreams still have wings.',
    bookCta: 'View on Amazon',
    bookUrl: 'https://link.amazon/B03mmuQSH',
    bookAlt: 'Raízes e Asas — book by Ana Sampaio',
    circuloEyebrow: 'Project',
    circuloTitle: 'Women’s Circle, Raízes & Asas',
    circuloLead: 'A space to pause, welcome, share and reconnect with yourself.',
    circuloBody1:
      'The Women’s Circle is a gathering created for women who want to look at themselves with more kindness, care for their emotional wellbeing and strengthen self-esteem. A space of welcome, listening and exchange, where we can talk about self-care, self-esteem, emotions, relationships, purpose and life’s challenges — always respecting each woman’s story and individuality.',
    circuloBody2:
      'Because, just as roots sustain us, wings remind us that we can begin again, grow and fly.',
    circuloClosing: 'A gathering to care from the inside out.',
    circuloCta: 'Learn more',
    circuloWaMessage:
      'Hello Ana Sampaio, I would like to know more about the Women’s Circle, Raízes & Asas.',
    spaceAmbienteEyebrow: 'Institute atmosphere',
    spaceResultsEyebrow: 'Completed work',
    resultLabels: {
      ambiente: 'Institute atmosphere',
      mechas: 'Personalised highlights',
      coloracao: 'Colour',
      corte: 'Cut',
      brushing: 'Blow-dry',
      alisamento: 'Straightening',
      escova: 'Therapeutic brushing',
      queda: 'Hair loss',
      caspa: 'Dandruff',
      dermatite: 'Seborrheic dermatitis',
      calvicie: 'Hair loss pattern',
      alopecia: 'Alopecia areata',
      microagulhamento: 'Microneedling',
      detox: 'Scalp detox',
      oleosidade: 'Oiliness',
      hidrica: 'Hydration',
      lipidica: 'Lipid replenishment',
      reconstrucao: 'Hair reconstruction',
      blend: 'Oil blend',
    },
    lightboxClose: 'Close',
    lightboxPrev: 'Previous image',
    lightboxNext: 'Next image',
    anaAlt: 'Ana Sampaio at the institute',
  },
}
