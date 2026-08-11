import { useEffect, useId, useState, type FormEvent } from 'react'
import { useBooking } from '@/components/booking/BookingContext'
import { Button } from '@/components/ui/Button'
import {
  TIME_SLOTS,
  buildBookingWhatsAppMessage,
  openWhatsApp,
} from '@/lib/whatsapp'

function todayISO() {
  const d = new Date()
  const offset = d.getTimezoneOffset()
  const local = new Date(d.getTime() - offset * 60_000)
  return local.toISOString().slice(0, 10)
}

function formatDatePT(iso: string) {
  const [y, m, day] = iso.split('-')
  return `${day}/${m}/${y}`
}

export function BookingModal() {
  const { isOpen, closeBooking, service } = useBooking()
  const titleId = useId()
  const [date, setDate] = useState(todayISO)
  const [time, setTime] = useState('10:00')
  const [name, setName] = useState('')
  const [interest, setInterest] = useState(service ?? 'Avaliação personalizada')

  useEffect(() => {
    if (isOpen) {
      setInterest(service ?? 'Avaliação personalizada')
      setDate(todayISO())
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => document.body.classList.remove('modal-open')
  }, [isOpen, service])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBooking()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeBooking])

  if (!isOpen) return null

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const message = buildBookingWhatsAppMessage({
      date: formatDatePT(date),
      time,
      service: interest,
      name: name.trim() || undefined,
    })
    openWhatsApp(message)
    closeBooking()
  }

  return (
    <div className="booking-modal" role="presentation" onClick={closeBooking}>
      <div
        className="booking-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="booking-modal__close" onClick={closeBooking} aria-label="Fechar">
          ×
        </button>
        <p className="eyebrow">Agendar com a Ana</p>
        <h2 id={titleId} className="display-md">
          Escolha o dia e a hora que prefere
        </h2>
        <p className="booking-modal__lead">
          Depois enviamos uma mensagem pronta no WhatsApp. A Ana só precisa de confirmar se tem
          disponibilidade — ou sugerir outro horário.
        </p>

        <form className="booking-form" onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="booking-name">O seu nome (opcional)</label>
            <input
              id="booking-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Como a Ana lhe pode chamar"
            />
          </div>

          <div className="form-field">
            <label htmlFor="booking-interest">O que procura</label>
            <select
              id="booking-interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              <option>Avaliação personalizada</option>
              <option>Mechas / Madeixas</option>
              <option>Corte</option>
              <option>Coloração</option>
              <option>Brushing</option>
              <option>Alisamento</option>
              <option>Terapia Capilar</option>
              <option>Tratamento (hidratação / reconstrução)</option>
              <option>Plano de Saúde Capilar</option>
            </select>
          </div>

          <div className="booking-form__row">
            <div className="form-field">
              <label htmlFor="booking-date">Dia</label>
              <input
                id="booking-date"
                type="date"
                min={todayISO()}
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="booking-time">Hora</label>
              <select
                id="booking-time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="booking-modal__hint">
            Horário de referência: segunda a sábado, 09h–18h. Às terças, pós-laboral até às 21h
            mediante disponibilidade.
          </p>

          <Button type="submit" className="booking-modal__submit">
            Enviar pedido no WhatsApp
          </Button>
        </form>
      </div>
    </div>
  )
}
