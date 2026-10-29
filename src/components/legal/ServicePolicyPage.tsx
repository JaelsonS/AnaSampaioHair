import Link from 'next/link'
import type { UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { servicePolicies, type ServicePolicyKey } from '@/data/legal/service-policies'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export function ServicePolicyPage({
  locale,
  policyKey,
}: {
  locale: UrlLocale
  policyKey: ServicePolicyKey
}) {
  const doc = servicePolicies[policyKey][locale]

  return (
    <Section className="blog-hero">
      <article className="prose legal-prose-simple" style={{ paddingTop: '2rem', maxWidth: '48rem' }}>
        <h1 className="display-lg">{doc.title}</h1>
        {doc.paragraphs.map((text) => (
          <p key={text.slice(0, 48)}>{text}</p>
        ))}
        <div className="btn-group" style={{ marginTop: '1.5rem' }}>
          <Button href={localizedPath(locale, 'terms')} variant="secondary">
            {locale === 'en' ? 'Terms of Use' : locale === 'es' ? 'Términos' : 'Termos'}
          </Button>
          <Button href={localizedPath(locale, 'contact')}>
            {locale === 'en' ? 'Contact' : 'Contacto'}
          </Button>
        </div>
        <p style={{ marginTop: '1.25rem', fontSize: '0.95rem' }}>
          <Link href={localizedPath(locale, 'privacy')}>
            {locale === 'en' ? 'Privacy Policy' : locale === 'es' ? 'Privacidad' : 'Privacidade'}
          </Link>
          {' · '}
          <Link href={localizedPath(locale, 'cookies')}>Cookies</Link>
        </p>
      </article>
    </Section>
  )
}
