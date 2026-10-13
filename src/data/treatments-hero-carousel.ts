import { treatmentsHeroWorkSlides } from '@/data/treatments-hero-slides'

/** Hero Tratamentos — omitir slides que não devem aparecer no carrossel (ordem = sync trabalhos/). */
const TREATMENTS_HERO_OMIT = new Set([
  'imgcoloracaodepois00', // 3.ª no carrossel original
  'imgcoloracaodepois02frente', // 7.ª
])

export const treatmentsHeroCarouselSlides = treatmentsHeroWorkSlides.filter(
  (s) => !TREATMENTS_HERO_OMIT.has(s.id),
)
