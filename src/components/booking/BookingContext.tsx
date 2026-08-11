import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type BookingOptions = {
  service?: string
  label?: string
}

type BookingContextValue = {
  openBooking: (options?: BookingOptions) => void
  closeBooking: () => void
  isOpen: boolean
  service?: string
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [service, setService] = useState<string | undefined>()

  const openBooking = useCallback((options?: BookingOptions) => {
    setService(options?.service)
    setIsOpen(true)
  }, [])

  const closeBooking = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(
    () => ({ openBooking, closeBooking, isOpen, service }),
    [openBooking, closeBooking, isOpen, service],
  )

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}
