'use client'

import type { Service } from '@/types/domain'
import type { UrlLocale } from '@/i18n/config'
import { Button } from '@/components/ui/Button'
import { openAssistantIntent } from '@/lib/assistant-bridge'
import { getLocalizedServiceCta, getLocalizedServiceName } from '@/data/service-i18n'

/** Same visual CTA on every treatment card — forest primary. */
export function ServiceCardCta({ locale, service }: { locale: UrlLocale; service: Service }) {
  const name = getLocalizedServiceName(service.id, locale)
  const label = getLocalizedServiceCta(service.id, locale)

  return (
    <Button
      type="button"
      variant="primary"
      className="service-card-cta"
      onClick={() =>
        openAssistantIntent({
          mode: service.ctaType === 'booking' ? 'book' : 'gate',
          serviceName: name,
          topic: name,
        })
      }
    >
      {label}
    </Button>
  )
}
