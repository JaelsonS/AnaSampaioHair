import { therapySteps } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { BookingButton, Button } from '@/components/ui/Button'

export function TherapyPreview() {
  return (
    <section className="section" id="terapia" aria-labelledby="therapy-title">
      <div className="container">
        <SectionHeading
          eyebrow="Terapia Capilar Integrativa"
          title={
            <span id="therapy-title">
              Cuidar do cabelo também é compreender o couro cabeludo.
            </span>
          }
          lead="Sem pressa. Sem promessas vazias. Uma abordagem personalizada para perceber o que se passa — e o que fazer a seguir."
        />

        <div className="therapy-grid">
          {therapySteps.map((step, index) => (
            <Reveal key={step.number} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
              <article className="therapy-step">
                <div className="num">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="btn-group" style={{ marginTop: '2.5rem' }}>
            <BookingButton label="Quero avaliação de terapia" service="Terapia Capilar" />
            <Button as="link" to="/terapia-capilar" variant="secondary">
              Saber como funciona
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
