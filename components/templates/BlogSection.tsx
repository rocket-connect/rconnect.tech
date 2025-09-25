'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { categoryColor } from '@/lib/utils';
import { getAuthors } from '@/content/authors';
import { Clock, Calendar, ArrowRight, Users } from 'lucide-react';
import { Container } from '../shared/Container';

interface BlogPost {
  slug: string;
  formattedDate: string;
  meta: {
    title: string;
    description: string;
    hero: string;
    category: string;
    author?: string | string[];
    keywords?: string[];
    readingTime?: number;
  };
}

interface BlogSectionProps {
  blogs: BlogPost[];
}

export const BlogSection = ({ blogs }: BlogSectionProps) => {
  // Get the latest 3 blogs
  const latestBlogs = blogs
    .sort((a, b) => new Date(b.formattedDate).getTime() - new Date(a.formattedDate).getTime())
    .slice(0, 3);

  const [featuredBlog, ...secondaryBlogs] = latestBlogs;

  // Calculate reading time if not provided
  const estimateReadingTime = (description: string): number => {
    const wordsPerMinute = 200;
    const words = description.split(' ').length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  };

  if (!featuredBlog) return null;

  return (
    <div className="w-full border-t border-[#E6E6FF] bg-gradient-to-b from-[#FCFCFF] to-white py-16 dark:border-[#1F344A] dark:from-[#1F344A] dark:to-background-invert">
      <Container className="gap-12">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-foreground-main dark:text-foreground-invert">
              Latest Insights
            </h2>
            <p className="text-foreground-main opacity-80 dark:text-foreground-invert">
              Expert insights on AI development tools, GraphQL, and open source
            </p>
          </div>
          <Link href="/blog" className="hidden lg:block">
            <Button className="gap-2">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Featured Blog - Large */}
          <div className="lg:col-span-8">
            <FeaturedBlogCard blog={featuredBlog} estimateReadingTime={estimateReadingTime} />

            {/* Featured Blog Content Extract - Hidden on mobile to reduce clutter */}
            <div className="mt-6 hidden space-y-6 lg:mt-8 lg:block">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground-main dark:text-foreground-invert">
                  Featured Article
                </h3>
                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="text-sm text-[#24BEE1] hover:underline"
                >
                  Continue reading →
                </Link>
              </div>

              <div className="prose prose-sm max-w-none text-foreground-main dark:prose-invert dark:text-foreground-invert">
                <p className="text-base leading-relaxed">{featuredBlog.meta.description}</p>

                {/* Additional content preview */}
                <div className="mt-4 rounded-lg border-l-4 border-[#24BEE1] bg-slate-50 p-4 dark:bg-slate-800/50">
                  <h4 className="mb-2 font-semibold text-foreground-main dark:text-foreground-invert">
                    What you will learn:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#24BEE1]"></span>
                      <span>Best practices and implementation strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#24BEE1]"></span>
                      <span>Real-world examples and use cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#24BEE1]"></span>
                      <span>Expert insights from industry professionals</span>
                    </li>
                    {featuredBlog.meta.category === 'technology' && (
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#24BEE1]"></span>
                        <span>Code examples and technical deep-dives</span>
                      </li>
                    )}
                    {featuredBlog.meta.category === 'community' && (
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#24BEE1]"></span>
                        <span>Community events and networking opportunities</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Keywords/Topics */}
                {featuredBlog.meta.keywords && featuredBlog.meta.keywords.length > 0 && (
                  <div className="not-prose mt-6">
                    <h4 className="mb-3 text-sm font-semibold text-foreground-main dark:text-foreground-invert">
                      Topics Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredBlog.meta.keywords.slice(0, 8).map((keyword, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                        >
                          {keyword}
                        </span>
                      ))}
                      {featuredBlog.meta.keywords.length > 8 && (
                        <span className="inline-flex items-center text-xs text-slate-500 dark:text-slate-300">
                          +{featuredBlog.meta.keywords.length - 8} more topics
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Author expertise preview */}
                {getAuthors(featuredBlog.meta.author || 'team-rconnect').length > 0 && (
                  <div className="not-prose mt-6 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800/50 dark:to-slate-900/50">
                    <h4 className="mb-2 text-sm font-semibold text-foreground-main dark:text-foreground-invert">
                      About the{' '}
                      {getAuthors(featuredBlog.meta.author || 'team-rconnect').length > 1
                        ? 'Authors'
                        : 'Author'}
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {getAuthors(featuredBlog.meta.author || 'team-rconnect')
                          .slice(0, 3)
                          .map((author, index) => (
                            <Image
                              key={author.id}
                              src={author.avatar}
                              alt={author.name}
                              width={32}
                              height={32}
                              className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-slate-900"
                              style={{
                                zIndex:
                                  getAuthors(featuredBlog.meta.author || 'team-rconnect').length -
                                  index,
                              }}
                            />
                          ))}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground-main dark:text-foreground-invert">
                          {getAuthors(featuredBlog.meta.author || 'team-rconnect')[0]?.name}
                          {getAuthors(featuredBlog.meta.author || 'team-rconnect').length > 1 &&
                            ` & ${getAuthors(featuredBlog.meta.author || 'team-rconnect').length - 1} more`}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {getAuthors(featuredBlog.meta.author || 'team-rconnect')[0]
                            ?.expertise?.slice(0, 3)
                            .join(', ')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Secondary Blogs - Smaller */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            {secondaryBlogs.map((blog) => (
              <SecondaryBlogCard
                key={blog.slug}
                blog={blog}
                estimateReadingTime={estimateReadingTime}
              />
            ))}

            {/* Recent Articles Summary - Only show on desktop */}
            <div className="mt-6 hidden rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900 lg:block lg:p-6">
              <h4 className="mb-3 font-semibold text-foreground-main dark:text-foreground-invert">
                More Insights
              </h4>
              <p className="mb-4 text-sm text-foreground-main opacity-80 dark:text-foreground-invert">
                Explore our comprehensive library of technical articles, tutorials, and industry
                insights covering AI development, GraphQL, API design, and open source best
                practices.
              </p>
              <Link href="/blog">
                <Button className="w-full">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Single View All Button for Mobile - Outside the grid */}
        <div className="mt-8 lg:hidden">
          <Link href="/blog">
            <Button className="w-full">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

const FeaturedBlogCard = ({
  blog,
  estimateReadingTime,
}: {
  blog: BlogPost;
  estimateReadingTime: (desc: string) => number;
}) => {
  const color = categoryColor(blog.meta.category);
  const authors = getAuthors(blog.meta.author || 'team-rconnect');
  const readingTime = blog.meta.readingTime || estimateReadingTime(blog.meta.description);

  return (
    <article className="group">
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={blog.meta.hero}
            width={800}
            height={400}
            alt={blog.meta.title}
            className="aspect-[5/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Category Badge */}
          <div
            className="absolute left-6 top-6 rounded-full px-4 py-2 text-sm font-bold uppercase text-white shadow-lg backdrop-blur-sm"
            style={{ backgroundColor: `${color}E6` }}
          >
            {blog.meta.category}
          </div>

          {/* Reading Time */}
          <div className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-black/60 px-3 py-2 text-sm text-white backdrop-blur-sm">
            <Clock className="h-4 w-4" />
            {readingTime} min
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="mb-3 flex items-center gap-2 text-sm text-white/80">
              <Calendar className="h-4 w-4" />
              <span>{blog.formattedDate}</span>
            </div>

            <h3 className="mb-3 text-2xl font-bold leading-tight transition-colors duration-300 group-hover:text-[#24BEE1] lg:text-3xl">
              {blog.meta.title}
            </h3>

            {/* Author Info */}
            {authors.length > 0 && (
              <div className="flex items-center gap-3">
                {authors.length === 1 ? (
                  <div className="flex items-center gap-3">
                    <Image
                      src={authors[0].avatar}
                      alt={authors[0].name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-white/20"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">{authors[0].name}</p>
                      <p className="text-xs text-white/70">{authors[0].role}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {authors.slice(0, 3).map((author, index) => (
                        <Image
                          key={author.id}
                          src={author.avatar}
                          alt={author.name}
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full object-cover ring-2 ring-white/20"
                          style={{ zIndex: authors.length - index }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-medium text-white">
                        <Users className="h-4 w-4" />
                        {authors.length} authors
                      </div>
                      <p className="text-xs text-white/70">
                        {authors
                          .slice(0, 2)
                          .map((a) => a.name)
                          .join(', ')}
                        {authors.length > 2 && ` & ${authors.length - 2} more`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

const SecondaryBlogCard = ({
  blog,
  estimateReadingTime,
}: {
  blog: BlogPost;
  estimateReadingTime: (desc: string) => number;
}) => {
  const color = categoryColor(blog.meta.category);
  const authors = getAuthors(blog.meta.author || 'team-rconnect');
  const readingTime = blog.meta.readingTime || estimateReadingTime(blog.meta.description);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <Link href={`/blog/${blog.slug}`} className="flex h-full flex-col">
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={blog.meta.hero}
            width={300}
            height={160}
            alt={blog.meta.title}
            className="aspect-[16/9] w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />

          {/* Category Badge */}
          <div
            className="absolute left-3 top-3 rounded-full px-2 py-1 text-xs font-bold uppercase text-white shadow-lg"
            style={{ backgroundColor: `${color}E6` }}
          >
            {blog.meta.category}
          </div>

          {/* Reading Time */}
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
            <Clock className="h-3 w-3" />
            {readingTime}m
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col p-4">
          {/* Date */}
          <div className="mb-2 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Calendar className="h-3 w-3" />
            <span>{blog.formattedDate}</span>
          </div>

          {/* Title and Description */}
          <div className="mb-3 flex-grow space-y-2">
            <h4 className="line-clamp-2 font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#24BEE1] dark:text-slate-100">
              {blog.meta.title}
            </h4>
            <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {blog.meta.description}
            </p>
          </div>

          {/* Author */}
          {authors.length > 0 && (
            <div className="mt-auto border-t border-slate-100 pt-3 dark:border-slate-800">
              {authors.length === 1 ? (
                <div className="flex items-center gap-2">
                  <Image
                    src={authors[0].avatar}
                    alt={authors[0].name}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium text-slate-700 dark:text-slate-300">
                      {authors[0].name}
                    </p>
                    <p className="truncate text-xs text-slate-500 dark:text-slate-500">
                      {authors[0].role}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {authors.slice(0, 2).map((author, index) => (
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
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <Users className="h-3 w-3" />
                      {authors.length} authors
                    </div>
                    <p className="truncate text-xs text-slate-500">
                      {authors[0].name}
                      {authors.length > 1 && ` & ${authors.length - 1} more`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Read More */}
          <div className="mt-3 flex items-center gap-1 text-xs font-medium text-[#24BEE1] transition-all duration-300 group-hover:gap-2">
            Read More
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
};
