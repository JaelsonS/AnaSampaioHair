import Link from 'next/link'
import { defaultUrlLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { localizedPath } from '@/i18n/routes'

export default function NotFound() {
  const dict = getDictionary(defaultUrlLocale)
  return (
    <section className="section blog-hero">
      <div className="container prose">
        <h1 className="display-lg">{dict.notFound.title}</h1>
        <p className="lead">{dict.notFound.lead}</p>
        <Link className="btn btn-primary" href={localizedPath(defaultUrlLocale, 'home')}>
          {dict.notFound.cta}
        </Link>
      </div>
    </section>
  )
}
