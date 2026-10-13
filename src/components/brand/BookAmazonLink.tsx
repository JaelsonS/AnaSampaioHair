import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const BOOK = siteConfig.commerce.bookRaizesAsas

type Props = {
  children?: ReactNode
  className?: string
}

/** Link de afiliado Amazon — livro Raízes e Asas (URL única em siteConfig). */
export function BookAmazonLink({ children, className }: Props) {
  return (
    <a
      href={BOOK.amazonUrl}
      className={cn('book-amazon-link', className)}
      target="_blank"
      rel="noopener noreferrer sponsored"
    >
      {children ?? BOOK.title}
    </a>
  )
}

/** Texto corrido com o título do livro transformado em link Amazon. */
export function textWithBookAmazonLink(text: string) {
  const title = BOOK.title
  const idx = text.indexOf(title)
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <BookAmazonLink>{title}</BookAmazonLink>
      {text.slice(idx + title.length)}
    </>
  )
}
