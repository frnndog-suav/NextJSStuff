import { SupportSection } from "@/src/components/support-section";
import { CustomerStorySection, FeatureSection, HeroSection } from "./sections";

export function LandingPage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
    </article>
  );
}
