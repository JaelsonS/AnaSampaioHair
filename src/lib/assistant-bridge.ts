export type AssistantIntent = {
  mode?: 'gate' | 'book' | 'human' | 'service'
  topic?: string
  serviceName?: string
}

export const ASSISTANT_EVENT = 'ash:open-assistant'

export function openAssistantIntent(intent: AssistantIntent = { mode: 'gate' }) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(ASSISTANT_EVENT, { detail: intent }))
}
