import { notFound } from 'next/navigation'
import { isUrlLocale, type UrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { HomePage } from '@/components/home/HomePage'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const locale = raw as UrlLocale
  const dict = getDictionary(locale)
  return <HomePage locale={locale} dict={dict} />
}
