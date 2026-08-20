import { redirect } from 'next/navigation'
import { isUrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'

/** Resultados → Sobre (prova social integrada na narrativa institucional). */
export default async function ResultsRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) redirect('/pt/sobre')
  redirect(localizedPath(raw, 'about'))
}
