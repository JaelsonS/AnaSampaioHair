import { Seo } from '@/components/shared/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { FaqSection } from '@/components/home/FaqSection'
import { FinalCta } from '@/components/home/FinalCta'

export function FaqPage() {
  return (
    <>
      <Seo
        title="Perguntas frequentes"
        description="Dúvidas sobre terapia capilar, avaliação e serviços da Ana Sampaio Hair."
        path="/faq"
      />
      <PageHero
        eyebrow="Perguntas"
        title="O que as pessoas mais perguntam"
        lead="Respostas claras, sem rodeios — e se ficar alguma dúvida, fale connosco."
        image="/images/need-discover.jpg"
        imageAlt="FAQ"
        ctaLabel="Ainda tenho dúvidas — falar com a Ana"
      />
      <FaqSection />
      <FinalCta />
    </>
  )
}
