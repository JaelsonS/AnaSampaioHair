import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export type BrandLogoVariant = 'header' | 'drawer' | 'stacked'

type BrandLogoProps = {
  variant?: BrandLogoVariant
  className?: string
  /** Ocultar tagline (só header em ecrãs muito estreitos) */
  showTagline?: boolean
  priority?: boolean
}

const markSizes: Record<BrandLogoVariant, { width: number; height: number; className: string }> = {
  header: { width: 88, height: 78, className: 'brand-logo__mark--header' },
  drawer: { width: 96, height: 86, className: 'brand-logo__mark--drawer' },
  stacked: { width: 120, height: 108, className: 'brand-logo__mark--stacked' },
}

export function BrandLogo({
  variant = 'header',
  className,
  showTagline = true,
  priority = false,
}: BrandLogoProps) {
  const { width, height, className: markSizeClass } = markSizes[variant]

  return (
    <span className={cn('brand-logo', `brand-logo--${variant}`, className)}>
      <span className="brand-logo__lockup">
        <Image
          src={siteConfig.brand.logoMark}
          alt=""
          width={width}
          height={height}
          priority={priority}
          className={cn('brand-logo__mark', markSizeClass)}
        />
        <span className="brand-logo__text">
          <span className="brand-logo__name">{siteConfig.brand.logoName}</span>
          {showTagline ? (
            <span className="brand-logo__tagline">{siteConfig.brand.logoTagline}</span>
          ) : null}
        </span>
      </span>
    </span>
  )
}
