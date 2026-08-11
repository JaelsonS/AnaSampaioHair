import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useBooking } from '@/components/booking/BookingContext'
import {
  buildInfoWhatsAppMessage,
  buildServiceWhatsAppMessage,
  openWhatsApp,
} from '@/lib/whatsapp'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  serviceName?: string
  topic?: string
}

/**
 * CTA inteligente:
 * - booking / whatsapp → abre modal de agendamento ou WhatsApp com mensagem contextual
 * - restantes → Link interno
 */
export function SmartCta({ href, children, className, serviceName, topic }: Props) {
  const { openBooking } = useBooking()

  if (href === 'booking' || href === 'agendar') {
    return (
      <button
        type="button"
        className={cn(className)}
        onClick={() => openBooking({ service: serviceName })}
      >
        {children}
      </button>
    )
  }

  if (href === 'whatsapp') {
    return (
      <button
        type="button"
        className={cn(className)}
        onClick={() => {
          const message = serviceName
            ? buildServiceWhatsAppMessage(serviceName)
            : buildInfoWhatsAppMessage(topic ?? 'os seus serviços')
          openWhatsApp(message)
        }}
      >
        {children}
      </button>
    )
  }

  if (href.startsWith('http')) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  )
}
