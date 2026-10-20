import type { Dictionary } from '@/i18n/get-dictionary'

export function ContactHero({
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
      className="contact-hero"
      id="page-hero"
      data-site-hero
      data-header-tone="on-light"
      data-header-solid
    >
      <div className="container contact-hero-inner">
        <p className="eyebrow contact-hero-eyebrow">{dict.meta.siteName}</p>
        <h1 className="display-xl contact-hero-title">{title}</h1>
        {lead ? <p className="lead contact-hero-lead">{lead}</p> : null}
      </div>
    </section>
  )
}
