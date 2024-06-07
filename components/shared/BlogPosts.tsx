'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { categoryColor } from '@/lib/utils';

const BlogPosts = ({ allPosts }: { allPosts: any }) => {
  const posts = allPosts.sort(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (a, b) => new Date(b.formattedDate) - new Date(a.formattedDate),
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

  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {displayedPosts.map((blog: any) => {
          const color = categoryColor(blog.meta.category);
          return (
            <li
              key={blog.slug}
              className="overflow-hidden rounded-xl border border-[#E6E6FF] bg-[#F1F6FA] transition-all ease-in hover:scale-[1.01] hover:bg-[#FAFCFD] hover:text-[#EEEEFB] hover:shadow-lg dark:border-[#546C87] dark:bg-[#1F344A] hover:dark:bg-[#284360] hover:dark:text-[#1A2735]"
            >
              <Link href={`/blog/${blog.slug}`}>
                <Image
                  src={blog.meta.hero}
                  width={400}
                  height={250}
                  alt={blog.meta.title}
                  className="aspect-video w-full object-cover object-top"
                />
                <div className="px-4 py-4 text-foreground-main dark:text-foreground-invert">
                  <h3 className="line-clamp-2 text-xl font-bold">{blog.meta.title}</h3>
                  <div className="mt-3 flex items-center gap-1 text-sm font-medium">
                    <div className="font-bold uppercase" style={{ color }}>
                      {blog.meta.category}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">· {blog.formattedDate}</div>
                  </div>
                  <div className="line-clamp-3">{blog.meta.description}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {allPosts.length > 12 && (
        <Button onClick={loadMorePosts} disabled={displayedPosts.length >= allPosts.length}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default BlogPosts;
