import { BookingButton, Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export function Hero() {
  return (
    <section className="hero" id="page-hero" aria-label="Apresentação">
      <div className="hero-media parallax-scope" aria-hidden="true">
        <img
          src="/images/mechas.jpg"
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="parallax-img"
          data-parallax="0.18"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <Reveal>
          <p className="eyebrow">Ana Sampaio Hair · Marinha Grande</p>
          <h1 className="display-xl">O seu cabelo merece ser escutado.</h1>
          <p className="lead">
            Se chegou até aqui, provavelmente já cansou de soluções genéricas. Aqui a Ana olha para
            si — para a saúde dos fios, para o couro cabeludo e para o visual que quer sentir no
            espelho.
          </p>
          <div className="btn-group">
            <BookingButton label="Quero agendar com a Ana" />
            <Button as="link" to="/terapia-capilar" variant="ghost">
              Quero perceber a terapia
            </Button>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <strong>Beleza</strong>
              <span>Mechas, corte, cor e brushing</span>
            </div>
            <div className="hero-meta-item">
              <strong>Saúde</strong>
              <span>Terapia capilar integrativa</span>
            </div>
            <div className="hero-meta-item">
              <strong>Cuidado</strong>
              <span>Avaliação antes de transformar</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
