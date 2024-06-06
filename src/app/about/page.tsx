import { Hero } from "@/src/components/shared/Hero";
import { SocialProofSection } from "@/src/components/templates/SocialProofSection";
import { TwoColumn } from "@/src/components/shared/TwoColumn";
import { Cta } from "@/src/components/shared/Cta";
import { Footer } from "@/src/components/shared/Footer";
import { Header } from "@/src/components/shared/Header";
import { Main } from "@/src/components/shared/Main";
import { about } from "@/src/content/about";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Rconnect.tech",
  description: "We connect people through open source.",
  openGraph: {
    images: "/images/blog-default-preview.jpg",
  },
};

export default function About() {
  return (
    <Main>
      <Header />
      <Hero content={about.hero} cta={true} />
      {about.sections.map((section, index) => (
        <TwoColumn key={"servicecol-" + index} index={index}>
          <div className="flex flex-col gap-4">
            <Image
              src={section.image}
              width={609}
              height={380}
              alt=""
              className="rounded-xl object-cover object-top h-width aspect-video"
            />
            <p className="text-center italic">{section.imageDescription}</p>
          </div>
          <div className="lg:w-1/2 h-full flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-2xl">{section.title}</h4>
              <p>{section.content}</p>
            </div>
          </div>
        </TwoColumn>
      ))}
      <SocialProofSection />
      <Cta />
      <Footer />
    </Main>
  );
}