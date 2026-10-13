/** Imagens reais do instituto / trabalhos da Ana Sampaio — direitos reservados. */
export const ANA_IMAGE_COPYRIGHT = '© Instituto Ana Sampaio Hair. Todos os direitos reservados.'

export const ANA_IMAGE_RIGHTS_NOTICE_PT =
  'Fotografias e trabalhos reais da Ana Sampaio. Reprodução, download ou uso em outros sites apenas com autorização escrita.'

/** Prefixos em `/public` (caminho URL) que exigem aviso de direitos na UI. */
export const ANA_PROTECTED_IMAGE_PREFIXES = [
  '/images/trabalhos/',
  '/images/mechas/gallery/',
  '/images/mechas/ana/',
  '/images/about/ana-',
  '/images/about/ambiente-',
  '/images/hero/ana-',
  '/images/blog/',
] as const

export function isAnaProtectedImage(src: string): boolean {
  if (!src.startsWith('/images/')) return false
  if (src.startsWith('/images/brand/')) return false
  return ANA_PROTECTED_IMAGE_PREFIXES.some((p) => src.startsWith(p))
}
