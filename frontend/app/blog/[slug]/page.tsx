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
import { cn, formatdate } from "@/lib/utils";
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
    title: `${props.frontMatter.title} | Rconnect.tech`,
    metadataBase: new URL("https://rconnect.tech/"),
    openGraph: {
      images: ["/images/blog-default-preview.jpg", ...previousImages],
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

  const categoryColors = () => {
    switch (props.frontMatter.category) {
      case "community":
        return "text-sky-500";
      case "engineering":
        return "text-amber-500";
      case "customer stories":
        return "text-orange-500";
      case "company news":
        return "text-purple-500";
      default:
        return null;
    }
  };

  return (
    <Main>
      <Header />
      <Container className="lg:py-0">
        <div className="max-w-2xl mx-auto relative">
          <Link href={"/blog"}>
            <div className="hidden lg:flex sticky left-0 top-24 -ml-24 bg-background-main border border-neutral-300 rounded-full items-center justify-center w-10 h-10 hover:scale-[1.03] hover:shadow-sm transition-all ease-in z-10">
              <ChevronLeft className="w-6 h-6 stroke-neutral-500" />
            </div>
          </Link>
          <article className="prose prose-sm md:prose-base lg:prose-lg mx-auto  prose-ol:list-decimal prose-ul:list-disc">
            <div className="w-full flex items-center gap-4">
              <div
                className={cn("uppercase text-md font-bold", categoryColors())}
              >
                {props.frontMatter.category}
              </div>
              <div className="text-slate-600">{formattedDate}</div>
            </div>
            <h1 className="text-4xl font-bold">{props.frontMatter.title}</h1>
            <MDXRemote source={props.content} components={components} />
          </article>
        </div>
      </Container>
      <Cta />
      <Footer />
    </Main>
  );
}
