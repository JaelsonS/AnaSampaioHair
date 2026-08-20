import { locales, defaultUrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'

export default function GlobalNotFound() {
  const dict = getDictionary(defaultUrlLocale)
  return (
    <html lang="pt-PT">
      <body>
        <main className="container" style={{ padding: '4rem 1rem' }}>
          <h1>{dict.notFound.title}</h1>
          <p>{dict.notFound.lead}</p>
          <a href={localizedPath(defaultUrlLocale, 'home')}>{dict.notFound.cta}</a>
          <p>
            {locales.map((l) => (
              <a key={l} href={`/${l}`} style={{ marginRight: 12 }}>
                {l.toUpperCase()}
              </a>
            ))}
          </p>
        </main>
      </body>
    </html>
  )
}
