import Image from 'next/image'
import { siteConfig } from '@/config/site'

/** Camada única (fallback) — preferir split copy + portrait nos heros madeira. */
export function HeroWoodBackdrop() {
  return (
    <div className="site-hero-wood-bg" aria-hidden>
      <Image
        src={siteConfig.brand.anaHeroHome}
        alt=""
        fill
        priority
        quality={90}
        className="site-hero-wood-bg-img"
        sizes="100vw"
      />
    </div>
  )
}
