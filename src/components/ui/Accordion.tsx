import { useId, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type AccordionItem = {
  id: string
  title: ReactNode
  subtitle?: ReactNode
  content: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  type?: 'faq' | 'problem'
  allowMultiple?: boolean
}

function AccordionList({ items, type = 'faq', allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([])
  const baseId = useId()

  function toggle(id: string) {
    setOpenIds((current) => {
      const isOpen = current.includes(id)
      if (allowMultiple) {
        return isOpen ? current.filter((item) => item !== id) : [...current, id]
      }
      return isOpen ? [] : [id]
    })
  }

  const itemClass = type === 'faq' ? 'faq-item' : 'problem-item'
  const triggerClass = type === 'faq' ? 'faq-trigger' : 'problem-trigger'
  const panelClass = type === 'faq' ? 'faq-panel' : 'problem-panel'
  const panelInnerClass = type === 'faq' ? 'faq-panel-inner' : 'problem-panel-inner'
  const listClass = type === 'faq' ? 'faq-list' : 'problems-list'

  return (
    <div className={listClass}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        const panelId = `${baseId}-${item.id}-panel`
        const buttonId = `${baseId}-${item.id}-button`

        return (
          <div key={item.id} className={cn(itemClass, isOpen && 'is-open')}>
            <button
              id={buttonId}
              type="button"
              className={triggerClass}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
            >
              <span>
                <strong>{item.title}</strong>
                {item.subtitle ? <span style={{ display: 'block' }}>{item.subtitle}</span> : null}
              </span>
              <span className="icon" aria-hidden="true">
                +
              </span>
            </button>
            <div className={panelClass} id={panelId} role="region" aria-labelledby={buttonId}>
              <div className={panelInnerClass}>
                {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function Accordion(props: AccordionProps) {
  const resetKey = props.items.map((item) => item.id).join('|')
  return <AccordionList key={resetKey} {...props} />
}
