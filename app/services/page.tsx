import { Hero } from '@/components/shared/Hero';
import { SocialProofSection } from '@/components/templates/SocialProofSection';
import { TwoColumn } from '@/components/shared/TwoColumn';
import { Cta } from '@/components/shared/Cta';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { Main } from '@/components/shared/Main';
import { services } from '@/content/services';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Rconnect.tech',
  description: services.hero.intro,
};

export default function Services() {
  return (
    <Main>
      <Header />
      <Hero content={services.hero} cta={true} />
      {services.services.list.map((service, index) => (
        <TwoColumn key={'servicecol-' + index} index={index}>
          <div className="flex flex-col gap-2">
            <Image
              src={service.image}
              width={609}
              height={380}
              alt=""
              className="h-width aspect-video rounded-xl object-cover object-top"
            />
            <p className="text-center italic">{service.imageDescription}</p>
          </div>
          <div className="flex h-full w-full flex-col justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold" id={service.id}>
                {service.name}
              </h4>
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
