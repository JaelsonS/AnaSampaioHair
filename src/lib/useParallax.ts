import { useEffect } from 'react'

/**
 * Parallax estável: mede o contentor (pai) e move só a imagem interna.
 * Evita o loop getBoundingClientRect → transform → tremor no scroll.
 */
export function useParallax() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'))
    if (!nodes.length) return

    let ticking = false

    const update = () => {
      const vh = window.innerHeight
      nodes.forEach((node) => {
        const speed = Number(node.dataset.parallax || '0.12')
        const frame =
          node.closest<HTMLElement>(
            '.parallax-scope, .media-frame--parallax, .hero-media, .parallax-band__media, .page-hero__media, .need-card',
          ) ?? node.parentElement
        if (!frame) return

        const rect = frame.getBoundingClientRect()
        // Só anima quando o bloco está próximo do ecrã
        if (rect.bottom < -80 || rect.top > vh + 80) return

        const progress = (vh / 2 - (rect.top + rect.height / 2)) * speed
        const clamped = Math.max(-72, Math.min(72, progress))
        node.style.transform = `translate3d(0, ${clamped.toFixed(1)}px, 0) scale(1.12)`
      })
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
  })
}
