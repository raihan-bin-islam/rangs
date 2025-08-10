import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CompanyInfo } from "@/components/company-info";
import { MissionSection } from "@/components/mission-section";
import { ProductsSection } from "@/components/products-section";
import { NewsSection } from "@/components/news-section";
import { MomentsSection } from "@/components/moments-section";
import { TeamSection } from "@/components/team-section";
import { PartnersSection } from "@/components/partners-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <HeroSection />
      <CompanyInfo />
      <MissionSection />
      <ProductsSection />
      <NewsSection />
      <MomentsSection />
      <TeamSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
