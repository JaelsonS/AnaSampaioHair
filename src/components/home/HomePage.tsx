import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import {
  IconArrowRight,
  IconMapPin,
  IconCalendar,
  IconUserStars,
  IconAward,
  IconTarget,
  IconHairTool,
  IconDroplet,
  IconSearch,
  IconSpark,
  IconLeaf,
  IconHeartPulse,
  IconScissors,
} from '@/components/icons'
import { getTestimonials } from '@/data/testimonials'
import { getBlogPosts } from '@/data/blog'
import { getHomeContent } from '@/data/home-i18n'
import { siteConfig } from '@/config/site'
import { toAppLocale } from '@/i18n/config'
import { Hero } from './Hero'
import { TherapyAccordion } from './TherapyAccordion'
import { MechasHoverGrid } from './MechasHoverGrid'
import { HomeCtaButtons } from './HomeCtaButtons'
import { EbookCampaign } from './EbookCampaign'
import { TestimonialsCarousel } from '@/components/testimonials/TestimonialsCarousel'

const PILLAR_ICONS = [
  IconUserStars,
  IconAward,
  IconTarget,
  IconHairTool,
] as const

const BENEFIT_ICONS = [
  IconDroplet,
  IconSearch,
  IconSpark,
  IconHeartPulse,
  IconLeaf,
  IconScissors,
] as const


