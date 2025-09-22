// components/shared/BlogPosts.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { AuthorCard } from './AuthorCard';
import { categoryColor } from '@/lib/utils';
import { getAuthor } from '@/content/authors';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';

interface BlogPost {
  slug: string;
  formattedDate: string;
  meta: {
    title: string;
    description: string;
    hero: string;
    category: string;
    author?: string;
    keywords?: string[];
    readingTime?: number;
  };
}

const BlogPosts = ({ allPosts }: { allPosts: BlogPost[] }) => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.formattedDate).getTime() - new Date(a.formattedDate).getTime(),
  );

  const postsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedPosts, setDisplayedPosts] = useState(posts.slice(0, postsPerPage));

  const loadMorePosts = () => {
    const nextPage = currentPage + 1;
    const newPosts = posts.slice(0, nextPage * postsPerPage);
    setDisplayedPosts(newPosts);
    setCurrentPage(nextPage);
  };

  // Calculate reading time if not provided
  const estimateReadingTime = (description: string): number => {
    const wordsPerMinute = 200;
    const words = description.split(' ').length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  };

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {displayedPosts.map((blog: BlogPost) => {
          const color = categoryColor(blog.meta.category);
          const author = getAuthor(blog.meta.author || 'team-rconnect');
          const readingTime = blog.meta.readingTime || estimateReadingTime(blog.meta.description);

          return (
            <article
              key={blog.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <Link href={`/blog/${blog.slug}`} className="flex h-full flex-col">
                {/* Hero Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.meta.hero}
                    width={400}
                    height={240}
                    alt={blog.meta.title}
                    className="aspect-[5/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div
                    className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold uppercase text-white shadow-lg backdrop-blur-sm"
                    style={{ backgroundColor: `${color}E6` }}
                  >
                    {blog.meta.category}
                  </div>

                  {/* Reading Time */}
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    {readingTime} min
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
                  {blog.meta.keywords && blog.meta.keywords.length > 0 && (
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
                    {/* Author */}
                    {author && (
                      <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
                        <AuthorCard author={author} size="sm" />
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
        })}
      </div>

      {/* Load More Button */}
      {allPosts.length > postsPerPage && displayedPosts.length < allPosts.length && (
        <div className="text-center">
          <Button onClick={loadMorePosts} className="px-8 py-3">
            Load More Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Showing {displayedPosts.length} of {allPosts.length} articles
          </p>
        </div>
      )}

      {/* All Posts Loaded Message */}
      {displayedPosts.length >= allPosts.length && allPosts.length > postsPerPage && (
        <div className="py-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            <User className="h-4 w-4" />
            All {allPosts.length} articles loaded
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
