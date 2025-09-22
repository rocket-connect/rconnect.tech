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
import { sharedKeywords, baseDescription, organizationStructuredData } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Connecting People Through Open Source | AI Development Tools & Community Platform',
  description: baseDescription,
  keywords: sharedKeywords,
  openGraph: {
    title: 'Rocket Connect - AI Development Tools & Open Source Community Platform',
    description:
      'Professional AI development tools and open source community solutions. Creators of MCP Connect, GQLPT, GraphQL Debugger, and APIPT - build better AI integrations with our developer tools.',
    type: 'website',
    images: [
      {
        url: '/images/blog-default-preview.png',
        width: 1200,
        height: 630,
        alt: 'Rocket Connect - AI Development Tools & Open Source Community Platform',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocket Connect - AI Development Tools & Open Source Community',
    description:
      'Professional AI development tools and open source solutions. Creators of MCP Connect, GQLPT, GraphQL Debugger, and APIPT.',
    images: ['/images/blog-default-preview.png'],
    creator: '@rconnect_tech',
    site: '@rconnect_tech',
  },
  other: {
    'application-name': 'Rocket Connect - AI Tools Platform',
    author: 'Rocket Connect',
    publisher: 'Rocket Connect',
  },
};

export default function Home() {
  return (
    <>
      {/* Enhanced Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />

      {/* Website Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://rconnect.tech/#website',
            name: 'Rocket Connect - AI Tools & Open Source Platform',
            url: 'https://rconnect.tech',
            description:
              'Professional AI development tools, API solutions, and open source community platform. Home of MCP Connect, GQLPT, GraphQL Debugger, and APIPT.',
            publisher: {
              '@type': 'Organization',
              name: 'Rocket Connect',
              '@id': 'https://rconnect.tech/#organization',
            },
            mainEntity: [
              {
                '@type': 'SoftwareApplication',
                name: 'MCP Connect',
                url: 'https://mcp.rconnect.tech',
                applicationCategory: 'AI Development Tools',
              },
              {
                '@type': 'SoftwareApplication',
                name: 'GQLPT',
                url: 'https://gqlpt.dev',
                applicationCategory: 'GraphQL Tools',
              },
              {
                '@type': 'SoftwareApplication',
                name: 'GraphQL Debugger',
                url: 'https://www.graphql-debugger.com',
                applicationCategory: 'API Debugging Tools',
              },
              {
                '@type': 'SoftwareApplication',
                name: 'APIPT',
                url: 'https://www.apipt.dev',
                applicationCategory: 'API Development Tools',
              },
            ],
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://rconnect.tech/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
            about: [
              {
                '@type': 'Thing',
                name: 'AI Development Tools',
                description: 'Professional tools for AI integration and development',
              },
              {
                '@type': 'Thing',
                name: 'API Development',
                description: 'GraphQL, REST, and Protocol development tools',
              },
              {
                '@type': 'Thing',
                name: 'Open Source Community',
                description: 'Community building and developer relations',
              },
              {
                '@type': 'Thing',
                name: 'Ethical Technology',
                description: 'Responsible AI development and social impact technology',
              },
            ],
          }),
        }}
      />

      <Main>
        <Header />
        <Hero content={home.hero} cta={true} />
        <SocialProofSection />
        <ServicesSection content={home.services} />
        <CommunitySection content={home.community} />
        <Cta />
        <Footer />
      </Main>
    </>
  );
}
