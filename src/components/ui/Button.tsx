import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'on-dark' | 'ghost-on-dark'

const variants: Record<Variant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn btn-ghost',
  'on-dark': 'btn btn-on-dark',
  'ghost-on-dark': 'btn btn-ghost btn-ghost-on-dark',
}

type ButtonProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>)
  | ({ href?: undefined } & ComponentProps<'button'>)
)

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = cn(variants[variant], className)
  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  const buttonProps = props as ComponentProps<'button'>
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
