import type { Service } from '@/types/domain'

export const serviceCategories = [
  { id: 'beleza' as const, titleKey: 'beauty' },
  { id: 'tratamentos' as const, titleKey: 'treatments' },
]

/**
 * Full service catalogue aligned with Ana Sampaio institute offering.
 * Localized UI labels stay PT-PT source of truth for v1; images are unique per service.
 */
export const services: Service[] = [
  {
    id: 'mechas',
    slug: 'mechas-madeixas',
    name: 'Mechas / Madeixas',
    category: 'beleza',
    shortDescription: 'Luz no rosto, tom certo e fios respeitados — do teste à escolha da cor.',
    description:
      'Se sonha com mechas, começamos por olhar para o seu cabelo de verdade. Testamos quando faz sentido, escolhemos o tom consigo e avançamos com calma para um resultado bonito, cuidando da fibra.',
    image: '/images/services/mechas.jpg',
    imageAlt: 'Mechas luminosas no Instituto Ana Sampaio',
    ctaType: 'whatsapp',
    ctaLabel: 'Quero falar de mechas',
  },
  {
    id: 'brushing',
    slug: 'brushing',
    name: 'Brushing',
    category: 'beleza',
    shortDescription: 'Acabamento que faz o cabelo cair bem e o dia fluir melhor.',
    description:
      'Brushing pensado para o seu tipo de fio e para a rotina que tem. Sai com movimento, brilho e a sensação de “está feito”.',
    image: '/images/services/brushing.jpg',
    imageAlt: 'Brushing profissional',
    ctaType: 'booking',
    ctaLabel: 'Pedir brushing',
  },
  {
    id: 'corte',
    slug: 'corte',
    name: 'Corte',
    category: 'beleza',
    shortDescription: 'Um corte que respeita o seu rosto, o seu estilo e o crescimento natural.',
    description:
      'Conversamos sobre o que quer ver no espelho — e sobre o que é realista para o seu cabelo. O corte é preciso, pessoal e feito para crescer bem.',
    image: '/images/services/corte.jpg',
    imageAlt: 'Corte com movimento',
    ctaType: 'booking',
    ctaLabel: 'Pedir corte',
  },
  {
    id: 'coloracao',
    slug: 'coloracao',
    name: 'Coloração',
    category: 'beleza',
    shortDescription: 'Cor com intenção: a sua história capilar conta tanto quanto o tom desejado.',
    description:
      'Antes de colorir, olhamos para o histórico dos fios. Assim evitamos surpresas e construímos uma cor que fica bem — e que o cabelo consegue acompanhar.',
    image: '/images/services/coloracao.jpg',
    imageAlt: 'Coloração capilar',
    ctaType: 'whatsapp',
    ctaLabel: 'Quero saber sobre cor',
  },
  {
    id: 'alisamento',
    slug: 'alisamento',
    name: 'Alisamento',
    category: 'beleza',
    shortDescription: 'Alisar sim — mas só depois de perceber se o cabelo está preparado.',
    description:
      'O alisamento começa com avaliação. Se for o caminho certo para si, avançamos com cuidado. Se não for, dizemos-lhe com honestidade e propomos outra solução.',
    image: '/images/services/alisamento.jpg',
    imageAlt: 'Alisamento',
    ctaType: 'booking',
    ctaLabel: 'Pedir avaliação',
  },
  {
    id: 'corte-bordado',
    slug: 'corte-bordado',
    name: 'Corte bordado',
    category: 'beleza',
    shortDescription: 'Leveza e movimento, fio a fio, sem perder o comprimento que quer.',
    description:
      'Ideal quando quer o cabelo mais leve, com queda natural, sem um corte “seco”. É detalhe, paciência e olhar para o que o fio precisa.',
    image: '/images/services/corte-bordado.jpg',
    imageAlt: 'Corte bordado',
    ctaType: 'booking',
    ctaLabel: 'Pedir corte bordado',
  },
  {
    id: 'queda',
    slug: 'queda-capilar',
    name: 'Queda Capilar',
    category: 'tratamentos',
    shortDescription: 'Avaliação com tricoscopia e plano personalizado para a causa da queda.',
    description:
      'A queda é multifatorial. Identificamos causas com avaliação detalhada (tricoscopia e biorressonância quando indicado) e desenhamos um protocolo à sua medida.',
    image: '/images/services/queda.jpg',
    imageAlt: 'Avaliação de queda capilar',
    ctaType: 'booking',
    ctaLabel: 'Avaliar queda',
  },
  {
    id: 'caspa',
    slug: 'caspa',
    name: 'Caspa',
    category: 'tratamentos',
    shortDescription: 'Diagnóstico e detox do couro com blends e calmia.',
    description:
      'Tratamos caspa com abordagem personalizada: detox do couro, sessões de calmia e blends de óleos naturais para restaurar o equilíbrio.',
    image: '/images/services/caspa.jpg',
    imageAlt: 'Tratamento para caspa',
    ctaType: 'whatsapp',
    ctaLabel: 'Falar sobre caspa',
  },
  {
    id: 'oleosidade',
    slug: 'oleosidade-excessiva',
    name: 'Oleosidade Excessiva',
    category: 'tratamentos',
    shortDescription: 'Regular o sebo e devolver conforto ao couro cabeludo.',
    description:
      'Protocolos com óleos naturais e produtos fitoterápicos para ajudar a regular a produção de sebo e promover a saúde dos fios.',
    image: '/images/services/oleosidade.jpg',
    imageAlt: 'Tratamento para oleosidade',
    ctaType: 'whatsapp',
    ctaLabel: 'Quero equilibrar o couro',
  },
  {
    id: 'dermatite',
    slug: 'dermatite-seborreica',
    name: 'Dermatite Seborreica',
    category: 'tratamentos',
    shortDescription: 'Calmia e cuidado para reduzir inflamação e desconforto.',
    description:
      'Abordagem que inclui sessões de calmia para acalmar e restaurar a saúde do couro, reduzindo sintomas associados.',
    image: '/images/services/dermatite.jpg',
    imageAlt: 'Cuidado para dermatite seborreica',
    ctaType: 'booking',
    ctaLabel: 'Pedir avaliação',
  },
  {
    id: 'calvicie',
    slug: 'calvicie',
    name: 'Calvície',
    category: 'tratamentos',
    shortDescription: 'Microagulhamento e activos de crescimento quando indicado.',
    description:
      'Para alopecia androgenética e áreas rarefeitas, podemos integrar microagulhamento e activos de crescimento após avaliação individual.',
    image: '/images/services/calvicie.jpg',
    imageAlt: 'Tratamento para calvície',
    ctaType: 'booking',
    ctaLabel: 'Quero avaliar',
  },
  {
    id: 'alopecia',
    slug: 'alopecia-areata',
    name: 'Alopecia Areata',
    category: 'tratamentos',
    shortDescription: 'Abordagem anti-inflamatória e acompanhamento próximo.',
    description:
      'Condição autoimune frequentemente ligada a factores emocionais. Tratamos com protocolo cuidando do couro e do bem-estar global.',
    image: '/images/services/alopecia.jpg',
    imageAlt: 'Acompanhamento em alopecia areata',
    ctaType: 'whatsapp',
    ctaLabel: 'Falar com a Ana',
  },
  {
    id: 'reconstrucao',
    slug: 'reconstrucao-do-fio',
    name: 'Reconstrução do fio',
    category: 'tratamentos',
    shortDescription: 'Para cabelo quebradiço, sem força, que “não segura” nada.',
    description:
      'Quando falta massa no fio, a reconstrução ajuda a devolver estrutura. Não é milagre de uma sessão — é um plano com acompanhamento.',
    image: '/images/services/reconstrucao.jpg',
    imageAlt: 'Reconstrução capilar',
    ctaType: 'booking',
    ctaLabel: 'Quero recuperar o cabelo',
  },
  {
    id: 'reposicao-hidrica',
    slug: 'reposicao-hidrica',
    name: 'Reposição hídrica',
    category: 'tratamentos',
    shortDescription: 'Para fios secos, ásperos, sem vida ao toque.',
    description:
      'Se o cabelo pede água, hidratamos com intenção. Sente a diferença no toque, no movimento e no conforto do dia a dia.',
    image: '/images/services/hidrica.jpg',
    imageAlt: 'Hidratação capilar',
    ctaType: 'whatsapp',
    ctaLabel: 'Quero hidratar',
  },
  {
    id: 'reposicao-lipidica',
    slug: 'reposicao-lipidica',
    name: 'Reposição lipídica',
    category: 'tratamentos',
    shortDescription: 'Para cabelo opaco, com frizz e sem aquele brilho saudável.',
    description:
      'Quando falta nutrição, o fio perde selagem e brilho. A reposição lipídica ajuda a equilibrar — com um protocolo feito para si.',
    image: '/images/services/lipidica.jpg',
    imageAlt: 'Nutrição capilar',
    ctaType: 'whatsapp',
    ctaLabel: 'Quero nutrir o cabelo',
  },
  {
    id: 'detox',
    slug: 'detox-couro-cabeludo',
    name: 'Detox do couro cabeludo',
    category: 'tratamentos',
    shortDescription: 'Para quem sente o couro “pesado”, irritado ou desequilibrado.',
    description:
      'Cuidamos do conforto do couro cabeludo com uma abordagem personalizada. O objectivo é bem-estar e equilíbrio.',
    image: '/images/services/detox.jpg',
    imageAlt: 'Detox do couro cabeludo',
    ctaType: 'whatsapp',
    ctaLabel: 'Falar sobre o couro cabeludo',
  },
  {
    id: 'escova-terapeutica',
    slug: 'escova-terapeutica',
    name: 'Escova terapêutica',
    category: 'tratamentos',
    shortDescription: 'Mais do que alisar: um momento de cuidado integrado ao seu plano.',
    description:
      'A escova terapêutica entra no acompanhamento quando faz sentido para o seu cabelo e para o seu conforto.',
    image: '/images/services/escova.jpg',
    imageAlt: 'Escova terapêutica',
    ctaType: 'whatsapp',
    ctaLabel: 'Quero saber mais',
  },
  {
    id: 'massagem',
    slug: 'massagens-oleos-terapeuticos',
    name: 'Massagens com óleos terapêuticos',
    category: 'tratamentos',
    shortDescription: 'Relaxamento, circulação e nutrição do couro e dos fios.',
    description:
      'Massagem combinada com óleos essenciais específicos para promover relaxamento, estimular a circulação e nutrir o couro cabeludo.',
    image: '/images/services/massagem.jpg',
    imageAlt: 'Massagem capilar com óleos',
    ctaType: 'booking',
    ctaLabel: 'Agendar massagem',
  },
  {
    id: 'chaterapia',
    slug: 'chaterapia',
    name: 'Chaterapia',
    category: 'tratamentos',
    shortDescription: 'Natureza a favor da calmia e do bem-estar.',
    description:
      'Uma forma de utilizar a natureza a nosso favor para promover calmia e bem-estar no ritual de cuidado.',
    image: '/images/services/chaterapia.jpg',
    imageAlt: 'Chaterapia capilar',
    ctaType: 'whatsapp',
    ctaLabel: 'Saber mais',
  },
  {
    id: 'musicaterapia',
    slug: 'musicaterapia',
    name: 'Musicaterapia',
    category: 'tratamentos',
    shortDescription: 'Música como ferramenta de relaxamento e estímulo.',
    description:
      'Utilização de música como ferramenta terapêutica para promover relaxamento, alívio do stress e estimulação mental e emocional.',
    image: '/images/services/musicaterapia.jpg',
    imageAlt: 'Musicaterapia no instituto',
    ctaType: 'whatsapp',
    ctaLabel: 'Saber mais',
  },
  {
    id: 'blend',
    slug: 'blend-oleos-naturais',
    name: 'Blend de óleos naturais',
    category: 'tratamentos',
    shortDescription: 'Combinação única seleccionada para as suas necessidades.',
    description:
      'Óleos naturais seleccionados de acordo com as necessidades específicas da cliente para saúde do couro e dos fios.',
    image: '/images/services/blend.jpg',
    imageAlt: 'Blend de óleos naturais',
    ctaType: 'whatsapp',
    ctaLabel: 'Pedir blend',
  },
  {
    id: 'alta-freq',
    slug: 'alta-frequencia',
    name: 'Alta frequência',
    category: 'tratamentos',
    shortDescription: 'Estimular circulação e oxigenação do couro cabeludo.',
    description:
      'Corrente de alta frequência para estimular a circulação, promover oxigenação e auxiliar na absorção de nutrientes.',
    image: '/images/services/alta-freq.jpg',
    imageAlt: 'Tratamento de alta frequência',
    ctaType: 'booking',
    ctaLabel: 'Incluir no plano',
  },
  {
    id: 'led',
    slug: 'led-vermelho',
    name: 'LED vermelho',
    category: 'tratamentos',
    shortDescription: 'Luz de baixa intensidade para regeneração celular.',
    description:
      'Terapia de luz vermelha de baixa intensidade que estimula o metabolismo celular e auxilia na saúde do couro e dos fios.',
    image: '/images/services/led.jpg',
    imageAlt: 'Terapia com LED vermelho',
    ctaType: 'booking',
    ctaLabel: 'Incluir no plano',
  },
  {
    id: 'microagulhamento',
    slug: 'microagulhamento',
    name: 'Microagulhamento',
    category: 'tratamentos',
    shortDescription: 'Estimular colagénio e absorção de activos no couro.',
    description:
      'Microperfurações controladas no couro para estimular colagénio e facilitar a absorção de nutrientes, quando clinicamente indicado.',
    image: '/images/services/microagulhamento.jpg',
    imageAlt: 'Microagulhamento capilar',
    ctaType: 'booking',
    ctaLabel: 'Pedir avaliação',
  },
]

export function getServices() {
  return services
}

export function getServicesByCategory(category: Service['category']) {
  return services.filter((s) => s.category === category)
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function getServiceOptionsForBooking() {
  return services.map((s) => ({ id: s.id, name: s.name }))
}
