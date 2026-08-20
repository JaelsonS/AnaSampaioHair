/**
 * Softens repetitive AI-style openers in migrated WP copy.
 * Does not invent facts — only rewrites stock framing phrases.
 */
export function softenAiOpeners(text: string): string {
  return text
    .replace(
      /^Neste artigo, vamos explorar\s+/i,
      'Aqui encontra orientação clara sobre ',
    )
    .replace(/^Neste artigo, você descobrirá\s+/i, 'Vai encontrar ')
    .replace(/^Neste artigo, vamos\s+/i, '')
    .replace(
      /^Se você está curioso sobre\s+/i,
      'Se quer perceber melhor ',
    )
    .replace(
      /^Se você já ouviu falar de\s+/i,
      'Se já ouviu falar de ',
    )
    .replace(
      /^Você já ouviu falar sobre\s+/i,
      'Já ouviu falar de ',
    )
    .replace(
      /^Nos dias de hoje,?\s+/i,
      '',
    )
    .replace(
      /^É importante destacar que\s+/i,
      '',
    )
    .replace(
      /^Prepare-se para\s+/i,
      '',
    )
    .replace(/\s{2,}/g, ' ')
    .trim()
}
