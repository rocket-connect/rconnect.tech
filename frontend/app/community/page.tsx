"use client";
import dynamic from "next/dynamic";
import { Hero } from "@/components/shared/Hero";
import { SocialProofSection } from "@/components/templates/SocialProofSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { services } from "@/content/services";
import { community } from "@/content/community";
import { CommunitySection } from "@/components/templates/CommunitySection";
import { Cta } from "@/components/shared/Cta";
import { DirectorySection } from "@/components/templates/DirectorySection";

const LazyMap = dynamic(() => import("@/components/templates/MapSection"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Services() {
  return (
    <Main>
      <Header />
      <Hero content={community.hero} cta={true} />
      <SocialProofSection />
      <LazyMap content={community.activity} />
      <DirectorySection content={community.directory} />
      <CommunitySection content={community.featuredVideos} />
      <Cta />
      <Footer />
    </Main>
  );
}
