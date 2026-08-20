import type { AppLocale } from '@/i18n/config'

/** UI translations for WP posts (titles/excerpts/categories). Bodies stay PT until full editorial translation. */
export type BlogUiLocale = Exclude<AppLocale, 'pt-PT'>

type BlogUiCopy = { title: string; excerpt: string; category?: string }

export const blogCategoryI18n: Record<string, Record<BlogUiLocale, string>> = {
  'Salão de Beleza': { es: 'Salón de belleza', en: 'Beauty salon' },
  'Terapia Capilar': { es: 'Terapia capilar', en: 'Scalp therapy' },
}

export const blogPostI18n: Record<string, Record<BlogUiLocale, BlogUiCopy>> = {
  'wp-5702': {
    es: { title: "Terapia capilar para cabellos grasos", excerpt: "Descubra la terapia capilar para cabellos grasos y fíos más ligeros y sanos — consejos prácticos para el día a día." },
    en: { title: "Scalp therapy for oily hair", excerpt: "Discover scalp therapy for oily hair and lighter, healthier strands — practical tips for everyday balance." },
  },
  'wp-5694': {
    es: { title: "Cómo elegir un terapeuta capilar", excerpt: "Aprenda a elegir el terapeuta capilar adecuado y un camino de cuidado que encaje con su cabello." },
    en: { title: "How to choose a hair therapist", excerpt: "Learn how to choose the right hair therapist for you and build a care path that actually fits your hair." },
  },
  'wp-5686': {
    es: { title: "Mejores técnicas de terapia capilar", excerpt: "Explore las técnicas de terapia que apoyan un cabello más sano — de la hidratación a los protocolos profesionales." },
    en: { title: "Best scalp therapy techniques", excerpt: "Explore the therapy techniques that support healthier hair — from hydration to professional protocols." },
  },
  'wp-5678': {
    es: { title: "Tratamiento para cabellos dañados", excerpt: "Entienda el cabello dañado y el cuidado que ayuda a recuperar suavidad, fuerza y brillo — sin promesas milagro." },
    en: { title: "Treatment for damaged hair", excerpt: "Understand damaged hair and the care that helps restore softness, strength and shine — without miracle claims." },
  },
  'wp-5670': {
    es: { title: "Terapeuta capilar especializado en caída", excerpt: "Qué hace un terapeuta especializado en caída — valoración, escucha y un plan personalizado." },
    en: { title: "Hair therapist specialised in hair shedding", excerpt: "What a specialised hair therapist does for shedding — assessment, listening and a personalised plan." },
  },
  'wp-5662': {
    es: { title: "Peluquería femenina en Leiria, Portugal", excerpt: "Peluquería femenina en Leiria, Portugal — belleza con salud del cuero en el centro." },
    en: { title: "Women's hairdresser in Leiria, Portugal", excerpt: "Women's hair services in Leiria, Portugal — beauty with scalp health at the centre." },
  },
  'wp-5654': {
    es: { title: "Servicios de peluquería en Leiria, Portugal", excerpt: "Servicios de peluquería en Leiria — color, corte y cuidado con enfoque integrativo." },
    en: { title: "Hairdresser services in Leiria, Portugal", excerpt: "Hairdresser services in Leiria — colour, cut and care with an integrative approach." },
  },
  'wp-5616': {
    es: { title: "Tratamiento capilar especializado en Marinha Grande, Leiria", excerpt: "Cuidado capilar especializado en Marinha Grande, Leiria — protocolos personalizados." },
    en: { title: "Specialised hair treatment in Marinha Grande, Leiria", excerpt: "Specialised hair care in Marinha Grande, Leiria — personalised protocols for real hair needs." },
  },
  'wp-5592': {
    es: { title: "Dermatitis seborreica", excerpt: "Dermatitis seborreica y confort del cuero — lenguaje responsable, valoración primero." },
    en: { title: "Seborrhoeic dermatitis", excerpt: "Seborrhoeic dermatitis and scalp comfort — responsible care language, assessment first." },
  },
  'wp-5586': {
    es: { title: "Calvicie", excerpt: "Patrones de calvicie y rarefacción — cuando la valoración personalizada marca la diferencia." },
    en: { title: "Baldness patterns", excerpt: "Baldness patterns and thinning — when personalised assessment makes the difference." },
  },
  'wp-5579': {
    es: { title: "Alopecia areata", excerpt: "Alopecia areata: escucha, cuidado calmado y un plan de seguimiento a su medida." },
    en: { title: "Alopecia areata", excerpt: "Alopecia areata: listening, calm care and a follow-up plan built around you." },
  },
  'wp-5565': {
    es: { title: "Corte bordado", excerpt: "Corte bordado para ligereza y movimiento — sin perder la longitud que desea." },
    en: { title: "Point-cutting", excerpt: "Point-cutting for lightness and movement — without losing the length you want." },
  },
  'wp-5530': {
    es: { title: "Masaje capilar con aceites terapéuticos", excerpt: "Masaje con aceites terapéuticos para confort del cuero, circulación y un momento de cuidado." },
    en: { title: "Scalp massage with therapeutic oils", excerpt: "Therapeutic oil massage for scalp comfort, circulation support and a moment of care." },
  },
  'wp-5516': {
    es: { title: "Chaterapia capilar", excerpt: "Chaterapia como ritual suave de calma y bienestar en el instituto." },
    en: { title: "Tea therapy for hair", excerpt: "Tea therapy as a gentle ritual for calm and wellbeing in the institute." },
  },
  'wp-5510': {
    es: { title: "Musicoterapia", excerpt: "Musicoterapia como herramienta de relajación durante el cuidado capilar." },
    en: { title: "Music therapy", excerpt: "Music therapy as a tool for relaxation during hair and scalp care." },
  },
  'wp-5504': {
    es: { title: "Blends de aceites naturales personalizados", excerpt: "Blends de aceites naturales seleccionados para sus necesidades — nunca una fórmula para todos." },
    en: { title: "Personalised natural oil blends", excerpt: "Natural oil blends selected for your needs — never one formula for everyone." },
  },
  'wp-5498': {
    es: { title: "Alta frecuencia capilar", excerpt: "Alta frecuencia para apoyar la circulación y oxigenación del cuero cuando está indicado." },
    en: { title: "High-frequency scalp treatment", excerpt: "High-frequency care to support scalp circulation and oxygenation when indicated." },
  },
  'wp-5492': {
    es: { title: "LED rojo", excerpt: "LED rojo como apoyo de luz de baja intensidad dentro de un plan personalizado." },
    en: { title: "Red LED therapy", excerpt: "Red LED as low-level light support within a personalised care plan." },
  },
  'wp-5481': {
    es: { title: "Detox del cuero cabelludo", excerpt: "Detox del cuero cuando se siente pesado, irritado o desequilibrado." },
    en: { title: "Scalp detox", excerpt: "Scalp detox when the scalp feels heavy, irritated or out of balance." },
  },
  'wp-5469': {
    es: { title: "Cepillado terapéutico", excerpt: "Cepillado terapéutico: más que alisar — cuidado integrado en su plan." },
    en: { title: "Therapeutic brush-out", excerpt: "Therapeutic brush-out: more than smoothing — care integrated into your plan." },
  },
  'wp-5463': {
    es: { title: "Reposición lipídica", excerpt: "Reposición lipídica para cabello opaco, con frizz, que pide nutrición y brillo." },
    en: { title: "Lipid refill", excerpt: "Lipid refill for dull hair with frizz that needs nourishment and shine." },
  },
  'wp-5455': {
    es: { title: "Reposición hídrica en el cabello", excerpt: "Reposición hídrica para hilos secos y ásperos, sin vida al tacto." },
    en: { title: "Hydration refill for hair", excerpt: "Hydration refill for dry, rough hair that feels lifeless to the touch." },
  },
  'wp-5451': {
    es: { title: "Reconstrucción del hilo", excerpt: "Reconstrucción del hilo para fibra quebradiza que no sostiene fuerza ni forma." },
    en: { title: "Hair reconstruction", excerpt: "Hair reconstruction for brittle fibre that won't hold strength or shape." },
  },
  'wp-5445': {
    es: { title: "Microagujado capilar", excerpt: "Microagujado capilar cuando está indicado — colágeno y mejor absorción de activos." },
    en: { title: "Scalp microneedling", excerpt: "Scalp microneedling when indicated — collagen support and better absorption of actives." },
  },
  'wp-5396': {
    es: { title: "Oleosidad excesiva del cuero: cómo tratarla", excerpt: "Oleosidad excesiva del cuero: causas, hábitos diarios y caminos de cuidado profesional." },
    en: { title: "Excess scalp oiliness: how to treat it", excerpt: "Excess scalp oiliness: causes, daily habits and professional care paths." },
  },
  'wp-5404': {
    es: { title: "Caída capilar: consejos para empezar ya", excerpt: "Consejos de caída para empezar — y cuándo pedir una valoración adecuada." },
    en: { title: "Hair shedding: practical tips to start now", excerpt: "Hair shedding tips to start with — and when to book a proper assessment." },
  },
  'wp-5399': {
    es: { title: "Caspa: consejos fáciles para combatirla ahora", excerpt: "Consejos simples para la caspa — y cuándo el cuero necesita una mirada más cercana." },
    en: { title: "Dandruff: simple tips to tackle it now", excerpt: "Simple dandruff tips — and when the scalp needs a closer look." },
  },
  'wp-5414': {
    es: { title: "Tratamiento de mechas que transforman el cabello", excerpt: "Tratamientos de mechas que respetan la fibra — color con intención y aftercare." },
    en: { title: "Highlight treatments that transform your hair", excerpt: "Highlight treatments that respect the fibre — colour with intention and aftercare." },
  },
}

export function localizeBlogCategory(category: string, locale: AppLocale): string {
  if (locale === 'pt-PT') return category
  const key = locale === 'es' ? 'es' : 'en'
  return blogCategoryI18n[category]?.[key] ?? category
}

export function localizeBlogPostFields<T extends { id: string; title: Partial<Record<AppLocale, string>>; excerpt: Partial<Record<AppLocale, string>>; categories: string[] }>(
  post: T,
  locale: AppLocale,
): T {
  if (locale === 'pt-PT') return post
  const key = locale === 'es' ? 'es' : 'en'
  const copy = blogPostI18n[post.id]?.[key]
  if (!copy) return post
  return {
    ...post,
    title: { ...post.title, [locale]: copy.title },
    excerpt: { ...post.excerpt, [locale]: copy.excerpt },
    categories: post.categories.map((c) => localizeBlogCategory(c, locale)),
  }
}

