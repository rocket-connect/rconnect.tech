import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Main } from '@/components/shared/Main';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Container } from '@/components/shared/Container';
import BlogPosts from '@/components/shared/BlogPosts';
import { formatdate } from '@/lib/utils';
import { Hero } from '@/components/shared/Hero';
import { blog } from '@/content/blog';
import { SocialProofSection } from '@/components/templates/SocialProofSection';
import { Cta } from '@/components/shared/Cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Rconnect.tech',
  description: blog.hero.intro,
};

export default function Blog() {
  const blogDirectory = path.join(process.cwd(), 'content/posts');
  const fileNames = fs.readdirSync(blogDirectory);

  const blogs = fileNames.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data: frontMatter } = matter(fileContents);
    const formattedDate = formatdate(frontMatter.date);

    return {
      slug,
      formattedDate,
      meta: frontMatter,
    };
  });

  return (
    <Main>
      <Header />
      <Hero content={blog.hero} cta={true} />
      <Container className="mb-8 lg:py-2">
        <section>
          <BlogPosts allPosts={blogs} />
        </section>
      </Container>
      <SocialProofSection />
      <Cta />
      <Footer />
    </Main>
  );
}
