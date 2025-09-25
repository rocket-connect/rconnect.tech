// components/shared/BlogCard.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categoryColor } from '@/lib/utils';
import { getAuthors } from '@/content/authors';
import { Clock, Calendar, ArrowRight, Users } from 'lucide-react';

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

interface BlogCardProps {
  blog: BlogPost;
  estimateReadingTime: (desc: string) => number;
  variant?: 'default' | 'compact';
}

export const BlogCard = ({ blog, estimateReadingTime, variant = 'default' }: BlogCardProps) => {
  const color = categoryColor(blog.meta.category);
  const authors = getAuthors(blog.meta.author || 'team-rconnect');
  const readingTime = blog.meta.readingTime || estimateReadingTime(blog.meta.description);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
      <Link href={`/blog/${blog.slug}`} className="flex h-full flex-col">
        {/* Hero Image */}
        <div className="relative overflow-hidden bg-white">
          <Image
            src={blog.meta.hero}
            width={400}
            height={200}
            alt={blog.meta.title}
            className="aspect-[2/1] w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
            style={{
              filter: 'brightness(1) contrast(1)',
              backgroundColor: 'white',
            }}
            priority={false}
            quality={95}
          />

          {/* Gradient Overlay - lighter for better badge visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

          {/* Category Badge - adjusted positioning */}
          <div
            className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-bold uppercase text-white shadow-lg backdrop-blur-sm"
            style={{ backgroundColor: `${color}E6` }}
          >
            {blog.meta.category}
          </div>

          {/* Reading Time - adjusted positioning and size */}
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
            <Clock className="h-3 w-3" />
            {readingTime}min
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col p-6">
          {/* Meta Info */}
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Calendar className="h-4 w-4" />
            <span>{blog.formattedDate}</span>
          </div>

          {/* Title and Description */}
          <div className="mb-6 flex-grow space-y-3">
            <h3 className="line-clamp-2 text-xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#24BEE1] dark:text-slate-100">
              {blog.meta.title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {blog.meta.description}
            </p>
          </div>

          {/* Keywords */}
          {blog.meta.keywords && blog.meta.keywords.length > 0 && variant === 'default' && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {blog.meta.keywords.slice(0, 3).map((keyword, index) => (
                  <span
                    key={index}
                    className="rounded-md border border-slate-200 bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {keyword}
                  </span>
                ))}
                {blog.meta.keywords.length > 3 && (
                  <span className="px-2 py-1 text-xs text-slate-400 dark:text-slate-500">
                    +{blog.meta.keywords.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Footer Section */}
          <div className="mt-auto space-y-4">
            {/* Authors */}
            {authors.length > 0 && (
              <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
                {authors.length === 1 ? (
                  <div className="flex items-center gap-3">
                    <Image
                      src={authors[0].avatar}
                      alt={authors[0].name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-slate-900"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {authors[0].name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {authors[0].role}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {authors.slice(0, 3).map((author, index) => (
                        <div
                          key={author.id}
                          className="relative z-10 h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900"
                          style={{ zIndex: authors.length - index }}
                        >
                          <Image
                            src={author.avatar}
                            alt={author.name}
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        </div>
                      ))}
                      {authors.length > 3 && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600 ring-2 ring-white dark:bg-slate-700 dark:text-slate-400 dark:ring-slate-900">
                          +{authors.length - 3}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                        <Users className="h-4 w-4" />
                        <span>{authors.length} authors</span>
                      </div>
                      <p className="truncate text-xs text-slate-500 dark:text-slate-500">
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

            {/* Read More */}
            <div className="flex items-center gap-2 text-sm font-medium text-[#24BEE1] transition-all duration-300 group-hover:gap-3">
              Read Article
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
