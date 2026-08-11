import { PageHero } from '@/components/layout/PageHero'
import { Seo } from '@/components/shared/Seo'
import { getServicesByCategory, serviceCategories } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { BookingButton } from '@/components/ui/Button'
import { SmartCta } from '@/components/ui/SmartCta'
import { FinalCta } from '@/components/home/FinalCta'

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Serviços"
        description="Mechas, corte, coloração, tratamentos e cuidados personalizados na Ana Sampaio Hair, Marinha Grande."
        path="/servicos"
      />
      <PageHero
        eyebrow="Serviços"
        title="O que podemos fazer pelo seu cabelo"
        lead="Beleza que se vê — e saúde que se sente. Escolha o que precisa ou peça uma avaliação se ainda não souber."
        image="/images/mechas.jpg"
        imageAlt="Serviços Ana Sampaio Hair"
        ctaLabel="Quero agendar"
      />

      {serviceCategories.map((category) => (
        <section className="section" key={category.id} id={category.id}>
          <div className="container">
            <SectionHeading title={category.title} lead={category.lead} />
            <div className="service-rail" style={{ marginTop: '2rem' }}>
              {getServicesByCategory(category.id).map((service, index) => (
                <Reveal key={service.id} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                  <article className="service-item" id={service.slug}>
                    <div className="media-frame media-frame--parallax">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={1000}
                        className="parallax-img"
                        data-parallax="0.1"
                      />
                    </div>
                    <h2 className="display-md">{service.name}</h2>
                    <p>{service.description}</p>
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
        </section>
      ))}

      <section className="section-tight">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="lead" style={{ marginInline: 'auto' }}>
            Não sabe por onde começar? É normal. A avaliação existe exactamente para isso.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <BookingButton label="Pedir avaliação à Ana" />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
