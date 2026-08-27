'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Dictionary } from '@/i18n/get-dictionary'
import type { UrlLocale } from '@/i18n/config'
import { toAppLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { getServiceOptionsForBooking } from '@/data/services'
import {
  TIME_SLOTS,
  buildBookingRequestMessage,
  openWhatsAppMessage,
  getWhatsAppHumanUrl,
} from '@/lib/messaging/whatsapp'
import { ASSISTANT_EVENT, type AssistantIntent } from '@/lib/assistant-bridge'
import { IconClose, IconCookie } from '@/components/icons'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

const COOKIE_KEY = 'ash-cookie-consent-v2'

type Consent = {
  essential: true
  analytics: boolean
  marketing: boolean
}

type FlowStep = 'gate' | 'service' | 'day' | 'time' | 'details'

const SALES_LINES_PT = [
  'Cuidar do cabelo é um gesto de autoestima — e merece tempo dedicado só para si.',
  'Perfeito. Vamos preparar o pedido com calma para a Ana Sampaio receber tudo organizado.',
  'Quase lá. Um horário bem escolhido faz toda a diferença no seu protocolo.',
  'Excelente. Agora só preciso dos seus dados para a Ana Sampaio confirmar consigo.',
]

export function SiteChrome({ locale, dict }: { locale: UrlLocale; dict: Dictionary }) {
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [cookieOpen, setCookieOpen] = useState(false)
  const [consent, setConsent] = useState<Consent | null>(null)
  const [exitOpen, setExitOpen] = useState(false)
  const [exitShown, setExitShown] = useState(false)

  const [step, setStep] = useState<FlowStep>('gate')
  const [topic, setTopic] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [notes, setNotes] = useState('')

  const services = getServiceOptionsForBooking()
  const stepIndex = useMemo(() => {
    const order: FlowStep[] = ['gate', 'service', 'day', 'time', 'details']
    return Math.max(0, order.indexOf(step))
  }, [step])
  const progress = ((stepIndex + 1) / 5) * 100
  const salesLine = SALES_LINES_PT[Math.min(stepIndex, SALES_LINES_PT.length - 1)]

  useEffect(() => {
    try {
      const raw = localStorage.getItem(COOKIE_KEY)
      if (raw) setConsent(JSON.parse(raw) as Consent)
      else setCookieOpen(true)
    } catch {
      setCookieOpen(true)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return
    const onLeave = (e: MouseEvent) => {
      if (exitShown || e.clientY > 8) return
      setExitOpen(true)
      setExitShown(true)
    }
    document.addEventListener('mouseout', onLeave)
    return () => document.removeEventListener('mouseout', onLeave)
  }, [exitShown])

  useEffect(() => {
    function onOpen(e: Event) {
      const detail = (e as CustomEvent<AssistantIntent>).detail ?? { mode: 'gate' }
      setTopic(detail.topic ?? detail.serviceName ?? '')
      if (detail.serviceName) setService(detail.serviceName)
      if (detail.mode === 'book') {
        setStep('service')
      } else if (detail.mode === 'human') {
        window.open(getWhatsAppHumanUrl(detail.topic ?? detail.serviceName), '_blank', 'noopener,noreferrer')
        return
      } else {
        setStep('gate')
      }
      setAssistantOpen(true)
      setExitOpen(false)
    }
    window.addEventListener(ASSISTANT_EVENT, onOpen)
    return () => window.removeEventListener(ASSISTANT_EVENT, onOpen)
  }, [])

  function saveConsent(next: Consent) {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(next))
    setConsent(next)
    setCookieOpen(false)
  }

  function openAssistant(reset = true) {
    if (reset) {
      setStep('gate')
      setTopic('')
      setService('')
      setDate('')
      setTime('')
      setName('')
      setContact('')
      setNotes('')
    }
    setAssistantOpen(true)
    setExitOpen(false)
  }

  function talkToHuman() {
    const msg = topic
      ? `Olá Ana Sampaio, vi no site sobre “${topic}” e gostaria de falar consigo.`
      : 'Olá Ana Sampaio, gostaria de falar consigo sobre um atendimento.'
    openWhatsAppMessage(msg)
    setAssistantOpen(false)
  }

  function submitAssistant() {
    if (!service || !date || !time || !name || !contact) return
    const message = buildBookingRequestMessage({
      service,
      date,
      time,
      name,
      contact,
      notes,
      locale: toAppLocale(locale),
    })
    openWhatsAppMessage(message)
    setAssistantOpen(false)
    setStep('gate')
  }

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const chrome = (
    <>
      <button
        type="button"
        className="float-btn float-cookie float-left"
        aria-label={dict.cookies.reopen}
        onClick={() => setCookieOpen(true)}
      >
        <IconCookie width={18} height={18} />
      </button>

      <button
        type="button"
        className="float-btn float-assistant float-right"
        aria-label={dict.assistant.openLabel}
        onClick={() => openAssistant(true)}
      >
        <Image
          src={siteConfig.brand.assistantAvatar}
          alt=""
          width={56}
          height={56}
          className="float-assistant-photo"
        />
        <span className="float-assistant-online" aria-hidden />
      </button>

      {assistantOpen ? (
        <div
          className="assistant-panel assistant-panel-pro"
          role="dialog"
          aria-modal="true"
          aria-label={dict.assistant.title}
        >
          <div className="assistant-head">
            <div className="assistant-identity">
              <div className="assistant-avatar">
                <Image
                  src={siteConfig.brand.assistantAvatar}
                  alt=""
                  fill
                  sizes="44px"
                  style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
                />
              </div>
              <div>
                <strong>{dict.assistant.title}</strong>
                <p>{dict.assistant.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAssistantOpen(false)}
              aria-label={dict.assistant.closeLabel}
            >
              <IconClose width={18} height={18} />
            </button>
          </div>

          <div className="assistant-progress" aria-hidden>
            <div className="assistant-progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <p className="assistant-step-label">
            {dict.assistant.progressLabel} {stepIndex + 1}/5
          </p>

          <div className="assistant-body">
            <div className="bubble">{dict.assistant.greeting}</div>
            {topic ? (
              <div className="bubble bubble-soft">
                Vi que tem interesse em <strong>{topic}</strong>. Posso ajudar a cuidar disto consigo.
              </div>
            ) : null}
            <div className="bubble bubble-sales">{salesLine}</div>

            {step === 'gate' ? (
              <>
                <p>Como prefere avançar?</p>
                <div className="btn-group" style={{ flexDirection: 'column' }}>
                  <Button onClick={() => setStep('service')}>Quero agendar com a assistente</Button>
                  <Button variant="secondary" onClick={talkToHuman}>
                    Quero falar com a Ana Sampaio (WhatsApp)
                  </Button>
                </div>
                <p className="notice">{dict.assistant.tip}</p>
              </>
            ) : null}

            {step === 'service' ? (
              <>
                <p>{dict.assistant.askService}</p>
                <div className="chip-row">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`chip ${service === s.name ? 'is-active' : ''}`}
                      onClick={() => setService(s.name)}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
                <div className="btn-group">
                  <Button variant="ghost" onClick={() => setStep('gate')}>
                    {dict.common.back}
                  </Button>
                  <Button onClick={() => service && setStep('day')} disabled={!service}>
                    {dict.common.continue}
                  </Button>
                </div>
              </>
            ) : null}

            {step === 'day' ? (
              <>
                <p>{dict.assistant.askDay}</p>
                <div className="field">
                  <label htmlFor="as-date">{dict.booking.stepDay}</label>
                  <input
                    id="as-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="btn-group">
                  <Button variant="ghost" onClick={() => setStep('service')}>
                    {dict.common.back}
                  </Button>
                  <Button onClick={() => date && setStep('time')} disabled={!date}>
                    {dict.common.continue}
                  </Button>
                </div>
              </>
            ) : null}

            {step === 'time' ? (
              <>
                <p>{dict.assistant.askTime}</p>
                <div className="chip-row">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`chip ${time === t ? 'is-active' : ''}`}
                      onClick={() => setTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="btn-group">
                  <Button variant="ghost" onClick={() => setStep('day')}>
                    {dict.common.back}
                  </Button>
                  <Button onClick={() => time && setStep('details')} disabled={!time}>
                    {dict.common.continue}
                  </Button>
                </div>
              </>
            ) : null}

            {step === 'details' ? (
              <>
                <p>{dict.assistant.askDetails}</p>
                <div className="assistant-summary">
                  <strong>{dict.assistant.summaryTitle}</strong>
                  <ul>
                    <li>{service}</li>
                    <li>
                      {date} · {time}
                    </li>
                  </ul>
                </div>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="as-name">{dict.booking.name}</label>
                    <input id="as-name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="field">
                    <label htmlFor="as-contact">{dict.booking.contact}</label>
                    <input
                      id="as-contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="as-notes">
                      {dict.booking.notes} ({dict.common.optional})
                    </label>
                    <textarea id="as-notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
                  </div>
                </div>
                <p className="notice">{dict.booking.disclaimer}</p>
                <div className="btn-group">
                  <Button variant="ghost" onClick={() => setStep('time')}>
                    {dict.common.back}
                  </Button>
                  <Button onClick={submitAssistant} disabled={!name || !contact}>
                    {dict.assistant.sendWhatsApp}
                  </Button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}

      {cookieOpen ? (
        <div className="cookie-panel cookie-panel-left" role="dialog" aria-label={dict.cookies.title}>
          <h2 className="display-md" style={{ fontSize: '1.35rem' }}>
            {dict.cookies.title}
          </h2>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem' }}>{dict.cookies.lead}</p>
          <p style={{ margin: '0.35rem 0 0.75rem' }}>
            <Link href={localizedPath(locale, 'cookies')} style={{ fontSize: '0.9rem' }}>
              {dict.cookies.policyLink}
            </Link>
          </p>
          <div className="form-grid">
            <label className="notice">
              <strong>{dict.cookies.essential}</strong> — {dict.cookies.essentialDesc}
            </label>
            <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <input
                type="checkbox"
                checked={consent?.analytics ?? false}
                onChange={(e) =>
                  setConsent({
                    essential: true,
                    analytics: e.target.checked,
                    marketing: consent?.marketing ?? false,
                  })
                }
              />
              <span>
                <strong>{dict.cookies.analytics}</strong> — {dict.cookies.analyticsDesc}
              </span>
            </label>
            <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <input
                type="checkbox"
                checked={consent?.marketing ?? false}
                onChange={(e) =>
                  setConsent({
                    essential: true,
                    analytics: consent?.analytics ?? false,
                    marketing: e.target.checked,
                  })
                }
              />
              <span>
                <strong>{dict.cookies.marketing}</strong> — {dict.cookies.marketingDesc}
              </span>
            </label>
          </div>
          <div className="btn-group cookie-actions">
            <Button
              variant="secondary"
              onClick={() => saveConsent({ essential: true, analytics: false, marketing: false })}
            >
              {dict.cookies.rejectOptional}
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                saveConsent({
                  essential: true,
                  analytics: consent?.analytics ?? false,
                  marketing: consent?.marketing ?? false,
                })
              }
            >
              {dict.cookies.save}
            </Button>
            <Button onClick={() => saveConsent({ essential: true, analytics: true, marketing: true })}>
              {dict.cookies.acceptAll}
            </Button>
          </div>
        </div>
      ) : null}

      {exitOpen ? (
        <div className="exit-panel" role="dialog" aria-label={dict.exitIntent.title}>
          <div className="exit-card">
            <h2 className="display-md">{dict.exitIntent.title}</h2>
            <p className="lead">{dict.exitIntent.lead}</p>
            <div className="btn-group" style={{ flexDirection: 'column' }}>
              <Link
                className="btn btn-primary"
                href={localizedPath(locale, 'treatments')}
                onClick={() => setExitOpen(false)}
              >
                {dict.exitIntent.findTreatment}
              </Link>
              <button type="button" className="btn btn-secondary" onClick={() => openAssistant(true)}>
                {dict.exitIntent.book}
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => setExitOpen(false)}>
                {dict.exitIntent.dismiss}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )

  if (!mounted) return null
  return createPortal(chrome, document.body)
}
