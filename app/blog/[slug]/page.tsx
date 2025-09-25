// app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import YouTube from '@/components/shared/Youtube';
import Code from '@/components/shared/Code';
import { AuthorCard } from '@/components/shared/AuthorCard';
import { Cta } from '@/components/shared/Cta';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { Main } from '@/components/shared/Main';
import { Container } from '@/components/shared/Container';
import { ChevronLeft, Clock, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { categoryColor, cn, formatdate, metadataBase } from '@/lib/utils';
import { getAuthors } from '@/content/authors';
import { sharedKeywords } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const props = await getPost(params);
  const authors = getAuthors(props.frontMatter.author || 'team-rconnect');

  // Enhanced SEO keywords combining article keywords with shared keywords
  const articleKeywords = [
    ...(props.frontMatter.keywords || []),
    ...sharedKeywords.slice(0, 10), // Include top shared keywords
    props.frontMatter.category,
    'blog',
    'article',
    ...authors.map((author) => author.name),
  ];

  const canonicalUrl = `/blog/${params.slug}`;

  return {
    title: props.frontMatter.title,
    description: props.frontMatter.description,
    keywords: articleKeywords,
    metadataBase,
    authors: authors.map((author) => ({
      name: author.name,
      url: author.social.website || author.social.linkedin,
    })),
    openGraph: {
      type: 'article',
      title: props.frontMatter.title,
      description: props.frontMatter.description,
      images: [
        {
          url: props.frontMatter.hero,
          width: 1200,
          height: 630,
          alt: props.frontMatter.title,
        },
      ],
      publishedTime: props.frontMatter.date,
      modifiedTime: props.frontMatter.lastModified || props.frontMatter.date,
      authors: authors.map((author) => author.name),
      section: props.frontMatter.category,
      tags: props.frontMatter.keywords || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: props.frontMatter.title,
      description: props.frontMatter.description,
      images: [props.frontMatter.hero],
      creator:
        authors.length === 1 && authors[0].social.twitter
          ? `@${authors[0].social.twitter.split('/').pop()}`
          : '@rconnect_tech',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      'article:author': authors.map((author) => author.name).join(', '),
      'article:published_time': props.frontMatter.date,
      'article:modified_time': props.frontMatter.lastModified || props.frontMatter.date,
      'article:section': props.frontMatter.category,
      'article:tag': props.frontMatter.keywords?.join(', ') || '',
    },
  };
}

