import { notFound, redirect } from 'next/navigation'
import { isUrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import {
  TREATMENT_DETAIL_PAGES_ENABLED,
  getTreatmentPriority,
} from '@/data/treatment-priority'
import { getServiceBySlug } from '@/data/services'

/**
 * Architecture ready for rich treatment pages.
 * Individual pages stay disabled until TOP 8 is validated (Phase 3).
 */
export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: raw, slug } = await params
  if (!isUrlLocale(raw)) notFound()

  if (!TREATMENT_DETAIL_PAGES_ENABLED) {
    redirect(localizedPath(raw, 'treatments'))
  }

  const service = getServiceBySlug(slug)
  const priority = service ? getTreatmentPriority(service.id) : null
  if (!service || !priority || priority.tier !== 'wave1') {
    notFound()
  }

  // Phase 3 will render the rich template here.
  notFound()
}
