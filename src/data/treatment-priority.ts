/**
 * Treatment priority matrix — Phase 2 foundation.
 * Scores derived only from existing project assets (copy length, unique image,
 * blog cluster, commercial CTA pattern, differentiation in catalogue).
 * No invented commercial metrics or medical claims.
 */

import { services } from '@/data/services'
import type { Service } from '@/types/domain'

export type PriorityTier = 'wave1' | 'wave2' | 'later'

export type TreatmentPriorityRow = {
  id: string
  slug: string
  name: string
  category: Service['category']
  contentScore: 1 | 2 | 3
  imageScore: 1 | 2 | 3
  searchIntent: 'alta' | 'média' | 'baixa'
  commercialRelevance: 'alta' | 'média' | 'baixa'
  differentiation: 'alta' | 'média' | 'baixa'
  relatedIds: string[]
  contentPotential: 'alta' | 'média' | 'baixa'
  blogSlugs: string[]
  tier: PriorityTier
  rationale: string
}

/** Blog posts that map to treatments (from migrated WP inventory). */
const BLOG_LINKS: Record<string, string[]> = {
  oleosidade: ['terapia-capilar-para-cabelos-oleosos'],
  queda: ['terapeuta-capilar-especializado-em-queda-de-cabelo'],
  dermatite: ['dermatite-seborreica'],
  calvicie: ['calvicie'],
  alopecia: ['alopecia-areata'],
  mechas: ['tratamento-capilar-especializado-em-marinha-grande-leiria-pt'],
  reconstrucao: ['tratamento-capilar-para-cabelos-danificados'],
  'reposicao-hidrica': ['tratamento-capilar-para-cabelos-danificados'],
  massagem: ['melhores-tecnicas-de-terapia-capilar'],
  microagulhamento: ['calvicie', 'terapeuta-capilar-especializado-em-queda-de-cabelo'],
}

function contentScore(s: Service): 1 | 2 | 3 {
  const len = (s.description?.length ?? 0) + (s.shortDescription?.length ?? 0)
  if (len > 280) return 3
  if (len > 160) return 2
  return 1
}

function imageScore(s: Service): 1 | 2 | 3 {
  // Unique dedicated service images score 3; ambiente proxies (led, alta-freq, etc.) still exist as files
  const ambientish = ['led', 'alta-freq', 'blend', 'chaterapia', 'musicaterapia', 'calvicie', 'alopecia', 'microagulhamento']
  if (ambientish.includes(s.id)) return 2
  return 3
}

/**
 * Full matrix for all catalogue services.
 * Commercial/search scores reflect: local demand signals from existing blog SEO,
 * institute positioning (therapy + beauty), and CTA patterns already in data.
 */
