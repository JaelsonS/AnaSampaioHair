import { Seo } from '@/components/shared/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { therapySteps } from '@/data/content'
import { Problems } from '@/components/home/Problems'
import { Treatments } from '@/components/home/Treatments'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { BookingButton } from '@/components/ui/Button'
import { FinalCta } from '@/components/home/FinalCta'

const therapyVisuals = [
  { src: '/images/terapia.jpg', alt: 'Avaliação e terapia capilar' },
  { src: '/images/need-scalp.jpg', alt: 'Cuidado do couro cabeludo' },
  { src: '/images/escova.jpg', alt: 'Escova e cuidados terapêuticos' },
  { src: '/images/nutricao.jpg', alt: 'Tratamento e nutrição' },
]

export function TherapyPage() {
  return (
    <>
      <Seo
        title="Terapia Capilar"
        description="Terapia Capilar Integrativa em Marinha Grande com Ana Sampaio — escuta, avaliação e acompanhamento."
        path="/terapia-capilar"
      />
      <PageHero
        eyebrow="Terapia Capilar Integrativa"
        title="O couro cabeludo também fala. Nós escutamos."
        lead="Queda, caspa, oleosidade, desconforto… Em vez de adivinhar, vamos perceber o que se passa consigo — com calma e responsabilidade."
        image="/images/terapia.jpg"
        imageAlt="Terapia capilar"
        ctaLabel="Agendar avaliação"
        service="Terapia Capilar"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Como acompanhamos"
            lead="Um percurso simples, humano e feito à sua medida."
          />
          <div className="therapy-grid">
            {therapySteps.map((step, index) => (
              <Reveal key={step.number} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                <article className="therapy-step">
                  <div className="num">{step.number}</div>
                  <h2 className="display-md">{step.title}</h2>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <BookingButton label="Quero começar" service="Terapia Capilar" />
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-label="Ambiente de terapia">
        <div className="container therapy-mosaic">
          {therapyVisuals.map((item, index) => (
            <Reveal key={item.src} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
              <div className="media-frame media-frame--parallax therapy-mosaic__item">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="parallax-img"
                  data-parallax={index % 2 === 0 ? '0.14' : '0.2'}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-deep parallax-band">
        <div className="parallax-band__media" aria-hidden="true">
          <img src="/images/need-scalp.jpg" alt="" className="parallax-img" data-parallax="0.3" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="display-lg">Não prometemos milagres. Prometemos atenção.</h2>
          <p className="lead" style={{ marginTop: '1rem', maxWidth: '36rem' }}>
            A terapia capilar aqui não substitui médico. É cuidado personalizado, acompanhamento e
            honestidade — para o seu cabelo e para a sua tranquilidade.
          </p>
          <div className="btn-group" style={{ marginTop: '1.5rem' }}>
            <BookingButton label="Quero a minha avaliação" variant="light" service="Terapia Capilar" />
          </div>
        </div>
      </section>

      <Problems />
      <Treatments />
      <FinalCta />
    </>
  )
}
