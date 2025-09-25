// components/shared/BlogPosts.tsx
'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowRight, User } from 'lucide-react';
import { BlogCard } from './BlogCard';

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
        {displayedPosts.map((blog: BlogPost) => (
          <BlogCard
            key={blog.slug}
            blog={blog}
            estimateReadingTime={estimateReadingTime}
            variant="default"
          />
        ))}
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
