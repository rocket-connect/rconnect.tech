import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import YouTube from '@/components/shared/Youtube';
import Code from '@/components/shared/Code';
import { Cta } from '@/components/shared/Cta';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { Main } from '@/components/shared/Main';
import { Container } from '@/components/shared/Container';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { categoryColor, cn, formatdate, metadataBase } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const props = await getPost(params);

  return {
    title: `Blog | ${props.frontMatter.title}`,
    description: props.frontMatter.description,
    metadataBase,
    openGraph: {
      images: props.frontMatter.hero,
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
        <div className="relative mx-auto max-w-2xl">
          <Link href={'/blog'}>
            <div className="sticky left-0 top-24 z-10 -ml-24 hidden h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-background-main transition-all ease-in hover:scale-[1.03] hover:shadow-sm dark:border-slate-600 dark:bg-background-invert lg:flex">
              <ChevronLeft className="h-6 w-6 stroke-slate-500 dark:stroke-slate-400" />
            </div>
          </Link>
          <article>
            <div className="flex w-full items-center gap-1">
              <div className={cn('text-md font-bold uppercase')} style={{ color }}>
                {props.frontMatter.category}
              </div>
              <div className="text-slate-600 dark:text-slate-400">· {formattedDate}</div>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground-main dark:text-foreground-invert">
              {props.frontMatter.title}
            </h1>
            <Image
              className="mb-4 rounded-xl"
              alt={props.frontMatter.title}
              width={800}
              height={500}
              src={props.frontMatter.hero as string}
            />
            <div className="prose-a:text-bold prose prose-sm mx-auto text-foreground-main md:prose-base lg:prose-lg prose-headings:text-foreground-main prose-a:text-foreground-main prose-a:visited:text-foreground-main prose-ol:list-decimal prose-ul:list-disc dark:text-foreground-invert dark:prose-headings:text-foreground-invert dark:prose-a:text-foreground-invert prose-a:dark:visited:text-foreground-invert">
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
