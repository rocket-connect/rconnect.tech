"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const BlogPosts = ({ allPosts }: { allPosts: any }) => {
  const posts = allPosts.sort(
    // @ts-ignore
    (a, b) => new Date(b.formattedDate) - new Date(a.formattedDate)
  );
  const postsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedPosts, setDisplayedPosts] = useState(
    posts.slice(0, postsPerPage)
  );

  const loadMorePosts = () => {
    const nextPage = currentPage + 1;
    const newPosts = posts.slice(0, nextPage * postsPerPage);
    setDisplayedPosts(newPosts);
    setCurrentPage(nextPage);
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <ul className="grid grid-cols-3 gap-4">
        {displayedPosts.map((blog: any) => (
          <li
            key={blog.slug}
            className="border border-[#E6E6FF] dark:border-[#546C87] bg-[#F1F6FA] dark:bg-[#1F344A] rounded-xl hover:bg-[#1A2736] hover:dark:bg-[#EEEEFB] hover:text-[#EEEEFB] hover:dark:text-[#1A2735] hover:scale-[1.01] transition-all ease-in hover:shadow-lg overflow-hidden"
          >
            <Link href={`/blog/${blog.slug}`}>
              <Image
                src={blog.meta.hero}
                width={400}
                height={250}
                alt={blog.meta.title}
                className="object-cover object-top w-full aspect-video"
              />
              <div className="px-4 py-4 ">
                <h3 className="font-bold text-xl line-clamp-2">
                  {blog.meta.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm mt-3 font-medium">
                  <div className="uppercase text-[#FFBF14]">
                    {blog.meta.category}
                  </div>{" "}
                  · <div>{blog.formattedDate}</div>
                </div>
                <div className="line-clamp-2">{blog.meta.description}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {allPosts.length > 12 && (
        <Button
          onClick={loadMorePosts}
          disabled={displayedPosts.length >= allPosts.length}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default BlogPosts;
