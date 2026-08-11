import { hairNeeds } from '@/data/hairNeeds'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { SmartCta } from '@/components/ui/SmartCta'

export function HairNeeds() {
  return (
    <section className="section" id="necessidade" aria-labelledby="needs-title">
      <div className="container">
        <SectionHeading
          eyebrow="Diga-nos por onde dói — ou por onde sonha"
          title={<span id="needs-title">O que o seu cabelo está a pedir hoje?</span>}
          lead="Escolha o caminho que mais se parece consigo. Sem complicar. Sem julgamentos."
        />

        <div className="needs-grid">
          {hairNeeds.map((need, index) => (
            <Reveal key={need.id} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
              <article className="need-card">
                <img
                  src={need.image}
                  alt={need.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                  className="parallax-img"
                  data-parallax={index % 2 === 0 ? '0.1' : '0.16'}
                />
                <div className="need-card-content">
                  <h3>{need.title}</h3>
                  <p>{need.description}</p>
                  <SmartCta
                    className="text-link"
                    href={need.cta.href}
                    serviceName={need.serviceName}
                  >
                    {need.cta.label} →
                  </SmartCta>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
