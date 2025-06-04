import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "../components/Footer";


export default function Home() {
  return (
    <main id="home">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <PortfolioSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
