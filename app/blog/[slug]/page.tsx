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
import { getAuthor } from '@/content/authors';
import { sharedKeywords } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const props = await getPost(params);
  const author = getAuthor(props.frontMatter.author || 'team-rconnect');

  // Enhanced SEO keywords combining article keywords with shared keywords
  const articleKeywords = [
    ...(props.frontMatter.keywords || []),
    ...sharedKeywords.slice(0, 10), // Include top shared keywords
    props.frontMatter.category,
    'blog',
    'article',
    author?.name || 'Rocket Connect',
  ];

  const canonicalUrl = `/blog/${params.slug}`;

  return {
    title: props.frontMatter.title,
    description: props.frontMatter.description,
    keywords: articleKeywords,
    metadataBase,
    authors: author
      ? [{ name: author.name, url: author.social.website || author.social.linkedin }]
      : undefined,
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
      authors: author ? [author.name] : undefined,
      section: props.frontMatter.category,
      tags: props.frontMatter.keywords || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: props.frontMatter.title,
      description: props.frontMatter.description,
      images: [props.frontMatter.hero],
      creator: author?.social.twitter
        ? `@${author.social.twitter.split('/').pop()}`
        : '@rconnect_tech',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      'article:author': author?.name || 'Rocket Connect Team',
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
  const author = getAuthor(props.frontMatter.author || 'team-rconnect');

  // MDX Components - Code component is already included here
  const components = {
    pre: Code, // This uses your existing Code component
    YouTube,
  };

  const formattedDate = formatdate(props.frontMatter.date);
  const color = categoryColor(props.frontMatter.category);
  const readingTime = estimateReadingTime(props.content);

  // Structured data for article
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.frontMatter.title,
    description: props.frontMatter.description,
    image: [props.frontMatter.hero],
    datePublished: props.frontMatter.date,
    dateModified: props.frontMatter.lastModified || props.frontMatter.date,
    author: author
      ? {
          '@type': 'Person',
          name: author.name,
          jobTitle: author.role,
          url: author.social.website || author.social.linkedin,
          sameAs: Object.values(author.social).filter(Boolean),
        }
      : {
          '@type': 'Organization',
          name: 'Rocket Connect',
          url: 'https://rconnect.tech',
        },
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
        <Container className="lg:py-0">
          <div className="relative mx-auto max-w-5xl">
            {/* Back Navigation */}
            <div className="mb-8">
              <Link
                href={'/blog'}
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[#24BEE1] dark:text-slate-400 dark:hover:text-[#24BEE1]"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to all blogs
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Main Content */}
              <article className="lg:col-span-8">
                {/* Article Header */}
                <header className="mb-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-bold uppercase',
                      )}
                      style={{ color, backgroundColor: `${color}20` }}
                    >
                      <Tag className="h-3 w-3" />
                      {props.frontMatter.category}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formattedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {readingTime} min read
                      </span>
                    </div>
                  </div>

                  <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground-main dark:text-foreground-invert lg:text-5xl">
                    {props.frontMatter.title}
                  </h1>

                  <p className="mb-8 text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                    {props.frontMatter.description}
                  </p>
                </header>

                {/* Hero Image */}
                <div className="mb-8">
                  <Image
                    className="w-full rounded-xl shadow-lg"
                    alt={props.frontMatter.title}
                    width={800}
                    height={500}
                    src={props.frontMatter.hero as string}
                    priority
                  />
                </div>

                {/* Article Content with Code Component Support */}
                <div className="prose prose-lg mx-auto max-w-none text-foreground-main prose-headings:text-foreground-main prose-a:text-[#24BEE1] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#24BEE1] prose-blockquote:text-slate-700 prose-strong:text-foreground-main prose-code:rounded prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-[#24BEE1] prose-pre:!m-0 prose-pre:!bg-transparent prose-pre:!p-0 prose-pre:!shadow-none dark:text-foreground-invert dark:prose-headings:text-foreground-invert dark:prose-a:text-[#24BEE1] dark:prose-blockquote:text-slate-300 dark:prose-strong:text-foreground-invert dark:prose-code:bg-slate-800 dark:prose-code:text-[#24BEE1] dark:prose-pre:!border-none dark:prose-pre:!bg-transparent dark:prose-pre:!outline-none">
                  {/* 
                    The Code component is automatically used here via the `pre: Code` mapping in components.
                    When MDX encounters a code block (```), it renders it using your Code component which includes:
                    - Syntax highlighting with react-syntax-highlighter
                    - Copy button functionality via AdminBar
                    - Language detection
                    - Dark theme (nightOwl)
                  */}
                  <MDXRemote source={props.content} components={components} />
                </div>

                {/* Article Tags */}
                {props.frontMatter.keywords && props.frontMatter.keywords.length > 0 && (
                  <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700">
                    <h3 className="mb-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                      TAGS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {props.frontMatter.keywords.map((keyword: string, index: number) => (
                        <span
                          key={index}
                          className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm text-slate-700 transition-colors duration-200 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
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
                <div className="space-y-8 lg:sticky lg:top-24">
                  {/* Author Card */}
                  {author && (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                      <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground-main dark:text-foreground-invert">
                        <span className="h-2 w-2 rounded-full bg-[#24BEE1]"></span>
                        About the Author
                      </h3>
                      <AuthorCard
                        author={author}
                        showBio
                        size="lg"
                        layout="vertical"
                        showExpertise
                      />
                    </div>
                  )}

                  {/* Article Info */}
                  <div className="hidden rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900 lg:block">
                    <h3 className="mb-4 text-lg font-semibold text-foreground-main dark:text-foreground-invert">
                      Article Info
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Reading time</span>
                        <span className="font-medium text-foreground-main dark:text-foreground-invert">
                          {readingTime} min
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Published</span>
                        <span className="font-medium text-foreground-main dark:text-foreground-invert">
                          {formattedDate}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Category</span>
                        <span className="font-medium capitalize text-foreground-main dark:text-foreground-invert">
                          {props.frontMatter.category}
                        </span>
                      </div>
                    </div>
                  </div>
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
