import type { UrlLocale } from '@/i18n/config'
import { SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { MechasConsultShowcase } from '@/components/mechas/MechasConsultShowcase'
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
          <div className="mechas-consult-wrap mechas-consult-wrap--aside">
            <MechasConsultShowcase locale={locale} />
          </div>
        </Reveal>
      </div>
      <Reveal>
        <MechasColorCarousel
          locale={locale}
          techniqueNote={mechas.techniqueNote}
          ctaLabel={mechas.cta}
          ctaTopic={content.topics.mechas}
          ctaServiceName={content.topics.mechas}
        />
      </Reveal>
    </div>
  )
}