export function HomePage({ locale, dict }: { locale: UrlLocale; dict: Dictionary }) {
  const appLocale = toAppLocale(locale)
  const testimonials = getTestimonials()
  const postsRaw = getBlogPosts(appLocale)
  const posts = (postsRaw.length > 0 ? postsRaw : getBlogPosts('pt-PT')).slice(0, 3)
  const wp = getHomeContent(locale)

  return (
    <>
      <Hero locale={locale} dict={dict} />

      <Section>
        <div className="split ambient-split">
          <Reveal>
            <div className="media-frame ambient-photo">
              <Image
                src={siteConfig.brand.heroSalon}
                alt={wp.alts.salon}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="prose">
              <p className="eyebrow">{wp.ambient.eyebrow}</p>
              <h2 className="display-lg">{wp.ambient.title}</h2>
              <p>{wp.ambient.body}</p>
              <HomeCtaButtons
                primaryLabel={wp.ambient.cta}
                topic={wp.topics.institute}
                secondaryHref={localizedPath(locale, 'about')}
                secondaryLabel={dict.nav.about}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="section-therapy-home">
        <Reveal>
          <SectionHeading
            eyebrow={wp.therapyIntro.eyebrow}
            title={wp.therapyIntro.title}
            lead={wp.therapyIntro.lead}
            align="center"
          />
        </Reveal>
        <Reveal>
          <TherapyAccordion locale={locale} />
        </Reveal>
        <div className="btn-group btn-group-center" style={{ marginTop: '1.5rem' }}>
          <HomeCtaButtons primaryLabel={wp.therapyIntro.cta} topic={wp.topics.therapy} />
        </div>
      </Section>

      <Section>
        <div className="split">
          <Reveal>
            <div className="prose">
              <p className="eyebrow">{wp.about.eyebrow}</p>
              <h2 className="display-lg">{wp.about.title}</h2>
              <p>{wp.about.lead}</p>
              <div className="about-pillars">
                {wp.about.pillars.map((p, index) => {
                  const Icon = PILLAR_ICONS[index % PILLAR_ICONS.length]
                  return (
                    <article key={p.title} className="about-pillar">
                      <span className="icon-badge" aria-hidden>
                        <Icon />
                      </span>
                      <h3>{p.title}</h3>
                      <p>{p.body}</p>
                    </article>
                  )
                })}
              </div>
              <Button href={localizedPath(locale, 'about')}>
                {dict.common.learnMore}
                <IconArrowRight />
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="portrait-frame portrait-contain about-home-portrait">
              <Image
                src={siteConfig.brand.anaHero}
                alt={wp.alts.ana}
                fill
                sizes="(max-width:768px) 100vw, 45vw"
                quality={90}
                className="portrait-img"
                style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="section-testimonials-home">
        <Reveal>
          <SectionHeading
            title={dict.sections.testimonialsTitle}
            lead={dict.sections.testimonialsLead}
            align="center"
          />
        </Reveal>
        <Reveal>
          <TestimonialsCarousel items={testimonials} label={dict.sections.testimonialsTitle} />
        </Reveal>
        <div className="btn-group btn-group-center" style={{ marginTop: '1.25rem' }}>
          <Button href={localizedPath(locale, 'testimonials')} variant="secondary">
            {dict.nav.testimonials}
            <IconArrowRight />
          </Button>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={wp.mechas.eyebrow}
            title={wp.mechas.title}
            lead={wp.mechas.lead}
          />
        </Reveal>
        <Reveal>
          <MechasHoverGrid locale={locale} />
        </Reveal>
        <div className="btn-group" style={{ marginTop: '1.5rem' }}>
          <HomeCtaButtons
            primaryLabel={wp.mechas.cta}
            topic={wp.topics.mechas}
            serviceName={wp.topics.mechas}
          />
        </div>
      </Section>

      <Section dark>
        <Reveal>
          <p className="eyebrow" style={{ color: 'var(--brand-mint)' }}>
            {wp.plan.eyebrow}
          </p>
          <h2 className="display-lg">{wp.plan.title}</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.88)', maxWidth: '40rem' }}>
            {wp.plan.body}
          </p>
          <HomeCtaButtons primaryLabel={wp.plan.cta} topic={wp.topics.plan} variant="on-dark" />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow={wp.benefits.eyebrow} title={wp.benefits.title} lead={wp.benefits.lead} />
        </Reveal>
        <div className="grid-2">
          {wp.benefits.items.map((item, index) => {
            const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length]
            return (
              <Reveal key={item.title}>
                <article className="benefit-card">
                  <span className="icon-badge" aria-hidden>
                    <Icon />
                  </span>
                  <h3 className="display-md" style={{ fontSize: '1.35rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--ink-soft)' }}>{item.body}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <EbookCampaign locale={locale} />

      <Section>
        <Reveal>
          <SectionHeading title={wp.faq.title} lead={wp.faq.lead} align="center" />
        </Reveal>
        <div className="home-faq">
          {wp.faq.items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                {item.q}
                <span aria-hidden>+</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title={dict.sections.blogTitle} lead={dict.sections.blogLead} />
        <div className="blog-grid blog-grid-related">
          {posts.map((post) => {
            const slug = post.slugs[appLocale] ?? post.slugs['pt-PT']
            const title = post.title[appLocale] ?? post.title['pt-PT']
            if (!slug || !title) return null
            return (
              <article key={post.id} className="blog-card-premium">
                <Link href={localizedPath(locale, 'blog', slug)}>
                  <div className="blog-card-image media-frame">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.featuredImageAlt ?? title}
                        fill
                        sizes="33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : null}
                  </div>
                  <h3 className="display-md" style={{ fontSize: '1.3rem', marginTop: '0.75rem' }}>
                    {title}
                  </h3>
                </Link>
              </article>
            )
          })}
        </div>
        <div className="btn-group">
          <Button href={localizedPath(locale, 'blog')}>{dict.nav.blog}</Button>
        </div>
      </Section>

      <Section dark>
        <SectionHeading title={dict.sections.finalCtaTitle} lead={dict.common.requestOnlyNotice} />
        <div className="btn-group">
          <HomeCtaButtons
            primaryLabel={dict.nav.book}
            topic={wp.topics.assessment}
            variant="on-dark"
            icon
          />
          <Button href={localizedPath(locale, 'contact')} variant="ghost-on-dark">
            <IconMapPin />
            {dict.sections.locationTitle}
          </Button>
        </div>
        <p style={{ marginTop: '1.25rem', opacity: 0.85 }}>{siteConfig.contact.address.full}</p>
      </Section>
    </>
  )
}
