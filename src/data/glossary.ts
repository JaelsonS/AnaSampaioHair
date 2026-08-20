import type { GlossaryTerm } from '@/types/domain'
import type { AppLocale } from '@/i18n/config'

/**
 * Seed glossary from known WP SEO landing pages.
 * Full inventory continues in docs/migration-content.md.
 */
export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'terapia-capilar',
    source: 'wordpress',
    wpUrl:
      'https://anasampaio.pt/glossario/o-que-e-terapia-capilar-entenda-tudo-sobre-o-tratamento/',
    locales: ['pt-PT'],
    slugs: { 'pt-PT': 'o-que-e-terapia-capilar-entenda-tudo-sobre-o-tratamento' },
    title: { 'pt-PT': 'O que é Terapia Capilar' },
    body: {
      'pt-PT':
        'A terapia capilar é um conjunto de tratamentos especializados que visam restaurar a saúde e a beleza dos cabelos e do couro cabeludo. Pode apoiar condições como queda, caspa, oleosidade e ressecamento, sempre com avaliação individual. Conteúdo migrado do glossário WordPress — expansão contínua no inventário.',
    },
  },
  {
    id: 'tratamentos-capilares',
    source: 'wordpress',
    wpUrl: 'https://anasampaio.pt/glossario/o-que-e-tratamentos-capilares-guia-completo/',
    locales: ['pt-PT'],
    slugs: { 'pt-PT': 'o-que-e-tratamentos-capilares-guia-completo' },
    title: { 'pt-PT': 'O que são Tratamentos Capilares' },
    body: {
      'pt-PT':
        'Os tratamentos capilares incluem procedimentos e técnicas para melhorar saúde, aparência e textura dos fios — da hidratação à coloração — escolhidos conforme o tipo de cabelo e necessidades reais.',
    },
  },
  {
    id: 'salao-de-beleza',
    source: 'wordpress',
    wpUrl: 'https://anasampaio.pt/glossario/o-que-e-salao-de-beleza-guia-completo/',
    locales: ['pt-PT'],
    slugs: { 'pt-PT': 'o-que-e-salao-de-beleza-guia-completo' },
    title: { 'pt-PT': 'O que é um Salão de Beleza' },
    body: {
      'pt-PT':
        'Um salão de beleza oferece cuidados estéticos e pessoais. No Instituto Ana Sampaio, o foco junta beleza e saúde capilar num atendimento personalizado em Marinha Grande.',
    },
  },
]

export function getGlossaryTerms(locale: AppLocale = 'pt-PT') {
  return glossaryTerms.filter((t) => t.locales.includes(locale) && t.slugs[locale])
}

export function getGlossaryTermBySlug(locale: AppLocale, slug: string) {
  return getGlossaryTerms(locale).find((t) => t.slugs[locale] === slug)
}
