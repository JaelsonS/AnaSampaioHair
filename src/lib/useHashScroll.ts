import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Garante scroll para âncoras (#agendar, etc.) após navegação. */
export function useHashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = decodeURIComponent(hash.replace('#', ''))
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)

    return () => window.clearTimeout(timer)
  }, [hash, pathname])
}
