import { Hero } from "@/components/shared/Hero";
import { SocialProofSection } from "@/components/templates/SocialProofSection";
import { TwoColumn } from "@/components/shared/TwoColumn";
import { Cta } from "@/components/shared/Cta";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { services } from "@/content/services";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Rconnect.tech",
  description: "We connect people through open source.",
};

export default function Services() {
  return (
    <Main>
      <Header />
      <Hero content={services.hero} cta={true} />
      {services.services.list.map((service, index) => (
        <TwoColumn key={"servicecol-" + index} index={index}>
          <div className="flex flex-col gap-2">
            <Image
              src={service.image}
              width={609}
              height={380}
              alt=""
              className="rounded-xl object-cover object-top h-width aspect-video"
            />
            <p className="text-center italic">{service.imageDescription}</p>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-2xl">{service.name}</h4>
              <p>{service.content}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-bold">{service.subContent.name}</h5>
              <p>{service.subContent.content}</p>
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
