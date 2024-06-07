import { Hero } from "@/components/shared/Hero";
import { SocialProofSection } from "@/components/templates/SocialProofSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { contact } from "@/content/contact";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/components/ui/contact-form";

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
          <ContactForm />
        </div>
      </div>
      <SocialProofSection />
      <Footer />
    </Main>
  );
}
