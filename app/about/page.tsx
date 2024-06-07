import { Hero } from '@/components/shared/Hero';
import { SocialProofSection } from '@/components/templates/SocialProofSection';
import { TwoColumn } from '@/components/shared/TwoColumn';
import { Cta } from '@/components/shared/Cta';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { Main } from '@/components/shared/Main';
import { about } from '@/content/about';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Rconnect.tech',
  description: about.hero.intro,
  openGraph: {
    images: '/images/blog-default-preview.png',
  },
};

export default function About() {
  return (
    <Main>
      <Header />
      <Hero content={about.hero} cta={true} />
      {about.sections.map((section, index) => (
        <TwoColumn key={'servicecol-' + index} index={index}>
          <div className="flex flex-col gap-4">
            <Image
              src={section.image}
              width={609}
              height={380}
              alt=""
              className="h-width aspect-video rounded-xl object-cover object-top"
            />
            <p className="text-center italic">{section.imageDescription}</p>
          </div>
          <div className="flex h-full flex-col justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold">{section.title}</h4>
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
