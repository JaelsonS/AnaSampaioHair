import Image from 'next/image'
import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { getAnaPhoto } from '@/data/ana-photos'
import { aboutPageCopy, treatmentsHubCopy } from '@/data/content-i18n'
import { TreatmentsWorksCarousel } from '@/components/treatments/TreatmentsWorksCarousel'

export function TreatmentsHero({
  locale,
  dict,
  title,
}: {
  locale: UrlLocale
  dict: Dictionary
  title: string
}) {
  const copy = treatmentsHubCopy[locale]
  const aboutCopy = aboutPageCopy[locale]
  const ana = getAnaPhoto('ana-about-home')

  return (
    <section
      className="treatments-hero"
      id="page-hero"
      data-site-hero
      data-header-tone="on-light"
    >
      <div className="container treatments-hero-grid">
        <div className="treatments-hero-left">
          <header className="treatments-hero-intro">
            <p className="eyebrow treatments-hero-eyebrow">{dict.meta.siteName}</p>
            <h1 className="display-xl treatments-hero-title">{title}</h1>
            <p className="lead treatments-hero-lead">{copy.heroLead}</p>
          </header>

          <figure className="treatments-hero-portrait">
            <Image
              src={ana.src}
              alt={ana.alt}
              width={ana.width}
              height={ana.height}
              priority
              quality={90}
              sizes="(max-width: 899px) 88vw, 38vw"
              className="treatments-hero-portrait-img"
            />
          </figure>

          <blockquote className="treatments-hero-quote">
            <p>{copy.quote}</p>
            <footer>
              <strong>Ana Sampaio</strong>
              <span>{copy.anaRole}</span>
            </footer>
          </blockquote>
        </div>

        <TreatmentsWorksCarousel
          ariaLabel={copy.worksCarouselAria}
          prevLabel={aboutCopy.lightboxPrev}
          nextLabel={aboutCopy.lightboxNext}
        />
      </div>
    </section>
  )
}
