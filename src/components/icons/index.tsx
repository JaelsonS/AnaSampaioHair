import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { title?: string }

function IconBase({ title, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

/** Brand mark inspired by leaf + follicle emblem */
export function IconBrandMark(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21c-4.2-2.4-7-5.8-7-10.2C5 6.2 8.1 3 12 3s7 3.2 7 7.8c0 4.4-2.8 7.8-7 10.2Z" />
      <path d="M12 8.2v8.2" />
      <path d="M12 16.4c-.9.6-1.7.7-2.4.4" />
      <path d="M10.2 10.5c1.2-1.6 2.4-2.2 3.6-1.8" />
      <path d="M9.5 13.2c1.4-.2 2.6.2 3.5 1.1" />
    </IconBase>
  )
}

export function IconScissors(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="6.5" cy="17.5" r="2.5" />
      <path d="M20 4 9.2 12" />
      <path d="M20 20 9.2 12" />
      <path d="M14.2 9.5 18 7.2" />
      <path d="M14.2 14.5 18 16.8" />
    </IconBase>
  )
}

export function IconSpark(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5v3.2" />
      <path d="M12 17.3v3.2" />
      <path d="M3.5 12h3.2" />
      <path d="M17.3 12h3.2" />
      <path d="m6.2 6.2 2.2 2.2" />
      <path d="m15.6 15.6 2.2 2.2" />
      <path d="m17.8 6.2-2.2 2.2" />
      <path d="m8.4 15.6-2.2 2.2" />
      <circle cx="12" cy="12" r="2.4" />
    </IconBase>
  )
}

export function IconDroplet(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5c2.8 3.4 6 6.8 6 10.2a6 6 0 1 1-12 0c0-3.4 3.2-6.8 6-10.2Z" />
      <path d="M10 14.2c.4 1.4 1.4 2.2 2.6 2.2" />
    </IconBase>
  )
}

export function IconLeaf(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 19c6-1 10-5 12-12 0 0-7-.5-12 6-1.5 2-1.8 4.5 0 6Z" />
      <path d="M9.5 14.5c1.5-1.2 3.2-2 5.2-2.4" />
    </IconBase>
  )
}

export function IconHeartPulse(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.6 12 20 12 20Z" />
      <path d="M8.2 12.2h2.1l1.1-2.2 1.4 4 1.2-1.8H15.8" />
    </IconBase>
  )
}

export function IconCalendar(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M8 3.5v3" />
      <path d="M16 3.5v3" />
      <path d="M3.5 10h17" />
      <path d="M8.5 14h2" />
      <path d="M13.5 14h2" />
      <path d="M8.5 17h2" />
    </IconBase>
  )
}

export function IconChat(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 18.5 6.2 15A7.5 7.5 0 1 1 9 19.2L5 18.5Z" />
      <path d="M9 11h6" />
      <path d="M9 14h4" />
    </IconBase>
  )
}

export function IconWhatsApp(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.8a8.2 8.2 0 0 0-7 12.5L4 20.2l4-1a8.2 8.2 0 1 0 4-15.4Z" />
      <path d="M9.6 9.2c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .4-.1.5l-.4.5c-.1.1-.1.3 0 .4.4.6 1 1.2 1.7 1.6.2.1.3.1.4 0l.6-.4c.2-.1.4-.1.5 0l1.3.7c.3.1.4.3.3.6-.2.8-1.1 1.4-1.9 1.3-2.3-.2-4.5-2.3-5.4-4.4-.3-.7-.2-1.5.3-2.1Z" />
    </IconBase>
  )
}

export function IconMapPin(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21s6.5-5.2 6.5-10A6.5 6.5 0 0 0 5.5 11c0 4.8 6.5 10 6.5 10Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </IconBase>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8.2 4.5h2.1c.5 0 .9.3 1 .8l.5 2.2c.1.4 0 .8-.3 1.1l-1 1c1.2 2.2 2.9 3.9 5.1 5.1l1-1c.3-.3.7-.4 1.1-.3l2.2.5c.5.1.8.5.8 1v2.1c0 .6-.5 1.1-1.1 1-3.4-.5-6.5-2.3-8.9-4.7S5.3 9.3 4.8 5.9c-.1-.6.4-1.4 1-1.4Z" />
    </IconBase>
  )
}

export function IconMail(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5 8 7 5 7-5" />
    </IconBase>
  )
}

export function IconStar(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden={props.title ? undefined : true}
      role={props.title ? 'img' : undefined}
      {...props}
    >
      {props.title ? <title>{props.title}</title> : null}
      <path d="m12 3.6 2.1 4.8 5.2.5-4 3.5 1.2 5.1L12 15.4 7.5 17.5l1.2-5.1-4-3.5 5.2-.5L12 3.6Z" />
    </svg>
  )
}

/** Official-looking Google “G” mark for review badges */
export function IconGoogle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={props.title ? undefined : true} role={props.title ? 'img' : undefined} {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  )
}

export function IconChevronDown(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  )
}

export function IconClose(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </IconBase>
  )
}

export function IconInstagram(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function IconFacebook(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14.5 20.5v-7h2.4l.4-2.8H14.5V9c0-.8.2-1.4 1.4-1.4H17.2V5.1C16.8 5 15.9 5 14.9 5 12.6 5 11 6.4 11 9v1.7H8.7V13.5H11v7h3.5Z" />
    </IconBase>
  )
}

