import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'ghost'

type BaseProps = {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    as?: 'button'
  }

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    as: 'a'
    href: string
  }

type ButtonAsLink = BaseProps & {
  as: 'link'
  to: string
  style?: CSSProperties
}

export function Button(props: ButtonAsButton | ButtonAsAnchor | ButtonAsLink) {
  const classes = cn('btn', `btn-${props.variant ?? 'primary'}`, props.className)

  if (props.as === 'a') {
    const { children, className: _c, variant: _v, as: _a, ...rest } = props
    void _c
    void _v
    void _a
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    )
  }

  if (props.as === 'link') {
    return (
      <Link className={classes} to={props.to} style={props.style}>
        {props.children}
      </Link>
    )
  }

  const { children, className: _c, variant: _v, as: _a, type, ...rest } = props
  void _c
  void _v
  void _a
  return (
    <button type={type ?? 'button'} className={classes} {...rest}>
      {children}
    </button>
  )
}

export { BookingButton } from '@/components/ui/BookingButton'
