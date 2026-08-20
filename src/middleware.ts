import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultUrlLocale, isUrlLocale, type UrlLocale } from '@/i18n/config'
import { routeSegments, type PathKey } from '@/i18n/routes'

/** Public localized segment → internal folder name (PathKey except home) */
const internalFolders: Record<Exclude<PathKey, 'home'>, string> = {
  services: 'services',
  treatments: 'treatments',
  therapy: 'therapy',
  about: 'about',
  products: 'products',
  blog: 'blog',
  glossary: 'glossary',
  testimonials: 'testimonials',
  results: 'results',
  contact: 'contact',
  booking: 'booking',
  faq: 'faq',
  courses: 'courses',
  terms: 'terms',
  privacy: 'privacy',
  cookies: 'cookies-policy',
  cancellation: 'cancellation',
  bookingPolicy: 'booking-policy',
  purchasePolicy: 'purchase-policy',
  complaints: 'complaints',
  compliments: 'compliments',
}

function resolvePathKey(locale: UrlLocale, segment: string): PathKey | null {
  const entry = Object.entries(routeSegments).find(
    ([key, map]) => key !== 'home' && map[locale] === segment,
  )
  return (entry?.[0] as PathKey) ?? null
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultUrlLocale}`, request.url))
  }

  const parts = pathname.split('/').filter(Boolean)
  const localePart = parts[0]

  if (!isUrlLocale(localePart)) {
    return NextResponse.next()
  }

  const locale = localePart as UrlLocale
  const publicSegment = parts[1]

  if (!publicSegment) {
    return NextResponse.next()
  }

  const pathKey = resolvePathKey(locale, publicSegment)
  if (!pathKey || pathKey === 'home') {
    return NextResponse.next()
  }

  const internal = internalFolders[pathKey]
  const rest = parts.slice(2).join('/')
  const rewritePath = rest
    ? `/${locale}/${internal}/${rest}`
    : `/${locale}/${internal}`

  // Only rewrite when public slug differs from internal folder
  if (publicSegment === internal) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = rewritePath
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\..*).*)'],
}
