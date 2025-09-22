// app/blog/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Main } from '@/components/shared/Main';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Container } from '@/components/shared/Container';
import BlogPosts from '@/components/shared/BlogPosts';
import { formatdate } from '@/lib/utils';
import { Hero } from '@/components/shared/Hero';
import { blog } from '@/content/blog';
import { SocialProofSection } from '@/components/templates/SocialProofSection';
import { Cta } from '@/components/shared/Cta';
import { sharedKeywords } from '@/lib/seo';
import { Metadata } from 'next';

const blogKeywords = [
  'tech blog',
  'open source blog',
  'developer blog',
  'AI development articles',
  'GraphQL tutorials',
  'API development guides',
  'community management blog',
  'technical articles',
  'software engineering blog',
  'developer tools reviews',
  'MCP Connect articles',
  'GQLPT tutorials',
  'GraphQL Debugger guides',
  'APIPT documentation',
  ...sharedKeywords.slice(0, 15),
];

export const metadata: Metadata = {
  title: 'Developer Blog | AI Tools, GraphQL & Open Source Insights',
  description:
    'Expert insights on AI development tools, GraphQL, API development, and open source. Learn from the creators of MCP Connect, GQLPT, GraphQL Debugger, and APIPT with in-depth tutorials and industry analysis.',
  keywords: blogKeywords,
  openGraph: {
    title: 'Rocket Connect Blog - AI Development Tools & Open Source Insights',
    description:
      'Expert articles on AI tools, GraphQL, API development, and open source from industry professionals.',
    type: 'website',
    images: [
      {
        url: '/images/blog-preview.png',
        width: 1200,
        height: 630,
        alt: 'Rocket Connect Blog - AI Development Tools & Open Source Insights',
      },
    ],
    siteName: 'Rocket Connect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocket Connect Blog - AI Development Tools & Open Source',
    description: 'Expert insights on AI tools, GraphQL, and open source development',
    images: ['/images/blog-preview.png'],
    creator: '@rconnect_tech',
  },
  alternates: {
    canonical: '/blog',
    types: {
      'application/rss+xml': [{ url: '/blog/rss.xml', title: 'Rocket Connect Blog RSS Feed' }],
    },
  },
  other: {
    'article:publisher': 'https://www.linkedin.com/company/rocketconnect/',
    'og:site_name': 'Rocket Connect',
  },
};

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default function Blog() {
  const blogDirectory = path.join(process.cwd(), 'content/posts');
  const fileNames = fs.readdirSync(blogDirectory);

  const blogs = fileNames.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data: frontMatter, content } = matter(fileContents);
    const formattedDate = formatdate(frontMatter.date);
    const readingTime = estimateReadingTime(content);

    return {
      slug,
      formattedDate,
      meta: {
        ...frontMatter,
        readingTime,
        date: formattedDate,
        title: frontMatter.title || 'Untitled',
        description: frontMatter.description || 'No description available',
        hero: frontMatter.hero || '/images/default-hero.jpg',
        category: frontMatter.category || 'General',
        author: frontMatter.author || 'team-rconnect',
        keywords: frontMatter.keywords || [],
      },
    };
  });

  // Enhanced structured data for blog listing
  const blogListingStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://rconnect.tech/blog',
    name: 'Rocket Connect Blog',
    description:
      'Expert insights on AI development tools, GraphQL, API development, and open source',
    url: 'https://rconnect.tech/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Rocket Connect',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rconnect.tech/images/logo/rconnect-wordmark.svg',
      },
      url: 'https://rconnect.tech',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: blogs.length,
      itemListElement: blogs.slice(0, 10).map((blog, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          '@id': `https://rconnect.tech/blog/${blog.slug}`,
          headline: blog.meta.title,
          description: blog.meta.description,
          image: blog.meta.hero,
          datePublished: blog.meta.date,
          author: {
            '@type': 'Person',
            name: blog.meta.author || 'Rocket Connect Team',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Rocket Connect',
          },
        },
      })),
    },
    blogPost: blogs.map((blog) => ({
      '@type': 'BlogPosting',
      '@id': `https://rconnect.tech/blog/${blog.slug}`,
      headline: blog.meta.title,
      description: blog.meta.description,
      datePublished: blog.meta.date,
      url: `https://rconnect.tech/blog/${blog.slug}`,
    })),
    about: [
      {
        '@type': 'Thing',
        name: 'AI Development Tools',
        description: 'Professional tools for AI integration and development',
      },
      {
        '@type': 'Thing',
        name: 'GraphQL',
        description: 'Query language and runtime for APIs',
      },
      {
        '@type': 'Thing',
        name: 'Open Source',
        description: 'Community-driven software development',
      },
      {
        '@type': 'Thing',
        name: 'API Development',
        description: 'Application programming interface development and best practices',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListingStructuredData),
        }}
      />

      <Main>
        <Header />
        <Hero content={blog.hero} cta={true} />

        <Container className="mb-8 lg:py-2">
          <section>
            {/* Blog Stats */}
            <div className="mb-8 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-[#24BEE1]">{blogs.length}</span> articles
                covering AI development, GraphQL, API tools, and open source insights
              </p>
            </div>

            <BlogPosts allPosts={blogs} />
          </section>
        </Container>

        <SocialProofSection />
        <Cta />
        <Footer />
      </Main>
    </>
  );
}
