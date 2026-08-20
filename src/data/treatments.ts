import type { Treatment, TreatmentCategory } from '@/types/domain'

export const treatmentCategories: {
  id: TreatmentCategory
  title: string
  lead: string
}[] = [
  {
    id: 'sensorial',
    title: 'Para se sentir cuidada',
    lead: 'Momentos que acalmam o corpo enquanto cuidamos do cabelo.',
  },
  {
    id: 'tecnologias',
    title: 'Tecnologias',
    lead: 'Ferramentas que entram no plano só quando fazem sentido para si.',
  },
  {
    id: 'cuidados-fio',
    title: 'Cuidados do fio',
    lead: 'Hidratação, nutrição, força e movimento — conforme o que o fio pede.',
  },
  {
    id: 'cuidados-couro',
    title: 'Cuidados do couro',
    lead: 'Conforto e equilíbrio onde o cabelo nasce.',
  },
]

export const treatments: Treatment[] = [
  {
    id: 'massagens',
    name: 'Massagens com óleos terapêuticos',
    category: 'sensorial',
    description:
      'Um momento para respirar. Óleos escolhidos consigo, massagem suave e atenção plena ao couro e aos fios.',
  },
  {
    id: 'chaterapia',
    name: 'Chaterapia',
    category: 'sensorial',
    description:
      'Som e vibração para ajudar a desacelerar durante o atendimento — presença, sem pressa.',
  },
  {
    id: 'musicaterapia',
    name: 'Musicaterapia',
    category: 'sensorial',
    description:
      'A música certa no ambiente certo. Porque cuidar do cabelo também pode ser um momento seu.',
  },
  {
    id: 'blend-oleos',
    name: 'Blend de óleos naturais',
    category: 'sensorial',
    description:
      'Combinações pensadas para o seu acompanhamento — não uma fragrância igual para todas.',
  },
  {
    id: 'alta-frequencia',
    name: 'Alta frequência',
    category: 'tecnologias',
    description:
      'Usada no cuidado do couro cabeludo quando a avaliação mostra que faz sentido para si.',
  },
  {
    id: 'led-vermelho',
    name: 'LED vermelho',
    category: 'tecnologias',
    description:
      'Recurso integrado a protocolos personalizados — sempre depois de perceber o que precisa.',
  },
  {
    id: 'microagulhamento',
    name: 'Microagulhamento',
    category: 'tecnologias',
    description:
      'Só entra no plano após avaliação individual. Transparência primeiro; técnica a seguir.',
  },
  {
    id: 'reconstrucao-t',
    name: 'Reconstrução',
    category: 'cuidados-fio',
    description:
      'Quando o fio pede massa e força — com acompanhamento, não com milagre de uma sessão.',
  },
  {
    id: 'hidrica-t',
    name: 'Reposição hídrica',
    category: 'cuidados-fio',
    description: 'Para fios secos e ásperos que precisam de água e movimento de novo.',
  },
  {
    id: 'lipidica-t',
    name: 'Reposição lipídica',
    category: 'cuidados-fio',
    description: 'Nutrição para brilho, selagem e aquele toque de cabelo “vivo”.',
  },
  {
    id: 'escova-t',
    name: 'Escova terapêutica',
    category: 'cuidados-fio',
    description: 'Mais do que alisamento: um gesto de cuidado dentro do seu plano.',
  },
  {
    id: 'corte-bordado-t',
    name: 'Corte bordado',
    category: 'cuidados-fio',
    description: 'Leveza fio a fio, sem cortar o comprimento que quer manter.',
  },
  {
    id: 'detox-t',
    name: 'Detox do couro cabeludo',
    category: 'cuidados-couro',
    description: 'Para o couro se sentir mais leve, limpo e confortável — à sua medida.',
  },
]

export function getTreatments() {
  return treatments
}

export function getTreatmentsByCategory(category: TreatmentCategory) {
  return treatments.filter((t) => t.category === category)
}
