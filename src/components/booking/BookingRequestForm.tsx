'use client'

import { useMemo, useState } from 'react'
import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { toAppLocale } from '@/i18n/config'
import { getServiceOptionsForLocale } from '@/data/service-i18n'
import {
  TIME_SLOTS,
  buildBookingRequestMessage,
  openWhatsAppMessage,
} from '@/lib/messaging/whatsapp'
import { Button } from '@/components/ui/Button'
import { IconCalendar } from '@/components/icons'

export function BookingRequestForm({
  locale,
  dict,
}: {
  locale: UrlLocale
  dict: Dictionary
}) {
  const services = useMemo(() => getServiceOptionsForLocale(locale), [locale])
  const [service, setService] = useState(services[0]?.name ?? '')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!service || !date || !time || !name.trim() || !contact.trim()) {
      setError(dict.common.required)
      return
    }
    setError('')
    const message = buildBookingRequestMessage({
      service,
      date,
      time,
      name: name.trim(),
      contact: contact.trim(),
      notes: notes.trim() || undefined,
      locale: toAppLocale(locale),
    })
    openWhatsAppMessage(message)
  }

  return (
    <form className="form-grid" onSubmit={onSubmit} noValidate>
      <p className="notice">{dict.common.requestOnlyNotice}</p>
      <p className="notice">{dict.booking.disclaimer}</p>

      <div className="field">
        <label htmlFor="bk-service">{dict.booking.stepService}</label>
        <select
          id="bk-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="bk-date">{dict.booking.stepDay}</label>
        <input
          id="bk-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <fieldset className="field">
        <legend>{dict.booking.stepTime}</legend>
        <div className="chip-row">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              className={`chip ${time === slot ? 'is-active' : ''}`}
              onClick={() => setTime(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="bk-name">{dict.booking.name}</label>
        <input
          id="bk-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="bk-contact">{dict.booking.contact}</label>
        <input
          id="bk-contact"
          name="contact"
          autoComplete="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="bk-notes">
          {dict.booking.notes} ({dict.common.optional})
        </label>
        <textarea
          id="bk-notes"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {error ? <p className="error">{error}</p> : null}

      <Button type="submit">
        <IconCalendar />
        {dict.booking.submit}
      </Button>
      <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{dict.booking.successHint}</p>
    </form>
  )
}
