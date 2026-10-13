import type { ReactNode } from 'react'
import { AnaImageRightsOverlay } from '@/components/media/AnaImageRightsOverlay'

type Props = {
  src: string
  children: ReactNode
  className?: string
}

/** Envolve media-frame / galeria com badge de direitos quando a imagem é trabalho real da Ana. */
export function ProtectedMediaFrame({ src, children, className = '' }: Props) {
  return (
    <div className={`protected-media-frame ${className}`.trim()}>
      {children}
      <AnaImageRightsOverlay src={src} />
    </div>
  )
}
