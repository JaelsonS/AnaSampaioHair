export const trustItems = [
  { value: '16', labelKey: 'yearsBeauty' as const },
  { value: '5', labelKey: 'yearsTherapy' as const },
  { value: 'Olhar', labelKey: 'uniqueLook' as const },
  { value: 'Estudo', labelKey: 'continuousStudy' as const },
]

export const therapySteps = [
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
]

export const aboutHighlights = [
  '16 anos como cabeleireira',
  '5 anos como terapeuta capilar integrativa',
  'Especialização em aromaterapia',
  'Especialização em cosmetologia',
  'Visagismo e coloração pessoal aplicado ao cabelo',
  'Estudos pela ABT — Academia Brasileira de Tricologia',
  'Seminário internacional de tricologia na Europa',
]

export const experiencePoints = [
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
    description: 'Se algo não for o melhor para o seu cabelo agora, a Ana diz-lhe — com clareza.',
  },
  {
    title: 'Detalhe em cada gesto',
    description: 'Da avaliação à finalização, o cuidado está no que se vê e no que se sente.',
  },
]

export const hairNeeds = [
  {
    id: 'descobrir',
    title: 'Quero perceber o que se passa',
    description: 'Avaliação para compreender fios, couro cabeludo e o melhor caminho.',
    image: '/images/needs/descobrir.jpg',
    hrefKey: 'booking' as const,
    icon: 'search' as const,
  },
  {
    id: 'recuperar',
    title: 'Quero recuperar a saúde dos fios',
    description: 'Reconstrução, hidratação e nutrição com acompanhamento.',
    image: '/images/needs/recuperar.jpg',
    hrefKey: 'treatments' as const,
    icon: 'droplet' as const,
  },
  {
    id: 'couro',
    title: 'O meu couro cabeludo pede atenção',
    description: 'Conforto, equilíbrio e cuidados personalizados do couro.',
    image: '/images/needs/couro.jpg',
    hrefKey: 'therapy' as const,
    icon: 'leaf' as const,
  },
  {
    id: 'transformar',
    title: 'Quero transformar o visual',
    description: 'Mechas, cor, corte e brushing com respeito pela fibra.',
    image: '/images/needs/transformar.jpg',
    hrefKey: 'services' as const,
    icon: 'spark' as const,
  },
]
