import { Hero } from "@/components/shared/Hero";
import { SocialProofSection } from "@/components/templates/SocialProofSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/contact";
import { TwoColumn } from "@/components/shared/TwoColumn";
import Image from "next/image";

export default function Contact() {
  return (
    <Main>
      <Header />
      <Hero content={contact.hero} />
      <h3 className="text-3xl lg:text-4xl text-center font-bold !leading-tigh">
        Contact Us
      </h3>
      <p className="text-center w-1/2 mt-8">{contact.intro}</p>
      <div className="container flex flex-col md:flex-row flex-col-reverse p-16 w-full align-center justify-center mx-auto gap-8">
        <div className="flex flex-col my-auto mx-auto md:mx-0 gap-4">
          <Image
            src={contact.image}
            width={200}
            height={400}
            alt=""
            className="rounded-xl"
          />
          <p className="text-center italic">{contact.imageDescription}</p>
        </div>
        <div className="w-full md:w-1/2 mx-auto md:mx-0">
          <div className="max-w-2xl border border-[#E6E6FF] rounded-xl bg-[#F1F6FA] dark:bg-[#1F344A] dark:border-[#546C87] p-8 mx-auto rounded-lg flex flex-col gap-4 items-center">
            <Input placeholder="Your name" />
            <Input placeholder="Your email" />
            <Textarea placeholder="Your message" />
            <Button>Send your message</Button>
          </div>
        </div>
      </div>
      <SocialProofSection />
      <Footer />
    </Main>
  );
}
