import { Hero } from "@/components/shared/Hero";
import { SocialProofSection } from "@/components/templates/SocialProofSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/contact";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Rconnect.tech",
  description: "We connect people through open source.",
};

export default function Contact() {
  return (
    <Main>
      <Header />
      <Hero content={contact.hero} />
      <div className="container flex flex-col md:flex-row flex-col-reverse p-0 lg:p-16 w-full align-center justify-center mx-auto gap-8">
        <div className="flex flex-col h-full items-center justify-center my-auto mx-auto md:mx-0 gap-4">
          <Image
            src={contact.image}
            width={200}
            height={400}
            alt=""
            className="rounded-xl object-cover w-full"
          />
          <p className="text-foreground-main dark:text-foreground-invert text-center italic">
            {contact.imageDescription}
          </p>
        </div>
        <div className="w-full md:w-1/2 mx-auto md:mx-0">
          <div className="lg:max-w-2xl border border-[#E6E6FF] lg:rounded-lg bg-[#F1F6FA] dark:bg-[#1F344A] dark:border-[#546C87] p-4 lg:p-8 mx-auto flex flex-col gap-4 items-center">
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
