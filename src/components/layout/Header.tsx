import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { mainNav } from '@/data/navigation'
import { siteConfig } from '@/config/site'
import { BookingButton } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Header() {
  const [overHero, setOverHero] = useState(true)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const hero = document.getElementById('page-hero')
    if (!hero) {
      setOverHero(false)
      return
    }

    let ticking = false
    const update = () => {
      const bottom = hero.getBoundingClientRect().bottom
      setOverHero(bottom > 88)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function closeMenu() {
    setOpen(false)
  }

  const solid = !overHero || open

  return (
    <>
      <header
        className={cn(
          'site-header',
          !solid && 'site-header--over-hero',
          solid && 'is-scrolled',
        )}
      >
        <div className="container header-inner">
          <NavLink
            to="/"
            className="brand"
            aria-label={`${siteConfig.name} — início`}
            end
            onClick={closeMenu}
          >
            <span className="brand-name">Ana Sampaio</span>
            <span className="brand-tag">Hair</span>
          </NavLink>

          <nav className="nav-desktop" aria-label="Principal">
            {mainNav.map((item) => (
              <NavLink key={item.href} to={item.href} end={item.href === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <span className="btn-book-desktop">
              <BookingButton />
            </span>
            <button
              type="button"
              className="menu-toggle"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={cn('mobile-nav', open && 'is-open')}
        hidden={!open}
        onClick={closeMenu}
      >
        <div
          className="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          onClick={(event) => event.stopPropagation()}
        >
          <ul className="mobile-nav-list">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href} onClick={closeMenu} end={item.href === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <BookingButton />
        </div>
      </div>
    </>
  )
}
