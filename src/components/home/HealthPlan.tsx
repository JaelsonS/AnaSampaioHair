import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { BookingButton, Button } from '@/components/ui/Button'

export function HealthPlan() {
  return (
    <section className="section" aria-labelledby="plan-title">
      <div className="container split-section">
        <div>
          <SectionHeading
            eyebrow="Plano de Saúde Capilar"
            title={<span id="plan-title">Cuidar do cabelo não é só uma vez.</span>}
            lead="Se quer continuidade — resultados que se mantêm — fale connosco sobre o plano. Explicamos tudo sem pressão."
          />
          <div className="btn-group" style={{ marginTop: '1.75rem' }}>
            <BookingButton label="Quero saber do plano" service="Plano de Saúde Capilar" />
            <Button as="link" to="/contacto" variant="secondary">
              Falar com a Ana
            </Button>
          </div>
        </div>
        <Reveal>
          <div className="surface" style={{ padding: '2rem' }}>
            <p className="eyebrow">Acompanhamento</p>
            <h3 className="display-md" style={{ marginTop: '1rem' }}>
              Um ritmo feito para si
            </h3>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Em vez de “tratar e esquecer”, construímos presença: visitas, evolução e ajustes.
              Peça detalhes no contacto.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Ebook() {
  return (
    <section className="section section-tight" aria-labelledby="ebook-title">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div>
              <p className="eyebrow">Guia</p>
              <h2 id="ebook-title">Quer entender melhor o seu próprio cabelo?</h2>
              <p style={{ marginTop: '1rem' }}>
                O guia <strong>Meu Cabelo dos Sonhos</strong> fala de estrutura, cronograma e como
                escolher o que faz sentido para os seus fios. Peça informação — sem compromisso.
              </p>
            </div>
            <Button as="link" to="/contacto" variant="light">
              Quero conhecer o guia
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
