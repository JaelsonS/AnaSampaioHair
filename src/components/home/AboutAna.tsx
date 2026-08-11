import { aboutHighlights } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { BookingButton, Button } from '@/components/ui/Button'

export function AboutAna() {
  return (
    <section className="section" id="sobre" aria-labelledby="about-title">
      <div className="container split-section">
        <Reveal>
          <div className="media-frame about-photo media-frame--parallax">
            <img
              src="/images/about/ana.jpg"
              alt="Ana Sampaio"
              loading="lazy"
              decoding="async"
              width={900}
              height={1125}
              className="parallax-img"
              data-parallax="0.2"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Sobre Ana"
            title={<span id="about-title">A pessoa por detrás do cuidado</span>}
            lead="Cabeleireira e terapeuta capilar integrativa. Une técnica, escuta e um olhar atento à saúde dos fios."
          />
          <ul className="credential-list">
            {aboutHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="btn-group">
            <Button as="link" to="/sobre">
              Conhecer melhor a Ana
            </Button>
            <BookingButton variant="secondary" label="Agendar com ela" />
          </div>
        </div>
      </div>
    </section>
  )
}
