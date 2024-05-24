import { Hero } from "@/components/shared/Hero";
import { SocialProofSection } from "@/components/templates/SocialProofSection";
import { TwoColumn } from "@/components/shared/TwoColumn";
import { Cta } from "@/components/shared/Cta";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { services } from "@/content/services";
import type { Metadata } from "next";
import Image from "next/image";

export default function Services() {
  return (
    <Main>
      <Header />
      <Hero content={services.hero} />
      <SocialProofSection />
      {services.services.list.map((service, index) => (
        <TwoColumn key={"servicecol-" + index} index={index}>
          <Image
            src={service.image}
            width={609}
            height={380}
            alt=""
            className="rounded-xl"
          />
          <div className="w-1/2 h-full flex flex-col gap-4 justify-center">
            <h2 className="font-bold text-2xl">{service.name}</h2>
            <p>{service.content}</p>
          </div>
        </TwoColumn>
      ))}

      <Cta />
      <Footer />
    </Main>
  );
}
