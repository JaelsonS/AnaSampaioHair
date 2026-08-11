import { siteConfig } from '@/config/site'
import { GoogleIcon } from '@/components/shared/SocialIcons'
import { Button } from '@/components/ui/Button'

export function GoogleReviewCard() {
  return (
    <div className="google-review-card">
      <div>
        <p className="eyebrow">A sua opinião importa</p>
        <h3 className="display-md">Avalie-nos no Google</h3>
        <p>
          Partilhe a sua experiência no Google: escolha as estrelas e deixe um comentário sobre o
          atendimento e os serviços do instituto.
        </p>
      </div>
      <Button
        as="a"
        href={siteConfig.google.reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="light"
        className="google-review-btn"
      >
        <GoogleIcon />
        Avaliar no Google
      </Button>
    </div>
  )
}
