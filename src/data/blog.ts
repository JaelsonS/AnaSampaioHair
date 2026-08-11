export type BlogCategory =
  | 'cuidados-capilares'
  | 'terapia-capilar'
  | 'cabelo'
  | 'coloracao'
  | 'mechas'
  | 'tratamentos'
  | 'saude-couro-cabeludo'

export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  categoryLabel: string
  date: string
  dateLabel: string
  image: string
  imageAlt: string
  content: string[]
  seoTitle: string
  seoDescription: string
}

export const blogCategories: { id: BlogCategory; label: string }[] = [
  { id: 'cuidados-capilares', label: 'Cuidados' },
  { id: 'terapia-capilar', label: 'Terapia' },
  { id: 'mechas', label: 'Mechas' },
  { id: 'tratamentos', label: 'Tratamentos' },
  { id: 'saude-couro-cabeludo', label: 'Couro cabeludo' },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'cabelo-oleoso-o-que-pode-estar-a-acontecer',
    title: 'Cabelo oleoso: o que pode estar a acontecer',
    excerpt:
      'Se lava e no dia seguinte já parece “pesado”, talvez não seja só o champô. Vamos olhar para o couro cabeludo com calma.',
    category: 'saude-couro-cabeludo',
    categoryLabel: 'Couro cabeludo',
    date: '2025-01-01',
    dateLabel: '1 de janeiro de 2025',
    image: '/images/terapia.jpg',
    imageAlt: 'Cuidados para cabelo oleoso',
    content: [
      'Conhece aquela sensação? Lava o cabelo à noite e, de manhã, já parece que passou um dia inteiro. Muita gente culpa o champô — e às vezes ele realmente não ajuda. Mas oleosidade a mais também pode ser o couro a pedir outro tipo de cuidado.',
      'No instituto, a Ana não começa por “vender um tratamento”. Começa por escutar: há quanto tempo é assim? O que mudou na rotina, no stress, na alimentação, nos produtos? O que o couro mostra ao toque e à vista?',
      'Só depois faz sentido falar em detox, tratamentos ou ajustes em casa. Porque tratar às cegas gasta dinheiro e paciência — e raramente resolve.',
      'Se isto lhe soa familiar, marque uma conversa. Não precisa de chegar com um diagnóstico. Chega com a sua história. O resto fazemos juntas.',
    ],
    seoTitle: 'Cabelo oleoso | Ana Sampaio Hair',
    seoDescription:
      'Perceba o que pode estar por detrás do cabelo oleoso e como uma avaliação personalizada pode ajudar.',
  },
  {
    id: '2',
    slug: 'como-saber-se-precisa-de-terapia-capilar',
    title: 'Como saber se precisa de terapia capilar',
    excerpt:
      'Queda, caspa, desconforto, fios sem vida… Há sinais. E há uma forma simples de começar: ser escutada.',
    category: 'terapia-capilar',
    categoryLabel: 'Terapia',
    date: '2024-12-31',
    dateLabel: '31 de dezembro de 2024',
    image: '/images/need-scalp.jpg',
    imageAlt: 'Terapia capilar',
    content: [
      'Se sente que “já experimentou de tudo” e o cabelo continua sem responder, talvez falte olhar para a causa — e não só para o sintoma.',
      'A terapia capilar integrativa, no instituto, começa por escuta e observação. Não prometemos milagres. Prometemos atenção e um plano feito para si.',
      'Pode ser queda, caspa, oleosidade, desconforto ou simplesmente a sensação de que o cabelo “não é o seu”. Em qualquer caso, o primeiro passo pode ser agendar uma avaliação e contar o que se passa — sem vergonha e sem pressa.',
      'Se quiser, escolha já o dia e a hora no site. A Ana confirma a disponibilidade no WhatsApp.',
    ],
    seoTitle: 'Preciso de terapia capilar? | Ana Sampaio Hair',
    seoDescription:
      'Sinais de que pode beneficiar de uma avaliação e acompanhamento de terapia capilar.',
  },
  {
    id: '3',
    slug: 'cabelo-danificado-por-onde-comecar',
    title: 'Cabelo danificado: por onde começar',
    excerpt:
      'Antes de comprar mais um produto milagroso, perceba se o fio pede água, nutrição ou reconstrução.',
    category: 'tratamentos',
    categoryLabel: 'Tratamentos',
    date: '2024-12-30',
    dateLabel: '30 de dezembro de 2024',
    image: '/images/tratamento.jpg',
    imageAlt: 'Cabelo danificado',
    content: [
      'Cabelo danificado não é tudo igual. Às vezes falta hidratação. Às vezes falta nutrição. Às vezes o fio precisa mesmo de massa.',
      'No salão, a Ana ajuda a ler o que o cabelo pede — para não tratar “às cegas” e gastar tempo e dinheiro no caminho errado.',
      'Se os fios estão a partir, sem elasticidade ou sem brilho, venha falar connosco. Começamos pelo essencial: perceber. Depois construímos um plano que faça sentido para a sua rotina.',
      'E se estiver a pensar em mechas ou cor ao mesmo tempo? Ainda mais razão para avaliar primeiro. Transformar com saúde começa no “antes”.',
    ],
    seoTitle: 'Cabelo danificado | Ana Sampaio Hair',
    seoDescription:
      'Por onde começar quando o cabelo está danificado — hidratação, nutrição ou reconstrução.',
  },
  {
    id: '4',
    slug: 'mechas-bonitas-comecam-com-avaliacao',
    title: 'Mechas bonitas começam com avaliação',
    excerpt:
      'Quer luz no rosto sem sacrificar a saúde dos fios? O segredo está no antes — não só no depois.',
    category: 'mechas',
    categoryLabel: 'Mechas',
    date: '2024-12-28',
    dateLabel: '28 de dezembro de 2024',
    image: '/images/mechas.jpg',
    imageAlt: 'Mechas',
    content: [
      'Mechas lindas no Instagram são fáceis de desejar. No cabelo real, o caminho pede honestidade: o que o fio aguenta hoje?',
      'Por isso avaliamos, falamos de tom, e quando faz sentido fazemos teste. A transformação fica mais segura — e o resultado, mais seu.',
      'Se está a pensar em mechas, diga-nos o que imagina. Nós dizemos o que é possível agora, com cuidado. Às vezes o melhor primeiro passo é tratar — e só depois iluminar.',
      'Quer marcar? Escolha o dia e a hora. A Ana responde no WhatsApp com a disponibilidade.',
    ],
    seoTitle: 'Mechas com avaliação | Ana Sampaio Hair',
    seoDescription:
      'Porque mechas bonitas e saudáveis começam com avaliação, tom certo e respeito pela fibra.',
  },
  {
    id: '5',
    slug: 'o-que-levar-a-primeira-avaliacao',
    title: 'O que levar (e o que esperar) na primeira avaliação',
    excerpt:
      'Não precisa de chegar com fotos perfeitas nem com um diagnóstico. Precisa de chegar consigo.',
    category: 'cuidados-capilares',
    categoryLabel: 'Cuidados',
    date: '2024-12-20',
    dateLabel: '20 de dezembro de 2024',
    image: '/images/avaliar.jpg',
    imageAlt: 'Avaliação capilar',
    content: [
      'Muita gente chega nervosa à primeira avaliação. “E se for uma coisa grave?” “E se eu não souber explicar?” Respira. Está no sítio certo para ser escutada.',
      'Traga o que lembrar: produtos que usa, colorações recentes, quando notou a mudança, se há comichão, queda, oleosidade. Se tiver fotos antigas do cabelo, óptimo — mas não é obrigatório.',
      'A Ana vai querer perceber a sua história e olhar para os fios e para o couro. No fim, sai com clareza: o que faz sentido agora, o que pode esperar, e como marcar o próximo passo.',
      'Se quiser, agende já pelo site. Escolha dia e hora — e envie no WhatsApp. Simples.',
    ],
    seoTitle: 'Primeira avaliação | Ana Sampaio Hair',
    seoDescription: 'O que esperar na primeira avaliação com a Ana Sampaio em Marinha Grande.',
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: BlogCategory) {
  return blogPosts.filter((post) => post.category === category)
}
