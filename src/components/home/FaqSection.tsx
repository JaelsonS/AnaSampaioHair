import { faqItems } from '@/data/faq'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { BookingButton, Button } from '@/components/ui/Button'

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? faqItems.slice(0, limit) : faqItems

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeading
          eyebrow="Perguntas"
          title={<span id="faq-title">Dúvidas que ouvimos todos os dias</span>}
          lead="Se a sua pergunta está aqui, óptimo. Se não estiver, diga-nos — respondemos."
        />
        <Accordion
          type="faq"
          items={items.map((item) => ({
            id: item.id,
            title: item.question,
            content: item.answer,
          }))}
        />
        <div className="btn-group" style={{ marginTop: '2rem' }}>
          <BookingButton label="Quero agendar na mesma" />
          {limit ? (
            <Button as="link" to="/faq" variant="secondary">
              Ver mais perguntas
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
