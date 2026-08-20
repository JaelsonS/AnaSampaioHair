import { getWhatsAppUrl } from '@/config/site'
import type { AppLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { appToUrlLocale } from '@/i18n/config'

export type BookingRequestPayload = {
  service: string
  date: string
  time: string
  name: string
  contact: string
  notes?: string
  locale: AppLocale
}

/** Sanitize free text for WhatsApp messages — strip control chars, limit length */
export function sanitizeMessagePart(value: string, max = 200): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
}

export function buildBookingRequestMessage(payload: BookingRequestPayload): string {
  const dict = getDictionary(appToUrlLocale[payload.locale])
  const notes = payload.notes
    ? `\nObservação: ${sanitizeMessagePart(payload.notes, 400)}`
    : ''

  return dict.whatsapp.bookingRequest
    .replace('{service}', sanitizeMessagePart(payload.service))
    .replace('{date}', sanitizeMessagePart(payload.date, 40))
    .replace('{time}', sanitizeMessagePart(payload.time, 20))
    .replace('{name}', sanitizeMessagePart(payload.name, 80))
    .replace('{contact}', sanitizeMessagePart(payload.contact, 80))
    .replace('{notes}', notes)
}

/**
 * Messaging adapter — WhatsApp redirect today; swap for Business API later
 * without rewriting UI.
 */
export function createWhatsAppHref(message: string): string | null {
  return getWhatsAppUrl(message)
}

export function openWhatsAppMessage(message: string) {
  const url = createWhatsAppHref(message)
  if (!url || typeof window === 'undefined') return
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function getWhatsAppHumanUrl(topic?: string) {
  const clean = topic ? sanitizeMessagePart(topic, 120) : ''
  const message = clean
    ? `Olá Ana, vi no site sobre “${clean}” e gostaria de falar consigo.`
    : 'Olá Ana, gostaria de falar consigo sobre um atendimento.'
  return createWhatsAppHref(message) ?? getWhatsAppUrl(message) ?? '#'
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
