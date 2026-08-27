'use client'

import { useState } from 'react'
import type { UrlLocale } from '@/i18n/config'
import { courseTopics, buildCourseLeadWhatsAppMessage } from '@/data/courses'
import { openWhatsAppMessage } from '@/lib/messaging/whatsapp'
import { Button } from '@/components/ui/Button'

const FORM = {
  pt: {
    kicker: 'Próxima turma',
    title: 'Quero informação das formações',
    lead: 'Preencha e avance para o WhatsApp da Ana Sampaio com a mensagem já preparada — sem compromisso.',
    name: 'Nome',
    contact: 'Telefone / WhatsApp',
    course: 'Formação de interesse',
    notes: 'Notas (opcional)',
    notesPh: 'Ex.: preferência de horário, experiência prévia…',
    error: 'Preencha nome, contacto e a formação de interesse.',
    submit: 'Enviar e abrir WhatsApp',
    notice: 'Ao enviar, abre o WhatsApp com o seu pedido já preenchido para a Ana Sampaio (963 503 988).',
  },
  es: {
    kicker: 'Próxima turma',
    title: 'Quiero información de las formaciones',
    lead: 'Rellene y avance al WhatsApp de Ana Sampaio con el mensaje ya preparado — sin compromiso.',
    name: 'Nombre',
    contact: 'Teléfono / WhatsApp',
    course: 'Formación de interés',
    notes: 'Notas (opcional)',
    notesPh: 'Ej.: preferencia de horario, experiencia previa…',
    error: 'Rellene nombre, contacto y la formación de interés.',
    submit: 'Enviar y abrir WhatsApp',
    notice: 'Al enviar, se abre WhatsApp con su solicitud lista para Ana Sampaio (963 503 988).',
  },
  en: {
    kicker: 'Next group',
    title: 'I want course information',
    lead: 'Fill in and continue to Ana Sampaio’s WhatsApp with a ready message — no commitment.',
    name: 'Name',
    contact: 'Phone / WhatsApp',
    course: 'Course of interest',
    notes: 'Notes (optional)',
    notesPh: 'E.g. preferred schedule, prior experience…',
    error: 'Please fill in name, contact and the course of interest.',
    submit: 'Send and open WhatsApp',
    notice: 'Sending opens WhatsApp with your request ready for Ana Sampaio (963 503 988).',
  },
} as const

export function CourseLeadForm({
  defaultCourseId,
  compact = false,
  locale = 'pt',
}: {
  defaultCourseId?: string
  compact?: boolean
  locale?: UrlLocale
}) {
  const t = FORM[locale]
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [courseId, setCourseId] = useState(defaultCourseId ?? courseTopics[0]?.id ?? '')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !contact.trim() || !courseId) {
      setError(t.error)
      return
    }
    const topic = courseTopics.find((c) => c.id === courseId)
    if (!topic) return
    setError('')
    openWhatsAppMessage(
      buildCourseLeadWhatsAppMessage({
        name: name.trim(),
        contact: contact.trim(),
        courseTitle: topic.title,
        notes,
      }),
    )
  }

  return (
    <form className={`course-lead-form ${compact ? 'is-compact' : ''}`} onSubmit={submit}>
      {!compact ? <p className="course-lead-kicker">{t.kicker}</p> : null}
      <h3 className="display-md" style={{ fontSize: compact ? '1.25rem' : '1.55rem' }}>
        {t.title}
      </h3>
      <p className="course-lead-lead">{t.lead}</p>

      <div className="form-grid">
        <label className="field">
          <span>{t.name}</span>
          <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        </label>
        <label className="field">
          <span>{t.contact}</span>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            autoComplete="tel"
            required
          />
        </label>
        <label className="field">
          <span>{t.course}</span>
          <select value={courseId} onChange={(e) => setCourseId(e.target.value)} required>
            {courseTopics.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        {!compact ? (
          <label className="field">
            <span>{t.notes}</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder={t.notesPh}
            />
          </label>
        ) : null}
      </div>

      {error ? <p className="field error">{error}</p> : null}

      <Button type="submit">{t.submit}</Button>
      <p className="notice" style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}>
        {t.notice}
      </p>
    </form>
  )
}
