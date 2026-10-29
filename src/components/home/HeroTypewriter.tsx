'use client'

import { useEffect, useState } from 'react'

export type HeroServicePhrase = {
  lines: [string] | [string, string]
}

const ROTATE_MS = 5200

/**
 * Rotação de serviços no hero — uma frase de cada vez (sem sobreposição de sublinhados).
 */
export function HeroTypewriter({
  phrases,
  prefix = 'Hoje no instituto',
}: {
  phrases: HeroServicePhrase[]
  prefix?: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (phrases.length < 2) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse =
      typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
    if (reduced || coarse) return

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [phrases.length])

  if (!phrases.length) return null

  const active = phrases[index] ?? phrases[0]

  return (
    <div className="hero-typewriter" aria-live="polite">
      <p className="hero-typewriter-prefix">{prefix}</p>
      <div className="hero-typewriter-rotator">
        <div className="hero-typewriter-phrase is-active">
          <span className="hero-typewriter-line">
            <span className="hero-typewriter-text-line">{active.lines[0]}</span>
            {active.lines[1] ? (
              <span className="hero-typewriter-text-line">{active.lines[1]}</span>
            ) : null}
          </span>
        </div>
      </div>
      <span className="sr-only">{active.lines.filter(Boolean).join(' ')}</span>
    </div>
  )
}
