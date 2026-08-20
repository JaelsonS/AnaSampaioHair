import { notFound } from 'next/navigation'
import { isUrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export default async function ComplimentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const dict = getDictionary(raw)
  return (
    <Section className="blog-hero">
      <h1 className="display-lg">{dict.nav.compliments}</h1>
      <Button href={siteConfig.legal.complimentsBookUrl}>{dict.nav.compliments}</Button>
    </Section>
  )
}
