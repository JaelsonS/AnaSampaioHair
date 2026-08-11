export type ServiceCategory = 'beleza' | 'tratamentos'

export type Service = {
  id: string
  slug: string
  name: string
  category: ServiceCategory
  shortDescription: string
  description: string
  image: string
  imageAlt: string
  cta: { label: string; href: string }
}

export const serviceCategories: {
  id: ServiceCategory
  title: string
  lead: string
}[] = [
  {
    id: 'beleza',
    title: 'Para se sentir linda no espelho',
    lead: 'Mechas, corte, cor e brushing — sempre com cuidado pelo que o seu cabelo aguenta hoje.',
  },
  {
    id: 'tratamentos',
    title: 'Para o cabelo voltar a respirar',
    lead: 'Quando os fios pedem água, nutrição ou força, tratamos o que está a falhar — sem pressa e sem receita igual para todas.',
  },
]

export const services: Service[] = [
  {
    id: 'mechas',
    slug: 'mechas-madeixas',
    name: 'Mechas / Madeixas',
    category: 'beleza',
    shortDescription: 'Luz no rosto, tom certo e fios respeitados — do teste à escolha da cor.',
    description:
      'Se sonha com mechas, começamos por olhar para o seu cabelo de verdade. Testamos quando faz sentido, escolhemos o tom consigo e avançamos com calma para um resultado bonito e cuidando da fibra.',
    image: '/images/services/mechas.jpg',
    imageAlt: 'Mechas luminosas',
    cta: { label: 'Quero falar de mechas', href: 'whatsapp' },
  },
  {
    id: 'brushing',
    slug: 'brushing',
    name: 'Brushing',
    category: 'beleza',
    shortDescription: 'Aquele acabamento que faz o cabelo cair bem e o dia fluir melhor.',
    description:
      'Brushing pensado para o seu tipo de fio e para a rotina que tem. Sai com movimento, brilho e a sensação de “está feito”.',
    image: '/images/services/brushing.jpg',
    imageAlt: 'Brushing profissional',
    cta: { label: 'Agendar brushing', href: 'booking' },
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
    cta: { label: 'Agendar corte', href: 'booking' },
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
    cta: { label: 'Quero saber sobre cor', href: 'whatsapp' },
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
    cta: { label: 'Pedir avaliação', href: 'booking' },
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
    cta: { label: 'Quero recuperar o cabelo', href: 'booking' },
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
    cta: { label: 'Quero hidratar', href: 'whatsapp' },
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
    cta: { label: 'Quero nutrir o cabelo', href: 'whatsapp' },
  },
  {
    id: 'detox',
    slug: 'detox-couro-cabeludo',
    name: 'Detox do couro cabeludo',
    category: 'tratamentos',
    shortDescription: 'Para quem sente o couro “pesado”, irritado ou desequilibrado.',
    description:
      'Cuidamos do conforto do couro cabeludo com uma abordagem personalizada. O objectivo é bem-estar e equilíbrio — não promessas milagrosas.',
    image: '/images/services/detox.jpg',
    imageAlt: 'Detox do couro cabeludo',
    cta: { label: 'Falar sobre o couro cabeludo', href: 'whatsapp' },
  },
  {
    id: 'corte-bordado',
    slug: 'corte-bordado',
    name: 'Corte bordado',
    category: 'tratamentos',
    shortDescription: 'Leveza e movimento, fio a fio, sem perder o comprimento que quer.',
    description:
      'Ideal quando quer o cabelo mais leve, com queda natural, sem um corte “seco”. É detalhe, paciência e olhar para o que o fio precisa.',
    image: '/images/services/corte-bordado.jpg',
    imageAlt: 'Corte bordado',
    cta: { label: 'Agendar corte bordado', href: 'booking' },
  },
  {
    id: 'escova-terapeutica',
    slug: 'escova-terapeutica',
    name: 'Escova terapêutica',
    category: 'tratamentos',
    shortDescription: 'Mais do que alisar: um momento de cuidado integrado ao seu plano.',
    description:
      'A escova terapêutica entra no acompanhamento quando faz sentido para o seu cabelo e para o seu conforto. Combinamos técnica e atenção individual.',
    image: '/images/services/escova.jpg',
    imageAlt: 'Escova terapêutica',
    cta: { label: 'Quero saber mais', href: 'whatsapp' },
  },
]

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category)
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
