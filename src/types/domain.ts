/**
 * Domain types — CRM-ready. Optional fields stay null until real data exists.
 * Never invent prices, certifications, or medical claims.
 */

import type { AppLocale } from '@/i18n/config'

export type PreferredLocale = AppLocale

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
  /** Optional antes/depois — card shows toggle when both are set */
  imageBefore?: string
  imageAfter?: string
  durationMinutes?: number | null
  price?: number | null
  benefits?: string[]
  indication?: string | null
  contraindications?: string[] | null
  professionalId?: string | null
  ctaType: 'booking' | 'whatsapp' | 'link'
  ctaLabel: string
  href?: string
}

export type TreatmentCategory =
  | 'sensorial'
  | 'tecnologias'
  | 'cuidados-fio'
  | 'cuidados-couro'

export type Treatment = {
  id: string
  name: string
  category: TreatmentCategory
  description: string
  durationMinutes?: number | null
  price?: number | null
}

export type Professional = {
  id: string
  name: string
  role: string
  bio?: string
  image?: string
  preferredLocale?: PreferredLocale
}

export type Client = {
  id: string
  name: string
  email?: string
  phone?: string
  preferredLocale: PreferredLocale
}

export type Lead = {
  id: string
  name?: string
  contact?: string
  source?: string
  preferredLocale: PreferredLocale
  notes?: string
}

/** v1: request only — never treat as confirmed reservation */
export type BookingRequestStatus = 'draft' | 'submitted' | 'pending_review'

export type BookingRequest = {
  id: string
  serviceId?: string
  serviceName: string
  preferredDate: string
  preferredTime: string
  name: string
  contact: string
  notes?: string
  locale: PreferredLocale
  status: BookingRequestStatus
  createdAt: string
}

/** Future CRM booking after real availability */
export type BookingStatus =
  | 'confirmed'
  | 'cancelled'
  | 'completed'
  | 'no_show'

export type Booking = {
  id: string
  requestId?: string
  clientId: string
  serviceId: string
  professionalId?: string
  startsAt: string
  endsAt: string
  status: BookingStatus
  locale: PreferredLocale
}

export type Product = {
  id: string
  slug: string
  name: string
  description: string
  image: string
  category: string
  price?: number | null
  stock?: number | null
  isPlaceholder: boolean
}

export type Testimonial = {
  id: string
  name: string
  quote: string
  rating?: number
  serviceCategory?: string
  /** google = show Google badge; other = salon / WhatsApp feedback */
  source?: 'google' | 'direct'
  image?: string
  sourceImage?: string
  locale: PreferredLocale
}

export type BlogPost = {
  id: string
  source: 'wordpress' | 'prototype-aux'
  wpUrl?: string
  locales: PreferredLocale[]
  slugs: Partial<Record<PreferredLocale, string>>
  publishedAt: string
  categories: string[]
  tags: string[]
  featuredImage?: string
  featuredImageAlt?: string
  readingMinutes?: number
  title: Partial<Record<PreferredLocale, string>>
  excerpt: Partial<Record<PreferredLocale, string>>
  body: Partial<Record<PreferredLocale, string>>
  seoTitle?: Partial<Record<PreferredLocale, string>>
  seoDescription?: Partial<Record<PreferredLocale, string>>
}

export type GlossaryTerm = {
  id: string
  source: 'wordpress'
  wpUrl?: string
  locales: PreferredLocale[]
  slugs: Partial<Record<PreferredLocale, string>>
  title: Partial<Record<PreferredLocale, string>>
  body: Partial<Record<PreferredLocale, string>>
}

export type FAQ = {
  id: string
  question: string
  answer: string
}

export type Conversation = {
  id: string
  clientId?: string
  channel: 'whatsapp' | 'web' | 'email'
  locale: PreferredLocale
  preview?: string
}

export type Availability = {
  id: string
  professionalId?: string
  serviceId?: string
  weekday: number
  startTime: string
  endTime: string
}

export type Location = {
  street: string
  city: string
  district: string
  country: string
  postalCode: string
  full: string
  mapsUrl: string
  mapsEmbed: string
}

export type BusinessConfig = {
  name: string
  legalName: string
  tagline: string
  url: string
  contact: {
    email: string
    phone: string
    phoneDisplay: string
    whatsapp: string
    address: Location
    hours: { label: string; value: string }[]
  }
  social: {
    instagram: { handle: string; url: string }
    facebook: { label: string; url: string }
  }
}
