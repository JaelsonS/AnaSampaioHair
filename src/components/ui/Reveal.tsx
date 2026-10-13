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
    ref.current?.classList.add('is-visible')
  }, [])

  return (
    <div ref={ref} className={cn('reveal', eager && 'is-visible', className)}>
      {children}
    </div>
  )
}
