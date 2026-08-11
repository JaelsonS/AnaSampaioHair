import { cn } from '@/lib/utils'
import { useBooking } from '@/components/booking/BookingContext'

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'ghost'

export function BookingButton({
  label = 'Agendar avaliação',
  variant = 'primary',
  className,
  service,
}: {
  label?: string
  variant?: ButtonVariant
  className?: string
  service?: string
}) {
  const { openBooking } = useBooking()
  const classes = cn('btn', `btn-${variant}`, className)

  return (
    <button
      type="button"
      className={classes}
      onClick={() => openBooking({ service })}
    >
      {label}
    </button>
  )
}
