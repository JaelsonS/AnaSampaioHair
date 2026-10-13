import { ANA_IMAGE_COPYRIGHT, isAnaProtectedImage } from '@/config/ana-image-rights'

type Props = {
  src: string
  /** Texto curto no canto (default ©) */
  label?: string
  className?: string
}

/** Marca visual de direitos em fotos reais — não impede download, reforça consentimento + metadados. */
export function AnaImageRightsOverlay({ src, label = ANA_IMAGE_COPYRIGHT, className = '' }: Props) {
  if (!isAnaProtectedImage(src)) return null
  return (
    <span className={`ana-image-rights-badge ${className}`.trim()} title={label} aria-hidden>
      © Ana Sampaio
    </span>
  )
}
