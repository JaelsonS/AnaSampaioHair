import { Seo } from '@/components/shared/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { Gallery } from '@/components/home/Gallery'
import { FinalCta } from '@/components/home/FinalCta'

export function ResultsPage() {
  return (
    <>
      <Seo
        title="Resultados"
        description="Antes e depois e resultados de mechas, cor, corte e terapia na Ana Sampaio Hair."
        path="/resultados"
      />
      <PageHero
        eyebrow="Resultados"
        title="Histórias que se vêem no espelho"
        lead="Mechas, cor, cortes e recuperações — com o cuidado que cada cabelo pediu."
        image="/images/movimento.jpg"
        imageAlt="Resultados"
        ctaLabel="Quero o meu resultado"
      />
      <Gallery showAllLink={false} />
      <FinalCta />
    </>
  )
}
