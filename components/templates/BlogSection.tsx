'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Container } from '../shared/Container';
import { BlogCard } from '../shared/BlogCard';

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
  // Get the latest 6 blogs for a 2x3 grid
  const latestBlogs = blogs
    .sort((a, b) => new Date(b.formattedDate).getTime() - new Date(a.formattedDate).getTime())
    .slice(0, 3);

  // Calculate reading time if not provided
  const estimateReadingTime = (description: string): number => {
    const wordsPerMinute = 200;
    const words = description.split(' ').length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  };

  if (latestBlogs.length === 0) return null;

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
            {/* Blog Stats */}
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-[#24BEE1]">{blogs.length}</span> articles covering
              AI development, GraphQL, API tools, and open source insights
            </p>
          </div>
          <Link href="/blog" className="hidden lg:block">
            <Button className="gap-2">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Blog Grid - Consistent 2x3 layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {latestBlogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
              estimateReadingTime={estimateReadingTime}
              variant="default"
            />
          ))}
        </div>

        {/* View All Button for Mobile */}
        <div className="text-center lg:hidden">
          <Link href="/blog">
            <Button className="w-full md:w-auto">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
