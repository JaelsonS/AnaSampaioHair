import { Seo } from '@/components/shared/Seo'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { HairNeeds } from '@/components/home/HairNeeds'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { TherapyPreview } from '@/components/home/TherapyPreview'
import { Problems } from '@/components/home/Problems'
import { Treatments } from '@/components/home/Treatments'
import { MechasHighlight, EvaluationBlock } from '@/components/home/MechasHighlight'
import { AboutAna } from '@/components/home/AboutAna'
import { Experience } from '@/components/home/Experience'
import { HealthPlan, Ebook } from '@/components/home/HealthPlan'
import { Gallery } from '@/components/home/Gallery'
import { Instagram } from '@/components/home/Instagram'
import { FaqSection } from '@/components/home/FaqSection'
import { BlogPreview } from '@/components/home/BlogPreview'
import { ContactSection } from '@/components/home/ContactSection'
import { FinalCta } from '@/components/home/FinalCta'

export function HomePage() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <TrustBar />
      <HairNeeds />
      <ServicesPreview />
      <TherapyPreview />
      <Problems />
      <Treatments />
      <MechasHighlight />
      <EvaluationBlock />
      <AboutAna />
      <Experience />
      <HealthPlan />
      <Ebook />
      <Gallery />
      <Instagram />
      <FaqSection limit={5} />
      <BlogPreview />
      <ContactSection />
      <FinalCta />
    </>
  )
}
