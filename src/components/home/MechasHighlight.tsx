import { evaluationPoints } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { BookingButton } from '@/components/ui/Button'

export function MechasHighlight() {
  return (
    <section className="section" aria-labelledby="mechas-title">
      <div className="container split-section">
        <Reveal>
          <div className="media-frame media-frame--parallax" style={{ aspectRatio: '4 / 5' }}>
            <img
              src="/images/gallery/g1.jpg"
              alt="Mechas e madeixas"
              loading="lazy"
              decoding="async"
              width={900}
              height={1125}
              className="parallax-img"
              data-parallax="0.16"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Mechas / Madeixas"
            title={
              <span id="mechas-title">Quer luz no rosto — sem estragar o que já conquistou</span>
            }
            lead="Mechas lindas não são só técnica. São escuta, escolha de tom e respeito pelo que o fio aguenta agora."
          />
          <ul className="checklist">
            {[
              'Olhamos para o seu cabelo antes de avançar',
              'Falamos do tom que combina consigo',
              'Fazemos teste quando faz sentido',
              'Cuidamos da fibra durante o processo',
              'Saí com um resultado que parece seu',
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <BookingButton label="Quero agendar mechas" service="Mechas / Madeixas" />
        </div>
      </div>
    </section>
  )
}

export function EvaluationBlock() {
  return (
    <section className="section section-deep" aria-labelledby="evaluation-title">
      <div className="container split-section">
        <div>
          <SectionHeading
            eyebrow="Antes de transformar"
            title={<span id="evaluation-title">Antes de transformar, avaliamos.</span>}
            lead="Cada cabelo é diferente. Determinados procedimentos só avançam depois de percebermos a sua história."
          />
          <ul className="checklist checklist--on-dark">
            {evaluationPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <BookingButton label="Quero a minha avaliação" variant="light" />
        </div>
        <Reveal>
          <div className="media-frame media-frame--parallax" style={{ aspectRatio: '4 / 5' }}>
            <img
              src="/images/avaliar.jpg"
              alt="Avaliação capilar"
              loading="lazy"
              decoding="async"
              width={900}
              height={1125}
              className="parallax-img"
              data-parallax="0.22"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
