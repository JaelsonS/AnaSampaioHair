export type NavItem = {
  label: string
  href: string
}

/** Menu principal — essenciais, com Início. */
export const mainNav: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Terapia', href: '/terapia-capilar' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Contacto', href: '/contacto' },
]

export const footerNav: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Terapia Capilar', href: '/terapia-capilar' },
  { label: 'Sobre Ana', href: '/sobre' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Dicas', href: '/blog' },
  { label: 'Perguntas', href: '/faq' },
  { label: 'Contacto', href: '/contacto' },
]

export const legalNav: NavItem[] = [
  { label: 'Privacidade', href: '/politica-de-privacidade' },
  { label: 'Cookies', href: '/politica-de-cookies' },
  { label: 'Termos', href: '/termos-de-utilizacao' },
  { label: 'Livro de Reclamações', href: '/livro-de-reclamacoes' },
  { label: 'Livro de Elogios', href: '/livro-de-elogios' },
]
