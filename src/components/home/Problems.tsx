import { capillaryProblems } from '@/data/problems'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { BookingButton } from '@/components/ui/Button'

export function Problems() {
  return (
    <section className="section" aria-labelledby="problems-title">
      <div className="container">
        <SectionHeading
          eyebrow="O que o incomoda"
          title={
            <span id="problems-title">Reconhece alguma destas situações?</span>
          }
          lead="Toque no que mais se parece consigo. Depois, se quiser, marque uma conversa com a Ana."
        />
        <Accordion
          type="problem"
          items={capillaryProblems.map((item) => ({
            id: item.id,
            title: item.name,
            subtitle: item.summary,
            content: item.detail,
          }))}
        />
        <div className="btn-group" style={{ marginTop: '2rem' }}>
          <BookingButton label="Quero falar disto com a Ana" service="Terapia Capilar" />
        </div>
      </div>
    </section>
  )
}
