'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  /** Above-the-fold blocks: show immediately (images still load with priority where set). */
  eager = false,
}: {
  children: React.ReactNode
  className?: string
  eager?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (eager || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '80px 0px 80px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [eager])

  return (
    <div ref={ref} className={cn('reveal', eager && 'is-visible', className)}>
      {children}
    </div>
  )
}
