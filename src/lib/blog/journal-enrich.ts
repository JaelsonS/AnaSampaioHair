import type { BodyBlock } from '@/lib/blog/parse-body'

/**
 * Adds journal-style structure (table + takeaways) without inventing clinical claims.
 * Inserts once after the first substantive section.
 */
export function enrichJournalBlocks(blocks: BodyBlock[]): BodyBlock[] {
  if (blocks.length < 4) return blocks

  const hasTable = blocks.some((b) => b.type === 'table')
  const out: BodyBlock[] = []
  let inserted = false

  for (let i = 0; i < blocks.length; i++) {
    out.push(blocks[i])
    if (inserted) continue
    if (blocks[i].type !== 'h2') continue
    // After first H2 + following paragraph/list, insert editorial table
    const next = blocks[i + 1]
    if (next) out.push(next), i++
    if (!hasTable) {
      out.push({
        type: 'h3',
        text: 'Em resumo: casa vs. acompanhamento no instituto',
        id: 'resumo-casa-vs-instituto',
      })
      out.push({
        type: 'table',
        headers: ['Situação', 'Em casa', 'No instituto Ana Sampaio'],
        rows: [
          [
            'Dúvida sobre produtos',
            'Leitura de rótulos e rotina leve',
            'Avaliação e orientação personalizada',
          ],
          [
            'Oleosidade / couro irritado',
            'Hábitos e higiene adequados',
            'Terapia capilar com plano acompanhado',
          ],
          [
            'Quer aprender a técnica',
            'E-book e conteúdos do blog',
            'Formações e lista da próxima turma',
          ],
        ],
      })
    }
    out.push({
      type: 'ul',
      items: [
        'Guarde este artigo e partilhe com quem também cuida do cabelo.',
        'Explore o e-book Guia Meu Cabelo dos Sonhos para um cronograma em casa.',
        'Se quiser evoluir na profissão, peça lugar na lista da próxima formação.',
        'Para um plano presencial, peça avaliação no instituto em Leiria.',
      ],
    })
    inserted = true
  }

  return out
}
