import { Seo } from '@/components/shared/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { aboutHighlights, experiencePoints } from '@/data/content'
import { BookingButton } from '@/components/ui/Button'
import { FinalCta } from '@/components/home/FinalCta'
import { Reveal } from '@/components/ui/Reveal'

export function AboutPage() {
  return (
    <>
      <Seo
        title="Sobre Ana"
        description="Conheça Ana Sampaio — cabeleireira e terapeuta capilar integrativa em Marinha Grande."
        path="/sobre"
      />
      <PageHero
        eyebrow="Sobre Ana"
        title="Quem cuida de si"
        lead="Ana Sampaio une anos de salão com terapia capilar integrativa. O objectivo é simples: que se sinta vista, cuidada e confiante."
        image="/images/about/ana.jpg"
        imageAlt="Ana Sampaio"
        ctaLabel="Quero agendar com a Ana"
      />

      <section className="section">
        <div className="container split-section">
          <Reveal>
            <div className="media-frame media-frame--parallax about-photo">
              <img
                src="/images/gallery/g5.jpg"
                alt="Ambiente de cuidado no instituto"
                loading="lazy"
                decoding="async"
                className="parallax-img"
                data-parallax="0.14"
              />
            </div>
          </Reveal>
          <div>
            <h2 className="display-lg">Formação e caminho</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Experiência real, estudo contínuo e um jeito de cuidar que não trata todas as pessoas
              da mesma forma.
            </p>
            <ul className="credential-list">
              {aboutHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <BookingButton label="Marcar conversa com a Ana" />
          </div>
        </div>
      </section>

      <section className="section section-deep parallax-band">
        <div className="parallax-band__media" aria-hidden="true">
          <img
            src="/images/gallery/g2.jpg"
            alt=""
            className="parallax-img"
            data-parallax="0.26"
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="display-lg">Mais do que um tratamento. Um momento seu.</h2>
          <div className="experience-grid">
            {experiencePoints.map((item) => (
              <article className="experience-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <BookingButton label="Agendar com a Ana" variant="light" />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
