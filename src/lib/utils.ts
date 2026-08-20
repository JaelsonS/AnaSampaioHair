export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function formatYear(date = new Date()) {
  return date.getFullYear()
}

export function estimateReadingMinutes(text: string, wpm = 200) {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / wpm))
}
