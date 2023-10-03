import AboutSection from "@/components/landing/AboutSection"
import ContactSection from "@/components/landing/ContactSection"
import FeatureSection from "@/components/landing/FeatureSection"
import HeroSection from "@/components/landing/HeroSection"
import PricingSection from "@/components/landing/PricingSection"
import TestimonialSection from "@/components/landing/TestimonialSection"

export default function IndexPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
    </main>
  )
}
