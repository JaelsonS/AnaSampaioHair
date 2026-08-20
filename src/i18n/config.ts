export const locales = ['pt', 'es', 'en'] as const
export type UrlLocale = (typeof locales)[number]

/** Canonical app locale identifiers */
export type AppLocale = 'pt-PT' | 'es' | 'en'

export const defaultUrlLocale: UrlLocale = 'pt'
export const defaultAppLocale: AppLocale = 'pt-PT'

export const urlToAppLocale: Record<UrlLocale, AppLocale> = {
  pt: 'pt-PT',
  es: 'es',
  en: 'en',
}

export const appToUrlLocale: Record<AppLocale, UrlLocale> = {
  'pt-PT': 'pt',
  es: 'es',
  en: 'en',
}

export const htmlLang: Record<UrlLocale, string> = {
  pt: 'pt-PT',
  es: 'es',
  en: 'en',
}

export const ogLocale: Record<UrlLocale, string> = {
  pt: 'pt_PT',
  es: 'es_ES',
  en: 'en_GB',
}

export function isUrlLocale(value: string): value is UrlLocale {
  return (locales as readonly string[]).includes(value)
}

export function toAppLocale(urlLocale: UrlLocale): AppLocale {
  return urlToAppLocale[urlLocale]
}
