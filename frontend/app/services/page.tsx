import { Hero } from "@/components/shared/Hero";
import { SocialProofSection } from "@/components/templates/SocialProofSection";
import { TwoColumn } from "@/components/shared/TwoColumn";
import { Cta } from "@/components/shared/Cta";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { services } from "@/content/services";
import Image from "next/image";

export default function Services() {
  return (
    <Main>
      <Header />
      <Hero content={services.hero} cta={true} />
      <SocialProofSection />
      {services.services.list.map((service, index) => (
        <TwoColumn key={"servicecol-" + index} index={index}>
          <div className="flex flex-col gap-4">
            <Image
              src={service.image}
              width={609}
              height={380}
              alt=""
              className="rounded-xl"
            />
            <p className="text-center italic">{service.imageDescription}</p>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl">{service.name}</h2>
              <p>{service.content}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold">{service.subContent.name}</h4>
              <p>{service.subContent.content}</p>
            </div>
          </div>
        </TwoColumn>
      ))}

      <Cta />
      <Footer />
    </Main>
  );
}
