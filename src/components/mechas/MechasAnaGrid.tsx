import Image from 'next/image'
import type { UrlLocale } from '@/i18n/config'
import { getMechasGalleryCopy, mechasAnaHighlights } from '@/data/mechas-gallery'

/** Four Ana highlight portraits — 2×2 cover grid */
export function MechasAnaGrid({ locale }: { locale: UrlLocale }) {
  const copy = getMechasGalleryCopy(locale)

  return (
    <div className="mechas-ana-grid" aria-label={copy.slideLabel}>
      {mechasAnaHighlights.map((item) => (
        <figure key={item.id} className="mechas-ana-cell">
          <Image
            src={item.src}
            alt={copy.anaAlts[item.altKey]}
            fill
            sizes="(max-width: 899px) 44vw, 240px"
            quality={80}
            className="mechas-ana-img"
          />
        </figure>
      ))}
    </div>
  )
}
