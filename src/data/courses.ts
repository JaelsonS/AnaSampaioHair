/**
 * Upcoming professional trainings — lead capture for next class list.
 * Content from Ana Sampaio institute materials. No invented prices/dates.
 */

export type CourseTopic = {
  id: string
  title: string
  blurb: string
}

export const courseTopics: CourseTopic[] = [
  {
    id: 'terapia-capilar-integrativa',
    title: 'Terapia Capilar Integrativa',
    blurb: 'Avaliação, protocolos e prática de terapia capilar com olhar integrativo.',
  },
  {
    id: 'aromaterapia',
    title: 'Aromaterapia',
    blurb: 'Óleos essenciais aplicados com segurança e intenção no cuidado capilar.',
  },
  {
    id: 'corte-finalizacao-cachos',
    title: 'Corte e Finalização dos Cachos',
    blurb: 'Técnica e finalização para valorizar a textura natural dos cachos.',
  },
  {
    id: 'penteados',
    title: 'Penteados',
    blurb: 'Penteados para ocasiões e dia a dia, com estrutura e elegância.',
  },
  {
    id: 'corte-alisamento',
    title: 'Corte e Alisamento',
    blurb: 'Corte alinhado ao alisamento, com respeito pela saúde do fio.',
  },
  {
    id: 'leitura-rotulos',
    title: 'Leitura de Rótulos de Cosméticos',
    blurb: 'Aprender a ler rótulos e escolher produtos com critério.',
  },
]

export function getCourseTopics() {
  return courseTopics
}

export function getCourseTopicById(id: string) {
  return courseTopics.find((c) => c.id === id)
}

/** Build WhatsApp message for course lead (next class list). */
export function buildCourseLeadWhatsAppMessage(input: {
  name: string
  contact: string
  courseTitle: string
  notes?: string
}) {
  const notes = input.notes?.trim()
    ? `\nNotas: ${input.notes.trim()}`
    : ''
  return (
    `Olá Ana! Quero entrar na lista da próxima turma.\n\n` +
    `Formação: ${input.courseTitle}\n` +
    `Nome: ${input.name}\n` +
    `Contacto: ${input.contact}` +
    notes
  )
}
