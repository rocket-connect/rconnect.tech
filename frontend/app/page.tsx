import { CommunitySection } from "@/components/CommunitySection";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { Cta } from "@/components/shared/Cta";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { home } from "@/content/home";

export default function Home() {
  return (
    <Main>
      <Header />
      <Hero content={home.hero} />
      <SocialProofSection content={home.socialProof} />
      <ServicesSection content={home.services} />
      <CommunitySection content={home.community} />
      <Cta />
      <Footer />
    </Main>
  );
}
