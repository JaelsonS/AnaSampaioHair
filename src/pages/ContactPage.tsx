import { Seo } from '@/components/shared/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { ContactSection } from '@/components/home/ContactSection'
import { BookingButton } from '@/components/ui/Button'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contacto"
        description="Fale com a Ana Sampaio Hair em Marinha Grande — WhatsApp, email e agendamento."
        path="/contacto"
      />
      <PageHero
        eyebrow="Contacto"
        title="Vamos conversar?"
        lead="Peça horário, tire dúvidas ou diga o que o seu cabelo precisa. Estamos cá para ajudar."
        image="/images/avaliar.jpg"
        imageAlt="Contacto Ana Sampaio Hair"
        ctaLabel="Escolher dia e hora"
      />
      <div className="container" style={{ marginTop: '-1.5rem', position: 'relative', zIndex: 2 }}>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <BookingButton label="Agendar agora no WhatsApp" />
        </div>
      </div>
      <ContactSection />
    </>
  )
}
