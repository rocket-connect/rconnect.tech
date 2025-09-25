// app/community/page.tsx
import dynamic from 'next/dynamic';
import { Hero } from '@/components/shared/Hero';
import { SocialProofSection } from '@/components/templates/SocialProofSection';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { Main } from '@/components/shared/Main';
import { community } from '@/content/community';
import { CommunitySection } from '@/components/templates/CommunitySection';
import { UpcomingEventsSection } from '@/components/templates/UpcomingEventsSection'; // NEW
import { Cta } from '@/components/shared/Cta';
import { DirectorySection } from '@/components/templates/DirectorySection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Join the Rocket Connect community. Connect with developers, share knowledge, and contribute to open source projects.',
  keywords: [
    'developer community',
    'open source community',
    'tech events',
    'developer network',
    'collaboration',
    'MCP events',
    'Model Context Protocol',
    'AI meetups',
  ],
  openGraph: {
    title: 'Join Our Community',
    description: 'Connect with developers and contribute to open source',
    type: 'website',
    images: '/images/blog-default-preview.png',
  },
  alternates: {
    canonical: '/community',
  },
};

const LazyMap = dynamic(() => import('@/components/templates/MapSection'), {
  ssr: false,
  loading: () => <p className="mt-5">Loading...</p>,
});

export default function Community() {
  return (
    <Main>
      <Header />
      <Hero content={community.hero} cta={true} />

      <UpcomingEventsSection content={community.upcomingEvents} />

      <LazyMap content={community.activity} />
      <DirectorySection content={community.directory} />
      <CommunitySection content={community.featuredVideos} />
      <SocialProofSection />
      <Cta />
      <Footer />
    </Main>
  );
}
