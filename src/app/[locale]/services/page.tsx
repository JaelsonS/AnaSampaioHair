import { redirect } from 'next/navigation'
import { isUrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'

/** Serviços merged into Tratamentos hub — permanent redirect. */
export default async function ServicesRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) redirect('/pt/tratamentos')
  redirect(localizedPath(raw, 'treatments'))
}
