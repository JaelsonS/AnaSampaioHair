import { experiencePoints } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { BookingButton } from '@/components/ui/Button'

export function Experience() {
  return (
    <section className="section section-deep parallax-band" aria-labelledby="experience-title">
      <div className="parallax-band__media" aria-hidden="true">
        <img
          src="/images/gallery/g3.jpg"
          alt=""
          className="parallax-img"
          data-parallax="0.35"
        />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="A experiência"
          title={<span id="experience-title">Mais do que um tratamento. Um momento seu.</span>}
          lead="Ambiente acolhedor, tempo para si e honestidade no cuidado — do primeiro “olá” ao espelho no fim."
        />
        <div className="experience-grid">
          {experiencePoints.map((item, index) => (
            <Reveal key={item.title} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
              <article className="experience-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="btn-group" style={{ marginTop: '2rem' }}>
          <BookingButton label="Quero viver esta experiência" variant="light" />
        </div>
      </div>
    </section>
  )
}
