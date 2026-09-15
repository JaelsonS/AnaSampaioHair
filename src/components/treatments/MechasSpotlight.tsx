import type { UrlLocale } from '@/i18n/config'
import { SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { MechasHoverGrid } from '@/components/home/MechasHoverGrid'
import { HomeCtaButtons } from '@/components/home/HomeCtaButtons'
import { MechasAnaGrid } from '@/components/mechas/MechasAnaGrid'
import { MechasColorCarousel } from '@/components/mechas/MechasColorCarousel'
import { getHomeContent } from '@/data/home-i18n'

/** Premium mechas consultative block — shared by home and treatments hub. */
export function MechasSpotlight({ locale }: { locale: UrlLocale }) {
  const content = getHomeContent(locale)
  const mechas = content.mechas

  return (
    <div className="mechas-spotlight">
      <div className="split mechas-intro">
        <div className="mechas-intro-copy">
          <Reveal>
            <SectionHeading eyebrow={mechas.eyebrow} title={mechas.title} lead={mechas.lead} />
          </Reveal>
          <Reveal>
            <blockquote className="mechas-manifesto">{mechas.manifesto}</blockquote>
          </Reveal>
          <Reveal>
            <ol className="mechas-process" aria-label={mechas.title}>
              {mechas.processSteps.map((step, i) => (
                <li key={step.id} className="mechas-process-item">
                  <span className="mechas-process-label">{step.label}</span>
                  {i < mechas.processSteps.length - 1 ? (
                    <span className="mechas-process-arrow" aria-hidden>
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
        <Reveal>
          <MechasAnaGrid locale={locale} />
        </Reveal>
      </div>
      <Reveal>
        <MechasColorCarousel locale={locale} />
      </Reveal>
      <Reveal>
        <MechasHoverGrid locale={locale} />
      </Reveal>
      <Reveal>
        <p className="mechas-technique-note">{mechas.techniqueNote}</p>
      </Reveal>
      <div className="btn-group" style={{ marginTop: '1.5rem' }}>
        <HomeCtaButtons
          primaryLabel={mechas.cta}
          topic={content.topics.mechas}
          serviceName={content.topics.mechas}
        />
      </div>
    </div>
  )
}
