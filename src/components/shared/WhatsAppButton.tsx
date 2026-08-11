import { openWhatsApp } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/shared/SocialIcons'

export function WhatsAppButton() {
  return (
    <button
      type="button"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp com a Ana"
      onClick={() =>
        openWhatsApp(
          'Olá Ana! Eu estava no seu site e gostaria de saber a sua disponibilidade para uma avaliação. Pode dizer-me quando tem horário?',
        )
      }
    >
      <WhatsAppIcon />
    </button>
  )
}
