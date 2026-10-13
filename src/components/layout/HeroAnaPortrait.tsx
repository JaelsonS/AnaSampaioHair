import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { ProtectedMediaFrame } from '@/components/media/ProtectedMediaFrame'

/** Coluna direita — Ana completa (ana-HeroDestaques). */
export function HeroAnaPortrait({ alt }: { alt: string }) {
  const src = siteConfig.brand.anaHeroHome
  return (
    <ProtectedMediaFrame src={src} className="hero-ana-portrait-protected">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        quality={85}
        className="hero-ana-portrait-img"
        sizes="(max-width: 899px) 100vw, 52vw"
      />
    </ProtectedMediaFrame>
  )
}
