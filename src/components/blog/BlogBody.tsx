import Link from 'next/link'
import type { BodyBlock } from '@/lib/blog/parse-body'
import type { UrlLocale } from '@/i18n/config'
import { localizedPath } from '@/i18n/routes'
import { getOfferByKind } from '@/data/offers'
import { toAppLocale } from '@/i18n/config'
import { linkifyBlogText } from '@/lib/blog/enrich-body'
import { IconCheck, IconSpark } from '@/components/icons'
import { softenAiOpeners } from '@/lib/blog/soften-copy'

function isTakeawaysHeading(text: string) {
  return /principais (conclus|aprend)/i.test(text) || /destaques importantes/i.test(text)
}

export function BlogBody({
  blocks,
  locale,
}: {
  blocks: BodyBlock[]
  locale: UrlLocale
}) {
  const app = toAppLocale(locale)
  const ebook = getOfferByKind('ebook')
  const mid = Math.max(3, Math.floor(blocks.length * 0.45))
  let takeawaysNext = false

  return (
    <div className="article-body article-body-journal">
      {blocks.map((block, i) => {
        const node = (() => {
          switch (block.type) {
            case 'audio':
              return (
                <figure className="blog-audio">
                  <figcaption>
                    <IconSpark width={16} height={16} aria-hidden /> Ouça este artigo
                  </figcaption>
                  <audio controls preload="none" src={block.url}>
                    <a href={block.url}>Áudio do artigo</a>
                  </audio>
                </figure>
              )
            case 'h2': {
              takeawaysNext = isTakeawaysHeading(block.text)
              return <h2 id={block.id}>{block.text}</h2>
            }
            case 'h3': {
              takeawaysNext = isTakeawaysHeading(block.text)
              return <h3 id={block.id}>{block.text}</h3>
            }
            case 'ul': {
              const takeaways = takeawaysNext
              takeawaysNext = false
              return (
                <ul className={takeaways ? 'article-list article-list-takeaways' : 'article-list'}>
                  {block.items.map((item) => (
                    <li key={item}>
                      {takeaways ? (
                        <span className="article-list-icon" aria-hidden>
                          <IconCheck width={16} height={16} />
                        </span>
                      ) : null}
                      <span>{linkifyBlogText(item, locale)}</span>
                    </li>
                  ))}
                </ul>
              )
            }
            case 'faq':
              return (
                <div className="blog-faq">
                  {block.items.map((item) => (
                    <details key={item.q} className="faq-item">
                      <summary>
                        {item.q}
                        <span aria-hidden>+</span>
                      </summary>
                      <p>{linkifyBlogText(item.a, locale)}</p>
                    </details>
                  ))}
                </div>
              )
            case 'table':
              return (
                <div className="article-table-wrap">
                  <table className="article-table">
                    <thead>
                      <tr>
                        {block.headers.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (
                            <td key={ci}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            default:
              return <p>{linkifyBlogText(softenAiOpeners(block.text), locale)}</p>
          }
        })()

        return (
          <div key={i}>
            {node}
            {i === mid ? (
              <aside className="article-inline-cta" key={`cta-${i}`}>
                <p className="eyebrow">Próximo passo</p>
                <h3 className="display-md" style={{ fontSize: '1.45rem' }}>
                  Quer um plano feito para o seu cabelo?
                </h3>
                <p>
                  Peça avaliação no instituto ou explore o e-book e as formações da Ana Sampaio — conteúdos
                  práticos para cuidar em casa e evoluir na profissão.
                </p>
                <div className="btn-group">
                  <Link className="btn btn-primary" href={localizedPath(locale, 'booking')}>
                    Pedir avaliação
                  </Link>
                  {ebook?.externalUrl ? (
                    <a
                      className="btn btn-secondary"
                      href={ebook.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ebook.cta[app] ?? 'E-book'}
                    </a>
                  ) : null}
                  <Link className="btn btn-ghost" href={localizedPath(locale, 'courses')}>
                    Lista da próxima turma
                  </Link>
                </div>
              </aside>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
