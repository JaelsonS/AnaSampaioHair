import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export type BrandLogoVariant = 'header' | 'drawer' | 'stacked'

type BrandLogoProps = {
  variant?: BrandLogoVariant
  className?: string
  /** Shown on header from `md` up; always on drawer / stacked */
  showTagline?: boolean
  priority?: boolean
}

const markSizes: Record<
  BrandLogoVariant,
  { width: number; height: number; className: string }
> = {
  header: { width: 52, height: 46, className: 'brand-logo__mark--header' },
  drawer: { width: 72, height: 64, className: 'brand-logo__mark--drawer' },
  stacked: { width: 88, height: 78, className: 'brand-logo__mark--stacked' },
}

export function BrandLogo({
  variant = 'header',
  className,
  showTagline,
  priority = false,
}: BrandLogoProps) {
  const stacked = variant === 'stacked'
  const taglineVisible = showTagline ?? (variant === 'stacked' || variant === 'drawer')
  const { width, height, className: markSizeClass } = markSizes[variant]

  return (
    <span
      className={cn(
        'brand-logo',
        stacked ? 'brand-logo--stacked' : 'brand-logo--header',
        className,
      )}
    >
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
        <span
          className={cn(
            'brand-logo__tagline',
            !taglineVisible && 'brand-logo__tagline--from-md',
          )}
        >
          {siteConfig.brand.logoTagline}
        </span>
      </span>
    </span>
  )
}
