import { notFound } from 'next/navigation'
import { isUrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export default async function ComplaintsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  if (!isUrlLocale(raw)) notFound()
  const dict = getDictionary(raw)
  return (
    <Section className="blog-hero">
      <h1 className="display-lg">{dict.nav.complaints}</h1>
      <p className="lead">Livro de Reclamações eletrónico (Portugal).</p>
      <Button href={siteConfig.legal.complaintsBookUrl}>{dict.nav.complaints}</Button>
    </Section>
  )
}
