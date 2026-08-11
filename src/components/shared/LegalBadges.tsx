import { siteConfig } from '@/config/site'
import { LivroElogiosBadge, LivroReclamacoesBadge } from '@/components/shared/LegalBookBadges'

export function LegalBadges() {
  return (
    <div className="legal-badges" aria-label="Livros oficiais">
      <a
        className="legal-badge"
        href={siteConfig.legal.complaintsBookUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LivroReclamacoesBadge />
        <span className="sr-only">Abrir Livro de Reclamações eletrónico</span>
      </a>
      <a
        className="legal-badge"
        href={siteConfig.legal.complimentsBookUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LivroElogiosBadge />
        <span className="sr-only">Abrir Livro de Elogios</span>
      </a>
    </div>
  )
}