export const treatmentPriorityMatrix: TreatmentPriorityRow[] = services.map((s) => {
  const blogSlugs = BLOG_LINKS[s.id] ?? []
  const base: Omit<TreatmentPriorityRow, 'tier' | 'rationale' | 'searchIntent' | 'commercialRelevance' | 'differentiation' | 'contentPotential' | 'relatedIds'> = {
    id: s.id,
    slug: s.slug,
    name: s.name,
    category: s.category,
    contentScore: contentScore(s),
    imageScore: imageScore(s),
    blogSlugs,
  }

  const profiles: Record<string, Partial<TreatmentPriorityRow>> = {
    mechas: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'alta',
      contentPotential: 'alta',
      relatedIds: ['coloracao', 'corte', 'reconstrucao'],
      tier: 'wave1',
      rationale: 'Assinatura estética do instituto; copy forte; imagem própria; cluster local no blog.',
    },
    queda: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'alta',
      contentPotential: 'alta',
      relatedIds: ['microagulhamento', 'led', 'alopecia', 'calvicie'],
      tier: 'wave1',
      rationale: 'Intenção de pesquisa clara; artigo pilar WP; diferencial terapia integrativa.',
    },
    oleosidade: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'média',
      contentPotential: 'alta',
      relatedIds: ['detox', 'caspa', 'blend'],
      tier: 'wave1',
      rationale: 'Artigo dedicado forte no blog; problema frequente; ponte natural para detox.',
    },
    dermatite: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'alta',
      contentPotential: 'alta',
      relatedIds: ['caspa', 'detox', 'oleosidade'],
      tier: 'wave1',
      rationale: 'Post WP dedicado; linguagem de cuidado (sem claims médicos); alta relevância.',
    },
    coloracao: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'média',
      contentPotential: 'alta',
      relatedIds: ['mechas', 'reconstrucao', 'corte'],
      tier: 'wave1',
      rationale: 'Procura constante; liga beleza a saúde do fio; bom potencial de FAQ.',
    },
    reconstrucao: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'média',
      contentPotential: 'alta',
      relatedIds: ['reposicao-hidrica', 'reposicao-lipidica', 'corte-bordado'],
      tier: 'wave1',
      rationale: 'Cluster “cabelo danificado” no blog; conversão para plano de acompanhamento.',
    },
    microagulhamento: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'alta',
      contentPotential: 'alta',
      relatedIds: ['queda', 'calvicie', 'led'],
      tier: 'wave1',
      rationale: 'Técnica diferenciadora; ligada a calvície/queda nos conteúdos existentes.',
    },
    detox: {
      searchIntent: 'média',
      commercialRelevance: 'alta',
      differentiation: 'média',
      contentPotential: 'alta',
      relatedIds: ['oleosidade', 'caspa', 'dermatite'],
      tier: 'wave1',
      rationale: 'Ponto de entrada do couro; relaciona vários tratamentos; copy clara.',
    },
    alisamento: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'média',
      contentPotential: 'média',
      relatedIds: ['corte', 'reconstrucao', 'brushing'],
      tier: 'wave2',
      rationale: 'Procura comercial alta; falta artigo dedicado — enriquecer na onda 2.',
    },
    corte: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'baixa',
      contentPotential: 'média',
      relatedIds: ['brushing', 'corte-bordado', 'mechas'],
      tier: 'wave2',
      rationale: 'Essencial no catálogo; diferenciação menor face a concorrência local.',
    },
    calvicie: {
      searchIntent: 'alta',
      commercialRelevance: 'alta',
      differentiation: 'alta',
      contentPotential: 'alta',
      relatedIds: ['microagulhamento', 'queda', 'led'],
      tier: 'wave2',
      rationale: 'Blog existe; imagem ainda proxy de ambiente — melhorar asset antes da página.',
    },
    alopecia: {
      searchIntent: 'alta',
      commercialRelevance: 'média',
      differentiation: 'alta',
      contentPotential: 'alta',
      relatedIds: ['queda', 'calvicie'],
      tier: 'wave2',
      rationale: 'Artigo WP; requer cuidado editorial (sem claims); imagem a melhorar.',
    },
    caspa: {
      searchIntent: 'alta',
      commercialRelevance: 'média',
      differentiation: 'média',
      contentPotential: 'média',
      relatedIds: ['dermatite', 'detox'],
      tier: 'wave2',
      rationale: 'Procura alta; conteúdo de serviço curto — expandir com FAQ real.',
    },
    'reposicao-hidrica': {
      searchIntent: 'média',
      commercialRelevance: 'média',
      differentiation: 'baixa',
      contentPotential: 'média',
      relatedIds: ['reconstrucao', 'reposicao-lipidica'],
      tier: 'later',
      rationale: 'Pode viver sob “cuidados do fio” até haver profundidade própria.',
    },
    'reposicao-lipidica': {
      searchIntent: 'média',
      commercialRelevance: 'média',
      differentiation: 'baixa',
      contentPotential: 'média',
      relatedIds: ['reconstrucao', 'reposicao-hidrica'],
      tier: 'later',
      rationale: 'Idem hídrica — cluster fio antes de página isolada.',
    },
    brushing: {
      searchIntent: 'média',
      commercialRelevance: 'média',
      differentiation: 'baixa',
      contentPotential: 'baixa',
      relatedIds: ['corte', 'escova-terapeutica'],
      tier: 'later',
      rationale: 'Serviço de rotina; pouco potencial SEO próprio.',
    },
    'corte-bordado': {
      searchIntent: 'baixa',
      commercialRelevance: 'média',
      differentiation: 'alta',
      contentPotential: 'média',
      relatedIds: ['corte', 'reconstrucao'],
      tier: 'later',
      rationale: 'Diferenciador de marca; volume de pesquisa menor.',
    },
    'escova-terapeutica': {
      searchIntent: 'baixa',
      commercialRelevance: 'média',
      differentiation: 'média',
      contentPotential: 'média',
      relatedIds: ['massagem', 'brushing'],
      tier: 'later',
      rationale: 'Melhor como técnica dentro de planos do que página isolada agora.',
    },
    massagem: {
      searchIntent: 'média',
      commercialRelevance: 'média',
      differentiation: 'média',
      contentPotential: 'média',
      relatedIds: ['blend', 'chaterapia'],
      tier: 'wave2',
      rationale: 'Sensorial forte; mencionado em técnicas de terapia no blog.',
    },
    blend: {
      searchIntent: 'baixa',
      commercialRelevance: 'média',
      differentiation: 'alta',
      contentPotential: 'média',
      relatedIds: ['massagem', 'oleosidade'],
      tier: 'later',
      rationale: 'Assinatura do instituto; página quando houver protocolo descrito pela Ana.',
    },
    led: {
      searchIntent: 'média',
      commercialRelevance: 'média',
      differentiation: 'média',
      contentPotential: 'média',
      relatedIds: ['queda', 'microagulhamento'],
      tier: 'later',
      rationale: 'Tecnologia de apoio; imagem proxy — enriquecer com foto real do equipamento.',
    },
    'alta-freq': {
      searchIntent: 'baixa',
      commercialRelevance: 'média',
      differentiation: 'média',
      contentPotential: 'baixa',
      relatedIds: ['detox', 'caspa'],
      tier: 'later',
      rationale: 'Recurso de protocolo; priorizar dentro de páginas de couro.',
    },
    chaterapia: {
      searchIntent: 'baixa',
      commercialRelevance: 'baixa',
      differentiation: 'alta',
      contentPotential: 'média',
      relatedIds: ['musicaterapia', 'massagem'],
      tier: 'later',
      rationale: 'Diferenciador experiencial; conteúdo ainda curto.',
    },
    musicaterapia: {
      searchIntent: 'baixa',
      commercialRelevance: 'baixa',
      differentiation: 'alta',
      contentPotential: 'baixa',
      relatedIds: ['chaterapia', 'massagem'],
      tier: 'later',
      rationale: 'Mesmo grupo sensorial; fundir editorialmente na onda 2+.',
    },
  }

  const p = profiles[s.id] ?? {
    searchIntent: 'baixa' as const,
    commercialRelevance: 'baixa' as const,
    differentiation: 'baixa' as const,
    contentPotential: 'baixa' as const,
    relatedIds: [] as string[],
    tier: 'later' as const,
    rationale: 'Manter no hub até haver conteúdo/asset suficientes.',
  }

  return { ...base, ...p } as TreatmentPriorityRow
})

export function getWave1Treatments() {
  return treatmentPriorityMatrix.filter((r) => r.tier === 'wave1')
}

export function getTreatmentPriority(id: string) {
  return treatmentPriorityMatrix.find((r) => r.id === id)
}

/** Future rich pages — disabled until wave1 validated. */
export const TREATMENT_DETAIL_PAGES_ENABLED = false
