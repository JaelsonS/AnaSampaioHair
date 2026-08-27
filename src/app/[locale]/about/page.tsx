import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'
import {
  aboutPageCopy,
  aboutHighlightsByLocale,
  experiencePointsByLocale,
  therapyStepsByLocale,
} from '@/data/content-i18n'
import { getHomeContent } from '@/data/home-i18n'
import { AboutHero } from '@/components/about/AboutHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { AnaSpeaks } from '@/components/brand/AnaSpeaks'
import { IconHeartPulse, IconLeaf, IconShield } from '@/components/icons'
import { siteConfig } from '@/config/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: dict.nav.about,
    description: dict.sections.aboutLead,
    alternates: { canonical: `${siteConfig.url}${localizedPath(raw, 'about')}` },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  const copy = aboutPageCopy[locale]
  const aboutHighlights = aboutHighlightsByLocale[locale]
  const experiencePoints = experiencePointsByLocale[locale]
  const therapySteps = therapyStepsByLocale[locale]
  const ebook = getHomeContent(locale).ebook
  const highlightJoin = locale === 'en' ? 'and' : locale === 'es' ? 'y' : 'e'

  return (
    <>
      <AboutHero dict={dict} title="Ana Sampaio" lead={dict.sections.aboutLead} />

      <div className="container about-crumbs">
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: localizedPath(locale, 'home') },
            { label: dict.nav.about },
          ]}
        />
      </div>

      <Section className="about-speaks-section">
        <AnaSpeaks quote={copy.quote} photoId="ana-studio" />
      </Section>

      <Section>
        <div className="split">
          <div className="prose">
            <p className="eyebrow">{dict.meta.siteName}</p>
            <h2 className="display-lg">{copy.lookTitle}</h2>
            <p>{copy.lookP1}</p>
            <p>
              {copy.lookP2Prefix} {aboutHighlights[0].toLowerCase()} {highlightJoin}{' '}
              {aboutHighlights[1].toLowerCase()}
              {copy.lookP2Suffix}
            </p>
            <ul>
              {aboutHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <Button href={localizedPath(locale, 'booking')}>{dict.nav.book}</Button>
          </div>
          <div className="portrait-frame portrait-full">
            <Image
              src={siteConfig.brand.anaStudio}
              alt={copy.anaAlt}
              fill
              sizes="(max-width:768px) 100vw, 45vw"
              quality={90}
              className="portrait-img"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading title={copy.philosophyTitle} />
        <div className="grid-2">
          {experiencePoints.map((p) => (
            <article key={p.title} style={{ display: 'grid', gap: '0.65rem' }}>
              <span className="icon-badge">
                <IconHeartPulse />
              </span>
              <h3 className="display-md" style={{ fontSize: '1.45rem' }}>
                {p.title}
              </h3>
              <p style={{ opacity: 0.88 }}>{p.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title={copy.approachTitle} lead={copy.approachLead} />
        <div className="grid-2">
          {therapySteps.map((s) => (
            <article key={s.number} className="card-interactive">
              <p className="eyebrow">{s.number}</p>
              <h3 className="display-md" style={{ fontSize: '1.4rem' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--ink-soft)' }}>{s.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="split">
          <div className="portrait-frame portrait-contain" style={{ background: '#0a0a0a' }}>
            <Image
              src={siteConfig.brand.anaCutout}
              alt="Ana Sampaio"
              fill
              sizes="(max-width:768px) 100vw, 45vw"
              quality={90}
              className="portrait-img"
              style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
            />
          </div>
          <div className="prose">
            <span className="icon-badge">
              <IconShield />
            </span>
            <h2 className="display-lg">{copy.trainingTitle}</h2>
            <p>{copy.trainingBody1}</p>
            <p>{copy.trainingBody2}</p>
            <div className="btn-group">
              <Button href={localizedPath(locale, 'treatments')}>{dict.nav.treatments}</Button>
              <Button href={localizedPath(locale, 'booking')} variant="secondary">
                {dict.nav.book}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="about-book-bridge">
        <div className="about-book-inner">
          <div className="about-book-copy">
            <p className="eyebrow">{copy.bookEyebrow}</p>
            <h2 className="display-lg">{copy.bookTitle}</h2>
            <p className="about-book-lead">{copy.bookLead}</p>
            <p>{copy.bookBody}</p>
            <a
              className="btn btn-primary"
              href={copy.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.bookCta}
            </a>
          </div>
          <figure className="about-book-portrait">
            <div className="about-book-portrait-photo">
              <Image
                src={siteConfig.brand.anaAuthor}
                alt="Ana Sampaio"
                fill
                sizes="(max-width:768px) 55vw, 280px"
                quality={90}
                style={{ objectFit: 'cover', objectPosition: 'center 12%' }}
              />
            </div>
            <figcaption className="about-book-caption">{copy.bookTitle}</figcaption>
          </figure>
        </div>
      </Section>

      <Section className="about-ebook-bridge">
        <div className="about-ebook-inner">
          <div className="about-ebook-copy">
            <p className="eyebrow">{copy.ebookBridgeTitle}</p>
            <h2 className="display-lg">{ebook.title}</h2>
            <p>{ebook.campaignBody ?? ebook.body}</p>
            <a
              className="btn btn-primary"
              href={ebook.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ebook.ctaCampaign}
            </a>
          </div>
          <figure className="about-ebook-portrait">
            <Image
              src={siteConfig.brand.anaPortrait}
              alt={ebook.alt}
              width={480}
              height={720}
              sizes="(max-width:768px) 55vw, 280px"
              quality={90}
              className="about-ebook-portrait-img"
            />
          </figure>
        </div>
      </Section>

      <Section>
        <SectionHeading title={copy.spaceTitle} lead={copy.spaceLead} />
        <div className="grid-3">
          {siteConfig.brand.ambiente.map((src, i) => (
            <div key={src} className="media-frame" style={{ aspectRatio: '3/4', position: 'relative' }}>
              <Image
                src={src}
                alt={`${copy.spaceAlt} ${i + 1}`}
                fill
                sizes="33vw"
                style={{ objectFit: 'cover', objectPosition: i === 0 ? 'center center' : 'center top' }}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <span className="icon-badge" style={{ marginBottom: '1rem' }}>
          <IconLeaf />
        </span>
        <SectionHeading
          title={dict.sections.finalCtaTitle}
          lead={dict.common.requestOnlyNotice}
        />
        <Button href={localizedPath(locale, 'booking')} variant="on-dark">
          {dict.nav.book}
        </Button>
      </Section>
    </>
  )
}
