import { useMemo, useState } from 'react'
import { treatmentCategories, treatments } from '@/data/treatments'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { BookingButton } from '@/components/ui/Button'

export function Treatments() {
  const [active, setActive] = useState(treatmentCategories[0].id)

  const filtered = useMemo(
    () => treatments.filter((item) => item.category === active),
    [active],
  )

  const activeCategory = treatmentCategories.find((item) => item.id === active)

  return (
    <section className="section" aria-labelledby="treatments-title">
      <div className="container">
        <SectionHeading
          eyebrow="No acompanhamento"
          title={<span id="treatments-title">O que pode entrar no seu plano</span>}
          lead="Nada é imposto. Escolhemos juntas o que faz sentido para o seu cabelo — e para a sua vida."
        />

        <div className="treatments-layout">
          <div className="treatment-tabs" role="tablist" aria-label="Categorias de tratamentos">
            {treatmentCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                className="treatment-tab"
                aria-selected={active === category.id}
                onClick={() => setActive(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>

          {activeCategory ? (
            <Reveal>
              <p className="lead">{activeCategory.lead}</p>
            </Reveal>
          ) : null}

          <div className="treatment-cards" role="tabpanel">
            {filtered.map((item, index) => (
              <Reveal key={item.id} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                <article className="treatment-card">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="btn-group" style={{ marginTop: '2rem' }}>
          <BookingButton label="Quero o meu plano" service="Terapia Capilar" />
        </div>
      </div>
    </section>
  )
}