async function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(path.join('content/posts', slug + '.mdx'), 'utf-8');
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('content/posts'));
  const params = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
  return params;
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default async function Page({ params }: { params: { slug: string } }) {
  const props = await getPost(params);
  const authors = getAuthors(props.frontMatter.author || 'team-rconnect');

  // MDX Components - Code component is already included here
  const components = {
    pre: Code, // This uses your existing Code component
    YouTube,
  };

  const formattedDate = formatdate(props.frontMatter.date);
  const color = categoryColor(props.frontMatter.category);
  const readingTime = estimateReadingTime(props.content);

  // Structured data for article with multiple authors support
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.frontMatter.title,
    description: props.frontMatter.description,
    image: [props.frontMatter.hero],
    datePublished: props.frontMatter.date,
    dateModified: props.frontMatter.lastModified || props.frontMatter.date,
    author:
      authors.length === 1
        ? {
            '@type': 'Person',
            name: authors[0].name,
            jobTitle: authors[0].role,
            url: authors[0].social.website || authors[0].social.linkedin,
            sameAs: Object.values(authors[0].social).filter(Boolean),
          }
        : authors.map((author) => ({
            '@type': 'Person',
            name: author.name,
            jobTitle: author.role,
            url: author.social.website || author.social.linkedin,
            sameAs: Object.values(author.social).filter(Boolean),
          })),
    publisher: {
      '@type': 'Organization',
      name: 'Rocket Connect',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rconnect.tech/images/logo/rconnect-wordmark.svg',
      },
      url: 'https://rconnect.tech',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rconnect.tech/blog/${params.slug}`,
    },
    keywords: props.frontMatter.keywords?.join(', ') || '',
    articleSection: props.frontMatter.category,
    wordCount: props.content.trim().split(/\s+/).length,
    isAccessibleForFree: true,
    about: {
      '@type': 'Thing',
      name: props.frontMatter.category,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <Main>
        <Header />

        <Container className="py-6 lg:py-8">
          <div className="relative mx-auto max-w-5xl">
            {/* Back Navigation */}
            <div className="mb-6 lg:mb-8">
              <Link
                href={'/blog'}
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[#24BEE1] dark:text-slate-400 dark:hover:text-[#24BEE1]"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to all blogs
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              {/* Main Content */}
              <article className="lg:col-span-8">
                {/* Article Header */}
                <header className="mb-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase',
                      )}
                      style={{ color, backgroundColor: `${color}20` }}
                    >
                      <Tag className="h-3 w-3" />
                      {props.frontMatter.category}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formattedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {readingTime} min read
                      </span>
                      {/* Small author photos next to date */}
                      <div className="flex items-center gap-1">
                        <div className="flex -space-x-1">
                          {authors.slice(0, 3).map((author, index) => (
                            <Image
                              key={author.id}
                              src={author.avatar}
                              alt={author.name}
                              width={20}
                              height={20}
                              className="h-5 w-5 rounded-full object-cover ring-1 ring-white dark:ring-slate-900"
                              style={{ zIndex: authors.length - index }}
                            />
                          ))}
                          {authors.length > 3 && (
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600 ring-1 ring-white dark:bg-slate-700 dark:text-slate-400 dark:ring-slate-900">
                              +{authors.length - 3}
                            </div>
                          )}
                        </div>
                        <span className="text-xs">
                          by {authors.length === 1 ? authors[0].name : `${authors.length} authors`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h1 className="mb-4 text-2xl font-bold leading-tight text-foreground-main dark:text-foreground-invert lg:text-4xl">
                    {props.frontMatter.title}
                  </h1>

                  <p className="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300 lg:text-xl">
                    {props.frontMatter.description}
                  </p>
                </header>

                {/* Hero Image */}
                <div className="mb-6 lg:mb-8">
                  <Image
                    className="w-full rounded-lg shadow-md lg:rounded-xl lg:shadow-lg"
                    alt={props.frontMatter.title}
                    width={800}
                    height={400}
                    src={props.frontMatter.hero as string}
                    priority
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg mx-auto max-w-none overflow-hidden text-foreground-main prose-headings:text-foreground-main prose-a:text-[#24BEE1] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#24BEE1] prose-blockquote:text-slate-700 prose-strong:text-foreground-main prose-code:rounded prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-[#24BEE1] prose-pre:!m-0 prose-pre:overflow-x-auto prose-pre:!bg-transparent prose-pre:!p-0 prose-pre:!shadow-none dark:text-foreground-invert dark:prose-headings:text-foreground-invert dark:prose-a:text-[#24BEE1] dark:prose-blockquote:text-slate-300 dark:prose-strong:text-foreground-invert dark:prose-code:bg-slate-800 dark:prose-code:text-[#24BEE1] dark:prose-pre:!border-none dark:prose-pre:!bg-transparent dark:prose-pre:!outline-none">
                  <div className="[&_code]:text-sm [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre_code]:whitespace-pre">
                    <MDXRemote source={props.content} components={components} />
                  </div>
                </div>

                {/* Article Tags */}
                {props.frontMatter.keywords && props.frontMatter.keywords.length > 0 && (
                  <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700 lg:mt-12 lg:pt-8">
                    <h3 className="mb-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                      TAGS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {props.frontMatter.keywords.map((keyword: string, index: number) => (
                        <span
                          key={index}
                          className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 transition-colors duration-200 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="space-y-6 lg:sticky lg:top-24">
                  {/* Authors Card */}
                  {authors.length > 0 && (
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900 lg:rounded-xl lg:p-6">
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground-main dark:text-foreground-invert lg:mb-6">
                        <span className="h-2 w-2 rounded-full bg-[#24BEE1]"></span>
                        About the Author{authors.length > 1 ? 's' : ''}
                      </h3>

                      <div className="space-y-6">
                        {authors.map((author, index) => (
                          <div
                            key={author.id}
                            className={cn(
                              index > 0 && 'border-t border-slate-200 pt-6 dark:border-slate-700',
                            )}
                          >
                            <AuthorCard
                              author={author}
                              showBio={true}
                              size={authors.length === 1 ? 'lg' : 'md'}
                              layout="vertical"
                              showExpertise={authors.length === 1}
                              truncateBio={authors.length > 2}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </Container>
        <Cta />
        <Footer />
      </Main>
    </>
  );
}
