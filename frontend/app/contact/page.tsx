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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/contact";

export default function Services() {
  return (
    <Main>
      <Header />
      <Hero content={contact.hero} />

      <h3 className="text-3xl lg:text-4xl text-center font-bold !leading-tigh">
        Contact Us
      </h3>

      <div className="w-full py-8">
        <div className="max-w-2xl bg-[#FCFCFF] bg-[#1F344A] border border-[#E6E6FF] dark:border-[#546C87] p-8 mx-auto rounded-lg flex flex-col gap-4 items-center">
          <Input placeholder="Your name" />
          <Input placeholder="Your email" />
          <Textarea placeholder="Your message" />
          <Button>Send your message</Button>
        </div>
      </div>
      <SocialProofSection />
      <Footer />
    </Main>
  );
}
