import { Link } from 'react-router-dom'
import { blogPosts } from '@/data/blog'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function BlogPreview({ limit = 3 }: { limit?: number }) {
  const posts = blogPosts.slice(0, limit)

  return (
    <section className="section" aria-labelledby="blog-title">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading
            eyebrow="Dicas"
            title={<span id="blog-title">Para ler com calma — e cuidar melhor</span>}
            lead="Pequenos textos para perceber o seu cabelo. Sem complicação."
          />
          <Button as="link" to="/blog" variant="secondary">
            Ver todas as dicas
          </Button>
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
                  <span>{post.dateLabel}</span>
                </div>
                <h3>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
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
  )
}
