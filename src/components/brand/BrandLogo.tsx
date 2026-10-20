import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export type BrandLogoVariant = 'header' | 'drawer' | 'stacked' | 'footer'
export type BrandLogoAppearance = 'default' | 'on-dark'

type BrandLogoProps = {
  variant?: BrandLogoVariant
  /** Tagline legível em fundos escuros (hero / footer) */
  appearance?: BrandLogoAppearance
  className?: string
  priority?: boolean
}

/** Dimensões nativas do ficheiro oficial (logo.png) */
const LOCKUP_WIDTH = 927
const LOCKUP_HEIGHT = 677

const variantClass: Record<BrandLogoVariant, string> = {
  header: 'brand-logo__img--header',
  drawer: 'brand-logo__img--drawer',
  stacked: 'brand-logo__img--stacked',
  footer: 'brand-logo__img--footer',
}

/** Altura de ecrã — inline garante que o Next/Image não renderiza a 927px */
const displayHeightPx: Partial<Record<BrandLogoVariant, number>> = {
  header: 58,
  drawer: 64,
  stacked: 72,
  footer: 52,
}

export function BrandLogo({
  variant = 'header',
  appearance = 'default',
  className,
  priority = false,
}: BrandLogoProps) {
  const src =
    appearance === 'on-dark'
      ? siteConfig.brand.logoLockupOnDark
      : siteConfig.brand.logoLockup

  const displayH = displayHeightPx[variant]

  return (
    <span className={cn('brand-logo', `brand-logo--${variant}`, className)}>
      <Image
        src={src}
        alt={siteConfig.legalName}
        width={LOCKUP_WIDTH}
        height={LOCKUP_HEIGHT}
        priority={priority}
        sizes={displayH ? `${Math.round(displayH * (LOCKUP_WIDTH / LOCKUP_HEIGHT))}px` : undefined}
        className={cn('brand-logo__img', variantClass[variant])}
        style={
          displayH
            ? {
                height: displayH,
                width: 'auto',
                maxWidth: variant === 'footer' ? 136 : variant === 'header' ? 220 : 240,
              }
            : undefined
        }
      />
    </span>
  )
}
