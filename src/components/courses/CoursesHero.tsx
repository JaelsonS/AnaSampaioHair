import Image from 'next/image'
import type { Dictionary } from '@/i18n/get-dictionary'
import { siteConfig } from '@/config/site'

/** Formações — texto à esquerda, retrato completo à direita (sem crop). */
export function CoursesHero({
  dict,
  title,
  lead,
}: {
  dict: Dictionary
  title: string
  lead?: string
}) {
  return (
    <section
      className="courses-hero"
      id="page-hero"
      data-site-hero
      data-header-tone="on-light"
    >
      <div className="container courses-hero-grid">
        <div className="courses-hero-copy">
          <p className="eyebrow courses-hero-eyebrow">{dict.meta.siteName}</p>
          <h1 className="display-xl courses-hero-title">{title}</h1>
          {lead ? <p className="lead courses-hero-lead">{lead}</p> : null}
        </div>
        <figure className="courses-hero-portrait">
          <Image
            src={siteConfig.brand.anaAboutTraining}
            alt="Ana Sampaio — Formações no Instituto de Saúde e Beleza Capilar"
            width={1600}
            height={2400}
            priority
            quality={90}
            sizes="(max-width: 899px) 72vw, 42vw"
            className="courses-hero-portrait-img"
          />
        </figure>
      </div>
    </section>
  )
}
