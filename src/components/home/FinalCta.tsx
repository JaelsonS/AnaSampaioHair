import { BookingButton, Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export function FinalCta() {
  return (
    <section className="section-tight" aria-label="Agendar">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div>
              <p className="eyebrow">Pronto quando estiver</p>
              <h2>O próximo passo pode ser só uma mensagem.</h2>
              <p style={{ marginTop: '1rem' }}>
                Escolha o dia e a hora que prefere. A Ana confirma a disponibilidade — e começa o
                cuidado que o seu cabelo merece.
              </p>
            </div>
            <div className="btn-group">
              <BookingButton label="Escolher dia e hora" variant="light" />
              <Button as="link" to="/contacto" variant="ghost">
                Prefiro escrever primeiro
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
