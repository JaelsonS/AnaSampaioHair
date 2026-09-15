import type { Service } from '@/types/domain'

export const serviceCategories = [
  { id: 'beleza' as const, titleKey: 'beauty' },
  { id: 'tratamentos' as const, titleKey: 'treatments' },
]

const R = '/images/results'
const G = '/images/mechas/gallery'
const A = '/images/about'

/**
 * Full service catalogue aligned with Ana Sampaio institute offering.
 * Card images: real results (depois) — hair and institute, never clinical scalp photos.
 */
export const services: Service[] = [
  {
    id: 'mechas',
    slug: 'mechas-madeixas',
    name: 'Consultoria de Cor e Visagismo para Mechas Personalizadas',
    category: 'beleza',
    shortDescription:
      'Descubra os tons que harmonizam com a temperatura da sua pele, os seus olhos e a imagem que deseja transmitir.',
    description:
      'A partir da análise da íris, temperatura de pele, coloração pessoal e visagismo, criamos uma proposta de mechas personalizada para iluminar o rosto, valorizar os traços naturais e respeitar a identidade. A sua cor não precisa seguir tendências — precisa combinar consigo.',
    image: `${G}/coloracao-mechas01-depois.webp`,
    imageAlt: 'Mechas personalizadas — resultado real no instituto',
    ctaType: 'whatsapp',
    ctaLabel: 'Agendar consultoria de mechas',
  },
  {
    id: 'brushing',
    slug: 'brushing',
    name: 'Brushing',
    category: 'beleza',
    shortDescription: 'Acabamento que faz o cabelo cair bem e o dia fluir melhor.',
    description:
      'Brushing pensado para o seu tipo de fio e para a rotina que tem. Sai com movimento, brilho e a sensação de “está feito”.',
    image: `${R}/brushing-resultado.webp`,
    imageAlt: 'Brushing profissional — cabelo com acabamento natural',
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
    image: `${R}/corte-depois.webp`,
    imageAlt: 'Corte capilar — resultado no instituto',
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
    image: `${G}/coloracao-02-depois.webp`,
    imageAlt: 'Coloração capilar — resultado real',
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
    image: `${R}/alisamento-resultado.webp`,
    imageAlt: 'Alisamento — cabelo liso e saudável',
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
    image: `${G}/coloracao-lado01-depois.webp`,
    imageAlt: 'Corte bordado — movimento e brilho no cabelo',
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
    image: `${R}/reconstrucao-depois.webp`,
    imageAlt: 'Tratamento capilar — fios recuperados no instituto',
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
    image: `${R}/blend-resultado.webp`,
    imageAlt: 'Tratamento capilar com blends naturais no instituto',
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
    image: `${R}/escova-resultado.webp`,
    imageAlt: 'Cabelo equilibrado — resultado de terapia capilar',
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
    image: `${A}/terapia-env.webp`,
    imageAlt: 'Sessão de terapia capilar no instituto Ana Sampaio',
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
    image: `${R}/terapia-tecnica.webp`,
    imageAlt: 'Tratamento técnico capilar no instituto',
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
    image: `${A}/tratamento-env.webp`,
    imageAlt: 'Ambiente de cuidado capilar no instituto Ana Sampaio',
    ctaType: 'whatsapp',
    ctaLabel: 'Falar com a Ana Sampaio',
  },
  {
    id: 'reconstrucao',
    slug: 'reconstrucao-do-fio',
    name: 'Reconstrução do fio',
    category: 'tratamentos',
    shortDescription: 'Para cabelo quebradiço, sem força, que “não segura” nada.',
    description:
      'Quando falta massa no fio, a reconstrução ajuda a devolver estrutura. Não é milagre de uma sessão — é um plano com acompanhamento.',
    image: `${R}/reconstrucao-depois.webp`,
    imageAlt: 'Reconstrução capilar — fios fortalecidos',
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
    image: `${R}/hidrica-depois.webp`,
    imageAlt: 'Reposição hídrica — cabelo hidratado e brilhante',
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
    image: `${R}/lipidica-depois.webp`,
    imageAlt: 'Reposição lipídica — brilho e nutrição no cabelo',
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
    image: `${R}/massagem-ambiente.webp`,
    imageAlt: 'Ritual de cuidado capilar no instituto',
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
    image: `${R}/escova-resultado.webp`,
    imageAlt: 'Escova terapêutica — resultado no instituto',
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
    image: `${R}/massagem-ambiente.webp`,
    imageAlt: 'Ambiente de massagem capilar no instituto',
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
    image: `${A}/ambiente-espaco.webp`,
    imageAlt: 'Chaterapia capilar — ambiente acolhedor',
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
    image: `${A}/ambiente-2.webp`,
    imageAlt: 'Musicaterapia no instituto Ana Sampaio',
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
    image: `${R}/blend-resultado.webp`,
    imageAlt: 'Blend de óleos naturais — cuidado capilar',
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
    image: `${R}/terapia-tecnica.webp`,
    imageAlt: 'Tratamento de alta frequência no instituto',
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
    image: `${R}/terapia-tecnica.webp`,
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
    image: `${R}/terapia-tecnica.webp`,
    imageAlt: 'Microagulhamento capilar — equipamento no instituto',
    ctaType: 'booking',
    ctaLabel: 'Pedir avaliação',
  },
]

/** Extra resultado photos for the beauty section showcase grid */
export const beautyShowcaseImages = [
  { src: `${G}/coloracao-00-depois.webp`, alt: 'Coloração capilar — resultado real' },
  { src: `${G}/coloracao-03-depois.webp`, alt: 'Coloração capilar — resultado real' },
  { src: `${R}/mechas-depois.webp`, alt: 'Mechas personalizadas — resultado real' },
  { src: `${G}/coloracao-01-frente-depois.webp`, alt: 'Coloração capilar — resultado real' },
  { src: `${G}/coloracao-mechas02-depois.webp`, alt: 'Mechas personalizadas — resultado real' },
  { src: `${R}/coloracao-depois.webp`, alt: 'Coloração capilar — resultado real' },
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
