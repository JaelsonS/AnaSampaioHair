import { getWhatsAppUrl } from '@/config/site'

export function buildServiceWhatsAppMessage(serviceName: string) {
  return `Olá Ana! Eu estava no seu site e gostaria de saber mais sobre o procedimento: ${serviceName}. Pode ajudar-me?`
}

export function buildInfoWhatsAppMessage(topic: string) {
  return `Olá Ana! Eu estava no seu site e gostaria de saber mais sobre ${topic}.`
}

export function buildBookingWhatsAppMessage(opts: {
  date: string
  time: string
  service?: string
  name?: string
}) {
  const serviceLine = opts.service
    ? `\nInteresse: ${opts.service}`
    : '\nInteresse: Avaliação / consulta'
  const nameLine = opts.name ? `\nNome: ${opts.name}` : ''

  return `Olá Ana! Eu estava no seu site e gostaria de saber a sua disponibilidade.${serviceLine}${nameLine}\nDia pretendido: ${opts.date}\nHora pretendida: ${opts.time}\n\nQuando puder, diga-me se tem disponibilidade neste horário ou indique outra opção. Obrigada!`
}

export function openWhatsApp(message: string) {
  const url = getWhatsAppUrl(message)
  if (url) window.open(url, '_blank', 'noopener,noreferrer')
}

export function resolveCtaHref(href: string) {
  if (href === 'whatsapp' || href === 'booking') return '#'
  return href
}

export const TIME_SLOTS = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
] as const
