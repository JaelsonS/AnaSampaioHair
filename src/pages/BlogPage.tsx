import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/shared/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { blogCategories, blogPosts, type BlogCategory } from '@/data/blog'
import { Reveal } from '@/components/ui/Reveal'

export function BlogPage() {
  const [category, setCategory] = useState<BlogCategory | 'todos'>('todos')

  const posts = useMemo(() => {
    if (category === 'todos') return blogPosts
    return blogPosts.filter((post) => post.category === category)
  }, [category])

  return (
    <>
      <Seo
        title="Dicas de cabelo"
        description="Dicas humanas sobre cuidados, terapia, mechas e saúde do couro cabeludo."
        path="/blog"
      />
      <PageHero
        eyebrow="Dicas da Ana"
        title="Para perceber melhor o seu cabelo"
        lead="Textos simples, feitos para ajudar — não para confundir. Leia, respire e, se quiser, marque uma conversa."
        image="/images/hidratacao.jpg"
        imageAlt="Dicas capilares"
        ctaLabel="Prefiro falar com a Ana"
      />

      <section className="section">
        <div className="container">
          <div className="gallery-filters" role="group" aria-label="Filtrar por tema">
            <button
              type="button"
              className="filter-chip"
              aria-pressed={category === 'todos'}
              onClick={() => setCategory('todos')}
            >
              Todas
            </button>
            {blogCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                className="filter-chip"
                aria-pressed={category === item.id}
                onClick={() => setCategory(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {posts.map((post, index) => (
              <Reveal key={post.id} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                <article className="blog-card">
                  <Link to={`/blog/${post.slug}`} className="media-frame">
                    <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" />
                  </Link>
                  <div className="blog-meta">
                    <span>{post.categoryLabel}</span>
                    <time dateTime={post.date}>{post.dateLabel}</time>
                  </div>
                  <h2 className="display-md">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.excerpt}</p>
                  <Link className="text-link" to={`/blog/${post.slug}`}>
                    Ler →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
