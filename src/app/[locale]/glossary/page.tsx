import { redirect } from 'next/navigation'
import { isUrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'

/**
 * Glossário → Blog: terms will become useful editorial content inside the blog,
 * not a thin definition dump. Index redirects to the content hub.
 */
export default async function GlossaryRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) redirect('/pt/blog')
  redirect(localizedPath(raw, 'blog'))
}
