'use client'

import { useEffect, useState } from 'react'

/**
 * Cycles through service names with a typewriter effect.
 * Respects prefers-reduced-motion (shows first phrase fully).
 */
export function HeroTypewriter({
  phrases,
  prefix = 'Hoje no instituto',
}: {
  phrases: string[]
  prefix?: string
}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing')

  useEffect(() => {
    if (!phrases.length) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setText(phrases[0] ?? '')
      return
    }

    const full = phrases[index] ?? ''
    let timer: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (text.length < full.length) {
        timer = setTimeout(() => setText(full.slice(0, text.length + 1)), 48)
      } else {
        timer = setTimeout(() => setPhase('pause'), 1600)
      }
    } else if (phase === 'pause') {
      timer = setTimeout(() => setPhase('deleting'), 400)
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 28)
      } else {
        setIndex((i) => (i + 1) % phrases.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timer)
  }, [phrases, index, text, phase])

  return (
    <p className="hero-typewriter" aria-live="polite">
      <span className="hero-typewriter-prefix">{prefix}</span>
      <span className="hero-typewriter-line">
        <span className="hero-typewriter-text">{text}</span>
        <span className="hero-typewriter-cursor" aria-hidden>
          |
        </span>
      </span>
    </p>
  )
}
