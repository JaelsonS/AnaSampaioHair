/**
 * Parse WordPress plain-text bodies into structured blocks for premium rendering.
 * Does not invent content — only structures what already exists.
 */

export type BodyBlock =
  | { type: 'audio'; url: string }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string; id: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] }

function slugify(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80)
}

function looksLikeHeading(line: string) {
  const t = line.trim()
  if (t.length < 8 || t.length > 90) return false
  if (/[.!?]$/.test(t)) return false
  if (/https?:\/\//i.test(t)) return false
  if (/^ouça este artigo$/i.test(t)) return false
  // Title Case-ish or short thematic titles without trailing punctuation
  const words = t.split(/\s+/)
  if (words.length > 14) return false
  return true
}

function looksLikeH2(line: string) {
  const t = line.trim()
  const starters =
    /^(o que|como|por que|porque|benefícios|beneficios|principais|tipos|dicas|métodos|metodos|cuidados|perguntas|avaliação|avaliacao|preço|preco|restauração|restauracao|hidratação|hidratacao|esfoliação|esfoliacao|máscaras|mascaras|óleos|oleos|tratamento|terapia|critérios|criterios|sinais|erros|rotina|importância|importancia|especialista|visibilidade|variedade|análise|analise|técnicas|tecnicas|ingredientes|produtos|causas)/i
  return starters.test(t) || (t.length <= 55 && !/[a-zà-ú]{20,}/.test(t))
}

export function parseBlogBody(raw: string): BodyBlock[] {
  const cleaned = raw
    .replace(/\r/g, '')
    .replace(/Ouça este artigo\s*/gi, '')
    .trim()

  const chunks = cleaned.split(/\n\n+/).map((c) => c.trim()).filter(Boolean)
  const blocks: BodyBlock[] = []
  let faqMode = false
  let faqItems: { q: string; a: string }[] = []
  let pendingQ: string | null = null

  const flushFaq = () => {
    if (faqItems.length) {
      blocks.push({ type: 'faq', items: faqItems })
      faqItems = []
    }
    faqMode = false
    pendingQ = null
  }

  for (const chunk of chunks) {
    const audio = chunk.match(/https?:\/\/[^\s]+\.mp3/i)
    if (audio) {
      blocks.push({ type: 'audio', url: audio[0] })
      continue
    }

    const lines = chunk
      .split(/\n/)
      .map((l) => l.trim())
      .filter((l) => l && l !== '—' && l !== '-')

    if (!lines.length) continue

    const joined = lines.join(' ')

    if (/^perguntas frequentes$/i.test(joined)) {
      flushFaq()
      faqMode = true
      blocks.push({ type: 'h2', text: joined, id: slugify(joined) })
      continue
    }

    if (faqMode) {
      // Q then A pattern in WP: question as short line, answer as longer paragraph
      if (looksLikeHeading(joined) && joined.endsWith('?')) {
        if (pendingQ && faqItems.length === 0) {
          // no-op
        }
        pendingQ = joined
        continue
      }
      if (pendingQ) {
        faqItems.push({ q: pendingQ, a: joined })
        pendingQ = null
        continue
      }
    }

    // Pipe / tab tables (Etapa | Descrição)
    if (
      lines.length >= 2 &&
      lines.every((l) => l.includes('|') || /\t/.test(l)) &&
      lines.filter((l) => (l.match(/\|/g) || []).length >= 1 || /\t/.test(l)).length >= 2
    ) {
      const splitRow = (l: string) =>
        l
          .split(/\||\t/)
          .map((c) => c.trim())
          .filter(Boolean)
      const rows = lines.map(splitRow).filter((r) => r.length >= 2)
      if (rows.length >= 2) {
        const headers = rows[0]
        const body = rows.slice(1).filter((r) => r.length === headers.length || r.length >= 2)
        if (body.length) {
          blocks.push({ type: 'table', headers, rows: body.map((r) => r.slice(0, headers.length)) })
          continue
        }
      }
    }

    // Bullet-ish: many short lines
    if (lines.length >= 2 && lines.every((l) => l.length < 140) && lines.filter((l) => l.length < 90).length >= lines.length * 0.7) {
      const maybeList = lines.every((l) => !looksLikeH2(l) || l.length < 70)
      const listish = lines.filter((l) => !/[.!?]{2,}/.test(l) && l.split(' ').length <= 18)
      if (maybeList && listish.length >= 2 && listish.length === lines.length) {
        // Could be list of conclusions
        if (lines.every((l) => l.length < 100)) {
          blocks.push({ type: 'ul', items: lines })
          continue
        }
      }
    }

    // Single-line heading
    if (lines.length === 1 && looksLikeHeading(joined)) {
      const id = slugify(joined)
      if (looksLikeH2(joined) || joined.length <= 48) {
        blocks.push({ type: 'h2', text: joined, id })
      } else {
        blocks.push({ type: 'h3', text: joined, id })
      }
      continue
    }

    // First line heading + rest paragraph
    if (lines.length >= 2 && looksLikeHeading(lines[0]) && lines[0].length < 70) {
      const id = slugify(lines[0])
      blocks.push({
        type: looksLikeH2(lines[0]) ? 'h2' : 'h3',
        text: lines[0],
        id,
      })
      blocks.push({ type: 'p', text: lines.slice(1).join(' ') })
      continue
    }

    blocks.push({ type: 'p', text: joined })
  }

  flushFaq()
  return blocks
}

export function extractToc(blocks: BodyBlock[]) {
  return blocks
    .filter((b): b is Extract<BodyBlock, { type: 'h2' }> => b.type === 'h2')
    .map((b) => ({ id: b.id, text: b.text }))
}

export function titleCasePt(input: string) {
  if (!input) return input
  // Keep already-cased titles; capitalize first letter only for all-lowercase WP titles
  if (input !== input.toLowerCase()) return input
  return input.charAt(0).toUpperCase() + input.slice(1)
}
