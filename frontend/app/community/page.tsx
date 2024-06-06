import dynamic from "next/dynamic";
import { Hero } from "@/components/shared/Hero";
import { SocialProofSection } from "@/components/templates/SocialProofSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { community } from "@/content/community";
import { CommunitySection } from "@/components/templates/CommunitySection";
import { Cta } from "@/components/shared/Cta";
import { DirectorySection } from "@/components/templates/DirectorySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Rocket Connect",
  description: "We connect people through open source.",
};

const LazyMap = dynamic(() => import("@/components/templates/MapSection"), {
  ssr: false,
  loading: () => <p className="mt-5">Loading...</p>,
});

export default function Community() {
  return (
    <Main>
      <Header />
      <Hero content={community.hero} cta={true} />
      <LazyMap content={community.activity} />
      <DirectorySection content={community.directory} />
      <CommunitySection content={community.featuredVideos} />
      <SocialProofSection />
      <Cta />
      <Footer />
    </Main>
  );
}
