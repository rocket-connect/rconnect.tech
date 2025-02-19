import { Hero } from '@/components/shared/Hero';
import { SocialProofSection } from '@/components/templates/SocialProofSection';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { Main } from '@/components/shared/Main';
import { contact } from '@/content/contact';
import Image from 'next/image';
import { Metadata } from 'next';
import ContactForm from '@/components/ui/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Rocket Connect. We're here to help with your open source community needs.",
  keywords: ['contact', 'support', 'inquiries', 'open source help', 'community support'],
  openGraph: {
    title: 'Contact Rocket Connect',
    description: 'Reach out to us for open source community support',
    type: 'website',
    images: '/images/blog-default-preview.png',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <Main>
      <Header />
      <Hero content={contact.hero} />
      <div className="align-center container mx-auto flex w-full flex-col flex-col-reverse justify-center gap-8 p-0 md:flex-row lg:p-16">
        <div className="mx-auto my-auto flex h-full flex-col items-center justify-center gap-4 md:mx-0">
          <Image
            src={contact.image}
            width={200}
            height={400}
            alt=""
            className="w-full rounded-xl object-cover"
          />
          <p className="text-center italic text-foreground-main dark:text-foreground-invert">
            {contact.imageDescription}
          </p>
        </div>
        <div className="mx-auto w-full md:mx-0 md:w-1/2">
          <ContactForm />
        </div>
      </div>
      <SocialProofSection />
      <Footer />
    </Main>
  );
}
