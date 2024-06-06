import { CommunitySection } from "@/src/components/templates/CommunitySection";
import { Hero } from "@/src/components/shared/Hero";
import { ServicesSection } from "@/src/components/templates/ServicesSection";
import { SocialProofSection } from "@/src/components/templates/SocialProofSection";
import { Cta } from "@/src/components/shared/Cta";
import { Footer } from "@/src/components/shared/Footer";
import { Header } from "@/src/components/shared/Header";
import { Main } from "@/src/components/shared/Main";
import { home } from "@/src/content/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rocket Connect",
  description: "We connect people through open source.",
};

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
