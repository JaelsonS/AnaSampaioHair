import type { AppLocale, UrlLocale } from './config'
import { toAppLocale } from './config'
import type { Dictionary } from './dictionaries/pt-PT'
import { ptPT } from './dictionaries/pt-PT'
import { es } from './dictionaries/es'
import { en } from './dictionaries/en'

const dictionaries: Record<AppLocale, Dictionary> = {
  'pt-PT': ptPT,
  es,
  en,
}

export function getDictionary(locale: UrlLocale | AppLocale): Dictionary {
  if (locale === 'pt' || locale === 'es' || locale === 'en') {
    return dictionaries[toAppLocale(locale)]
  }
  return dictionaries[locale]
}

export type { Dictionary }
