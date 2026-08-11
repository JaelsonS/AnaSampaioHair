import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

const STORAGE_KEY = 'ash-cookie-consent'

function hasConsent() {
  try {
    return Boolean(localStorage.getItem(STORAGE_KEY))
  } catch {
    return true
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(() => !hasConsent())

  if (!visible) return null

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Consentimento de cookies">
      <p>
        Utilizamos cookies essenciais para o funcionamento do website e, com o seu consentimento,
        cookies para melhorar a experiência. Consulte a{' '}
        <Link to="/politica-de-cookies">Política de Cookies</Link>.
      </p>
      <div className="btn-group">
        <Button onClick={accept}>Aceitar</Button>
        <Button as="link" to="/politica-de-cookies" variant="secondary">
          Saber mais
        </Button>
      </div>
    </div>
  )
}
