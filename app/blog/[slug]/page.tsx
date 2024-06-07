import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import YouTube from "@/components/shared/Youtube";
import Code from "@/components/shared/Code";
import { Cta } from "@/components/shared/Cta";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/shared/Main";
import { Container } from "@/components/shared/Container";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { categoryColor, cn, formatdate, metadataBase } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const props = await getPost(params);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Blog | ${props.frontMatter.title}`,
    description: props.frontMatter.description,
    metadataBase,
    openGraph: {
      images: [props.frontMatter.hero, ...previousImages],
    },
  };
}

async function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("content/posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content/posts"));
  const params = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
  return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const props = await getPost(params);
  const components = {
    pre: Code,
    YouTube,
  };

  const formattedDate = formatdate(props.frontMatter.date);
  const color = categoryColor(props.frontMatter.category);

  return (
    <Main>
      <Header />
      <Container className="lg:py-0">
        <div className="max-w-2xl mx-auto relative">
          <Link href={"/blog"}>
            <div className="hidden lg:flex sticky left-0 top-24 -ml-24 bg-background-main dark:bg-background-invert border border-slate-300 dark:border-slate-600 rounded-full items-center justify-center w-10 h-10 hover:scale-[1.03] hover:shadow-sm transition-all ease-in z-10">
              <ChevronLeft className="w-6 h-6 stroke-slate-500 dark:stroke-slate-400" />
            </div>
          </Link>
          <article>
            <div className="w-full flex items-center gap-1 ">
              <div
                className={cn("uppercase text-md font-bold")}
                style={{ color }}
              >
                {props.frontMatter.category}
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                · {formattedDate}
              </div>
            </div>
            <h1 className="text-foreground-main dark:text-foreground-invert text-4xl font-bold mb-4">
              {props.frontMatter.title}
            </h1>
            <div className="prose text-foreground-main dark:text-foreground-invert prose-sm md:prose-base lg:prose-lg mx-auto  prose-ol:list-decimal prose-ul:list-disc prose-headings:text-foreground-main dark:prose-headings:text-foreground-invert prose-a:text-bold prose-a:visited:text-foreground-main prose-a:dark:visited:text-foreground-invert prose-a:text-foreground-main dark:prose-a:text-foreground-invert">
              <MDXRemote source={props.content} components={components} />
            </div>
          </article>
        </div>
      </Container>
      <Cta />
      <Footer />
    </Main>
  );
}
