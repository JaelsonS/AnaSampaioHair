import { getServicesByCategory, serviceCategories } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { SmartCta } from '@/components/ui/SmartCta'

export function ServicesPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="section" id="servicos" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading
            eyebrow="Serviços"
            title={<span id="services-title">Beleza e cuidado — no mesmo lugar</span>}
            lead="Pode vir por um visual novo. Pode vir porque o cabelo está a pedir ajuda. Em ambos os casos, começa por uma conversa sincera."
          />
          <Button as="link" to="/servicos" variant="secondary">
            Ver todos os serviços
          </Button>
        </div>

        <div className="services-preview">
          {serviceCategories.map((category) => {
            const items = getServicesByCategory(category.id).slice(0, limit)
            return (
              <div key={category.id} id={category.id}>
                <Reveal>
                  <h3 className="display-md">{category.title}</h3>
                  <p className="lead" style={{ marginTop: '0.75rem' }}>
                    {category.lead}
                  </p>
                </Reveal>
                <div className="service-rail" style={{ marginTop: '1.5rem' }}>
                  {items.map((service, index) => (
                    <Reveal key={service.id} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                      <article className="service-item">
                        <div className="media-frame media-frame--parallax">
                          <img
                            src={service.image}
                            alt={service.imageAlt}
                            loading="lazy"
                            decoding="async"
                            width={800}
                            height={1000}
                            className="parallax-img"
                            data-parallax="0.12"
                          />
                        </div>
                        <h3>{service.name}</h3>
                        <p>{service.shortDescription}</p>
                        <SmartCta
                          className="text-link"
                          href={service.cta.href}
                          serviceName={service.name}
                        >
                          {service.cta.label} →
                        </SmartCta>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
