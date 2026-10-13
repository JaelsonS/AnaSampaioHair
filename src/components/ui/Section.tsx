import { cn } from '@/lib/utils'

export function Section({
  children,
  className,
  dark,
  tight,
  id,
}: {
  children: React.ReactNode
  className?: string
  dark?: boolean
  tight?: boolean
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        tight ? 'section-tight' : 'section',
        dark && 'section-dark',
        className,
      )}
    >
      <div className="container">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  titleLines,
  lead,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  /** Duas linhas fixas — evita quebra feia em títulos longos. */
  titleLines?: [string, string]
  lead?: string
  align?: 'left' | 'center'
}) {
  return (
    <header className={cn('section-head', align === 'center' && 'section-head-center')}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {titleLines ? (
        <h2 className="display-lg display-lg-split">
          <span className="display-lg-split-line">{titleLines[0]}</span>
          <span className="display-lg-split-line">{titleLines[1]}</span>
        </h2>
      ) : (
        <h2 className="display-lg">{title}</h2>
      )}
      {lead ? <p className="lead">{lead}</p> : null}
    </header>
  )
}
