import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { BenefitsSection } from '@/components/benefits-section'
import { BeforeSurgerySection } from '@/components/before-surgery-section'
import { ResearchSection } from '@/components/research-section'
import { SuitabilitySection } from '@/components/suitability-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TrustSection } from '@/components/trust-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <BeforeSurgerySection />
        <ResearchSection />
        <SuitabilitySection />
        <HowItWorksSection />
        <TrustSection />
        <FaqSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
