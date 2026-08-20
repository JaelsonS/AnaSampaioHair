'use client'

import { Button } from '@/components/ui/Button'
import { IconCalendar } from '@/components/icons'
import { openAssistantIntent } from '@/lib/assistant-bridge'

export function HomeCtaButtons({
  primaryLabel,
  topic,
  serviceName,
  secondaryHref,
  secondaryLabel,
  variant = 'primary',
  icon = false,
}: {
  primaryLabel: string
  topic: string
  serviceName?: string
  secondaryHref?: string
  secondaryLabel?: string
  variant?: 'primary' | 'on-dark'
  icon?: boolean
}) {
  return (
    <div className="btn-group">
      <Button
        type="button"
        variant={variant}
        onClick={() =>
          openAssistantIntent({
            mode: 'gate',
            topic,
            serviceName: serviceName ?? topic,
          })
        }
      >
        {icon ? <IconCalendar /> : null}
        {primaryLabel}
      </Button>
      {secondaryHref && secondaryLabel ? (
        <Button href={secondaryHref} variant={variant === 'on-dark' ? 'ghost-on-dark' : 'ghost'}>
          {secondaryLabel}
        </Button>
      ) : null}
    </div>
  )
}
