"use client";
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

const LazyMap = dynamic(() => import("@/components/templates/MapSection"), {
  ssr: false,
  loading: () => <p className="mt-5">Loading...</p>,
});

export default function Community() {
  return (
    <Main>
      <Header />
      <Hero content={community.hero} cta={true} />
      <h3 className="text-3xl lg:text-4xl text-center font-bold !leading-tigh">
        Community
      </h3>
      <p className="text-center w-1/2 mt-8">{community.intro}</p>
      <LazyMap content={community.activity} />
      <DirectorySection content={community.directory} />
      <CommunitySection content={community.featuredVideos} />
      <SocialProofSection />
      <Cta />
      <Footer />
    </Main>
  );
}
