import Image from 'next/image'
import type { UrlLocale } from '@/i18n/config'
import { IconArrowRight } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { getHomeContent } from '@/data/home-i18n'

/**
 * Editorial e-book campaign — Ana as author, salon atmosphere as backdrop.
 */
export function EbookCampaign({ locale = 'pt' }: { locale?: UrlLocale }) {
  const ebook = getHomeContent(locale).ebook

  return (
    <section className="ebook-campaign" aria-labelledby="ebook-campaign-title">
      <div className="ebook-campaign-bg" aria-hidden>
        <Image
          src={siteConfig.brand.heroSalon}
          alt=""
          fill
          sizes="100vw"
          quality={80}
          className="ebook-campaign-bg-img"
        />
        <div className="ebook-campaign-veil" />
      </div>

      <div className="container ebook-campaign-grid">
        <div className="ebook-campaign-copy">
          <p className="ebook-campaign-kicker">{ebook.kicker}</p>
          <p className="eyebrow ebook-campaign-eyebrow">{ebook.eyebrow}</p>
          <h2 id="ebook-campaign-title" className="ebook-campaign-title">
            {ebook.title}
          </h2>
          <p className="ebook-campaign-body">{ebook.campaignBody}</p>
          <p className="ebook-campaign-by">{ebook.byline}</p>
          <a
            className="btn btn-primary"
            href={ebook.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ebook.ctaCampaign}
            <IconArrowRight />
          </a>
        </div>

        <figure className="ebook-campaign-portrait">
          <Image
            src={siteConfig.brand.anaStudio}
            alt={ebook.alt}
            width={680}
            height={1024}
            sizes="(max-width:900px) 70vw, 380px"
            quality={90}
            className="ebook-campaign-portrait-img"
          />
          <figcaption className="ebook-campaign-caption">Ana Sampaio</figcaption>
        </figure>
      </div>
    </section>
  )
}
