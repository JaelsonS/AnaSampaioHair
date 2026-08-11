import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === 'center' && 'mx-auto text-center', className)}>
      <div style={{ maxWidth: '40rem', marginInline: align === 'center' ? 'auto' : undefined }}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="display-lg" style={{ marginTop: eyebrow ? '1rem' : 0 }}>
          {title}
        </h2>
        {lead ? (
          <p className="lead" style={{ marginTop: '1.25rem', marginInline: align === 'center' ? 'auto' : undefined }}>
            {lead}
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}
