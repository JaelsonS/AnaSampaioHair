export type HairNeed = {
  id: string
  title: string
  description: string
  cta: { label: string; href: string }
  image: string
  imageAlt: string
  topic?: string
  serviceName?: string
}

export const hairNeeds: HairNeed[] = [
  {
    id: 'transformar',
    title: 'Quero mudar o visual',
    description: 'Mechas, corte, cor ou brushing — diga-nos o que imagina e vamos juntos.',
    cta: { label: 'Ver serviços de beleza', href: '/servicos#beleza' },
    image: '/images/needs/transformar.jpg',
    imageAlt: 'Transformação de visual',
  },
  {
    id: 'recuperar',
    title: 'O meu cabelo está cansado',
    description: 'Ressecado, sem força, sem brilho? Há caminho — começa por perceber o que falta.',
    cta: { label: 'Ver tratamentos', href: '/servicos#tratamentos' },
    image: '/images/needs/recuperar.jpg',
    imageAlt: 'Recuperação capilar',
  },
  {
    id: 'couro',
    title: 'O couro cabeludo incomoda',
    description: 'Queda, caspa, oleosidade ou desconforto: vamos perceber o que está a acontecer.',
    cta: { label: 'Conhecer terapia', href: '/terapia-capilar' },
    image: '/images/needs/couro.jpg',
    imageAlt: 'Cuidados do couro cabeludo',
  },
  {
    id: 'descobrir',
    title: 'Não sei bem o que preciso',
    description: 'Sem stress. Uma avaliação com a Ana existe exactamente para isso.',
    cta: { label: 'Quero agendar avaliação', href: 'booking' },
    image: '/images/needs/descobrir.jpg',
    imageAlt: 'Avaliação com Ana',
    serviceName: 'Avaliação personalizada',
  },
]
