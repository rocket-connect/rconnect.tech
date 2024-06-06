import dynamic from "next/dynamic";
import { Hero } from "@/src/components/shared/Hero";
import { SocialProofSection } from "@/src/components/templates/SocialProofSection";
import { Footer } from "@/src/components/shared/Footer";
import { Header } from "@/src/components/shared/Header";
import { Main } from "@/src/components/shared/Main";
import { community } from "@/src/content/community";
import { CommunitySection } from "@/src/components/templates/CommunitySection";
import { Cta } from "@/src/components/shared/Cta";
import { DirectorySection } from "@/src/components/templates/DirectorySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Rocket Connect",
  description: "We connect people through open source.",
};

const LazyMap = dynamic(() => import("@/src/components/templates/MapSection"), {
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
