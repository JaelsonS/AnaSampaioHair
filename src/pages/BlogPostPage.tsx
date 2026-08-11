import { Link, useParams } from 'react-router-dom'
import { Seo } from '@/components/shared/Seo'
import { getPostBySlug } from '@/data/blog'
import { PageHero } from '@/components/layout/PageHero'
import { BookingButton, Button } from '@/components/ui/Button'

export function BlogPostPage() {
  const { slug = '' } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section className="page-hero">
        <div className="container">
          <h1 className="display-xl">Artigo não encontrado</h1>
          <p className="lead">Este conteúdo pode ter sido movido. Veja as dicas disponíveis.</p>
          <Button as="link" to="/blog" style={{ marginTop: '1.5rem' }}>
            Voltar às dicas
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.seoDescription}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <PageHero
        eyebrow={post.categoryLabel}
        title={post.title}
        lead={post.excerpt}
        image={post.image}
        imageAlt={post.imageAlt}
        ctaLabel="Quero falar disto com a Ana"
      />

      <article>
        <div className="container-narrow" style={{ paddingTop: '3rem' }}>
          <p className="blog-meta">
            <time dateTime={post.date}>{post.dateLabel}</time>
          </p>
          <div className="article-body">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="btn-group" style={{ margin: '2.5rem 0 4rem' }}>
            <BookingButton label="Agendar com a Ana" />
            <Button as="link" to="/blog" variant="secondary">
              Mais dicas
            </Button>
          </div>
          <p style={{ marginBottom: '4rem' }}>
            <Link className="text-link" to="/blog">
              ← Voltar às dicas
            </Link>
          </p>
        </div>
      </article>
    </>
  )
}
