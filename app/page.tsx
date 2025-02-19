import { CommunitySection } from '@/components/templates/CommunitySection';
import { Hero } from '@/components/shared/Hero';
import { ServicesSection } from '@/components/templates/ServicesSection';
import { SocialProofSection } from '@/components/templates/SocialProofSection';
import { Cta } from '@/components/shared/Cta';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { Main } from '@/components/shared/Main';
import { home } from '@/content/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connecting People Through Open Source',
  description:
    'Build and grow your open source community with Rocket Connect. We provide tools, services, and expertise for open source success.',
  keywords: [
    'open source',
    'community',
    'developer relations',
    'software development',
    'technical documentation',
  ],
  openGraph: {
    title: 'Open Source Community Platform',
    description: 'Build and grow your open source community with Rocket Connect',
    type: 'website',
    images: '/images/blog-default-preview.png',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <Main>
      <Header />
      <Hero content={home.hero} cta={true} />
      <SocialProofSection />
      <ServicesSection content={home.services} />
      <CommunitySection content={home.community} />
      <Cta />
      <Footer />
    </Main>
  );
}
