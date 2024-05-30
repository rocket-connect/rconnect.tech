import { CommunitySection } from "@/components/templates/CommunitySection";
import { Hero } from "@/components/shared/Hero";
import { ServicesSection } from "@/components/templates/ServicesSection";
import { SocialProofSection } from "@/components/templates/SocialProofSection";
import { Cta } from "@/components/shared/Cta";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { home } from "@/content/home";

export default function Home() {
  return (
    <Main>
      <Header />
      <Hero content={home.hero} cta={true} />
      <SocialProofSection />
      <ServicesSection content={home.services} />
      <CommunitySection content={home.community} />
      <Cta />
      <Footer />
    </Main>
  );
}
