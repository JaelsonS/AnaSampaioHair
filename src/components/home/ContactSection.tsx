import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BookingButton, Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { FacebookIcon, InstagramIcon } from '@/components/shared/SocialIcons'
import { GoogleReviewCard } from '@/components/shared/GoogleReviewCard'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')
  const [accepted, setAccepted] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!accepted) {
      setError('Para enviar, precisa de aceitar a Política de Privacidade e os Termos de Utilização.')
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      interest: String(data.get('interest') || ''),
      message: String(data.get('message') || ''),
      _subject: siteConfig.form.subject,
      _template: 'table',
      _captcha: 'false',
      privacy_accepted: 'Sim',
      legal_notice:
        'O titular consentiu o tratamento dos dados para resposta ao pedido de contacto/avaliação.',
    }

    setStatus('loading')

    try {
      const response = await fetch(siteConfig.form.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Falha no envio')
      }

      setStatus('success')
      form.reset()
      setAccepted(false)
    } catch {
      setStatus('error')
      setError(
        'Não foi possível enviar agora. Tente novamente ou contacte-nos por WhatsApp / email.',
      )
    }
  }

  return (
    <section className="section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title={<span id="contact-title">Vamos cuidar do seu cabelo?</span>}
            lead="Estamos em Marinha Grande. Escreva, ligue ou peça já um horário — a Ana responde."
          />

          <div className="contact-details" style={{ marginTop: '2rem' }}>
            <div className="contact-block">
              <h3>Morada</h3>
              <p>{siteConfig.contact.address.full}</p>
              <Button
                as="a"
                href={siteConfig.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                style={{ marginTop: '0.75rem' }}
              >
                Como chegar
              </Button>
            </div>

            <div className="contact-block" id="agendar">
              <h3>Email e telefone</h3>
              <p>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </p>
              <p>
                <a href={`tel:+${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>
              </p>
              <div style={{ marginTop: '0.85rem' }}>
                <BookingButton label="Agendar no WhatsApp" />
              </div>
            </div>

            <div className="contact-block">
              <h3>Horário</h3>
              {siteConfig.contact.hours.map((item) => (
                <p key={item.label}>
                  <strong>{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>

            <div className="contact-block">
              <h3>Redes sociais</h3>
              <div className="social-row">
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${siteConfig.social.instagram.handle}`}
                >
                  <InstagramIcon />
                  <span>{siteConfig.social.instagram.handle}</span>
                </a>
                <a
                  href={siteConfig.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook ${siteConfig.social.facebook.label}`}
                >
                  <FacebookIcon />
                  <span>{siteConfig.social.facebook.label}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Reveal>
          <form className="contact-form surface" onSubmit={onSubmit} noValidate>
            <h3 className="display-md">Escreva-nos</h3>
            <p className="lead" style={{ marginTop: '0.5rem' }}>
              Conte o que o seu cabelo precisa. Respondemos com carinho e o mais breve possível.
            </p>

            <div className="form-field">
              <label htmlFor="name">Nome completo</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Telefone (opcional)</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="form-field">
              <label htmlFor="interest">Interesse</label>
              <select id="interest" name="interest" defaultValue="avaliacao">
                <option value="avaliacao">Avaliação</option>
                <option value="beleza">Serviços de beleza</option>
                <option value="terapia">Terapia capilar</option>
                <option value="plano">Plano de saúde capilar</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" required placeholder="Olá Ana, o meu cabelo…" />
            </div>

            <div className="legal-notice">
              <p>
                Os seus dados servem apenas para responder a este pedido. Pode gerir os seus direitos
                na{' '}
                <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
              </p>
            </div>

            <label className="checkbox-field">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                required
              />
              <span>
                Aceito a{' '}
                <Link to="/politica-de-privacidade" target="_blank">
                  Política de Privacidade
                </Link>{' '}
                e os{' '}
                <Link to="/termos-de-utilizacao" target="_blank">
                  Termos
                </Link>
                .
              </span>
            </label>

            {error ? (
              <p className="form-error" role="alert">
                {error}
              </p>
            ) : null}

            {status === 'success' ? (
              <p className="form-success" role="status">
                Mensagem enviada com sucesso. Obrigada pelo contacto.
              </p>
            ) : null}

            <Button type="submit" disabled={!accepted || status === 'loading'}>
              {status === 'loading' ? 'A enviar…' : 'Enviar pedido'}
            </Button>
          </form>
        </Reveal>
      </div>

      <div className="container" style={{ marginTop: '2.5rem' }}>
        <GoogleReviewCard />
      </div>

      <div className="container" style={{ marginTop: '2.5rem' }}>
        <iframe
          className="map-frame"
          title="Mapa — Ana Sampaio Hair, Marinha Grande"
          src={siteConfig.contact.address.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
