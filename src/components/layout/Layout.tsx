import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { BookingProvider } from '@/components/booking/BookingContext'
import { BookingModal } from '@/components/booking/BookingModal'
import { useHashScroll } from '@/lib/useHashScroll'
import { useParallax } from '@/lib/useParallax'

function ParallaxRoot() {
  useParallax()
  return null
}

export function Layout() {
  const location = useLocation()
  useHashScroll()

  useEffect(() => {
    document.body.classList.remove('menu-open')
  }, [location.pathname])

  return (
    <BookingProvider>
      <ParallaxRoot key={location.pathname} />
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="site-main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <BookingModal />
      <ScrollRestoration />
    </BookingProvider>
  )
}
