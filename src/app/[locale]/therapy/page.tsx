import { redirect } from 'next/navigation'
import { isUrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'

/** Terapia Capilar merged into Tratamentos hub (#terapia). */
export default async function TherapyRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) redirect('/pt/tratamentos')
  redirect(`${localizedPath(raw, 'treatments')}#terapia`)
}