export function IconFlagPt(props: IconProps) {
  return (
    <svg viewBox="0 0 24 16" width={22} height={15} aria-hidden {...props}>
      <rect width="24" height="16" rx="2" fill="#006600" />
      <rect x="9.5" width="14.5" height="16" fill="#FF0000" />
      <circle cx="9.5" cy="8" r="3.2" fill="#FFCC00" />
      <circle cx="9.5" cy="8" r="1.6" fill="#003399" />
    </svg>
  )
}

export function IconFlagEs(props: IconProps) {
  return (
    <svg viewBox="0 0 24 16" width={22} height={15} aria-hidden {...props}>
      <rect width="24" height="16" rx="2" fill="#AA151B" />
      <rect y="4" width="24" height="8" fill="#F1BF00" />
    </svg>
  )
}

export function IconFlagGb(props: IconProps) {
  return (
    <svg viewBox="0 0 24 16" width={22} height={15} aria-hidden {...props}>
      <rect width="24" height="16" rx="2" fill="#012169" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="3" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="1.4" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2.4" />
    </svg>
  )
}

export function IconCookie(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.8a8.2 8.2 0 1 0 8 9.4 3.4 3.4 0 0 1-4.2-4.2A3.4 3.4 0 0 1 12 3.8Z" />
      <circle cx="9" cy="11" r=".8" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="14.5" r=".8" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="15.8" r=".6" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function IconSearch(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </IconBase>
  )
}

export function IconShield(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5 19 6.5v5.2c0 4.4-3 7.5-7 9.3-4-1.8-7-4.9-7-9.3V6.5L12 3.5Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.8" />
    </IconBase>
  )
}

export function IconAward(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="9" r="5.2" />
      <path d="M8.8 13.2 7 20.2l5-2.2 5 2.2-1.8-7" />
      <path d="M10.2 8.2h3.6" />
      <path d="M12 7v2.8" />
    </IconBase>
  )
}

export function IconTarget(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 4v2.2" />
      <path d="M12 17.8V20" />
      <path d="M4 12h2.2" />
      <path d="M17.8 12H20" />
    </IconBase>
  )
}

export function IconUserStars(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.2c.8-3.2 3-5 6.5-5s5.7 1.8 6.5 5" />
      <path d="m17.2 4.2.6 1.3 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2.6-1.3Z" />
    </IconBase>
  )
}

export function IconHairTool(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 4.5h3.2v9.2A2.6 2.6 0 0 1 7.6 16.3 2.6 2.6 0 0 1 5 13.7V8.2" />
      <path d="M10.2 7.5h2.4" />
      <path d="M10.2 10h2.4" />
      <path d="M14.2 5.2c2.8 0 4.8 1.6 4.8 4.2 0 2.2-1.2 3.4-3.2 4.2L14 20" />
      <path d="M15.8 13.6 14 20" />
    </IconBase>
  )
}

export function IconClock(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3.2 1.8" />
    </IconBase>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="m8.2 12.2 2.4 2.4 5.2-5.2" />
    </IconBase>
  )
}

export function IconList(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 7h10" />
      <path d="M9 12h10" />
      <path d="M9 17h10" />
      <circle cx="5" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="17" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function IconGraduation(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m3.5 10 8.5-4.5L20.5 10 12 14.5 3.5 10Z" />
      <path d="M7.2 12v4.2c0 .8 2.1 2.3 4.8 2.3s4.8-1.5 4.8-2.3V12" />
      <path d="M20.5 10v5.2" />
    </IconBase>
  )
}

export function IconUsers(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="8.5" r="2.8" />
      <path d="M3.8 18.5c.7-2.8 2.6-4.3 5.2-4.3s4.5 1.5 5.2 4.3" />
      <circle cx="16.2" cy="9.2" r="2.3" />
      <path d="M14.5 14.4c1.8.2 3.3 1.3 4 3.6" />
    </IconBase>
  )
}

export function IconBookOpen(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 6.5c-2-1.6-4.6-2.2-7.2-2v11.2c2.6-.2 5.2.4 7.2 2" />
      <path d="M12 6.5c2-1.6 4.6-2.2 7.2-2v11.2c-2.6-.2-5.2.4-7.2 2" />
      <path d="M12 6.5v11.2" />
    </IconBase>
  )
}

export function IconHairStrand(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 20.5c-1.2-2.4-2-5.2-2-8.2 0-3.4 1-6.2 2-8.8" />
      <path d="M12 20.5c1.2-2.4 2-5.2 2-8.2 0-3.4-1-6.2-2-8.8" />
      <path d="M10 12.5c-1.4.4-2.6 1.4-3.2 2.8" />
      <path d="M14 12.5c1.4.4 2.6 1.4 3.2 2.8" />
    </IconBase>
  )
}

export function IconAssistant(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="7" width="14" height="11" rx="3" />
      <path d="M9 7V5.8A3 3 0 0 1 12 2.8 3 3 0 0 1 15 5.8V7" />
      <circle cx="9.5" cy="12.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12.2" r="1" fill="currentColor" stroke="none" />
      <path d="M9.5 15.2h5" />
    </IconBase>
  )
}
