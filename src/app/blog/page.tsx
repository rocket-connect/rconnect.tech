import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Main } from "@/src/components/shared/Main";
import { Header } from "@/src/components/shared/Header";
import { Footer } from "@/src/components/shared/Footer";
import { Container } from "@/src/components/shared/Container";
import BlogPosts from "@/src/components/shared/BlogPosts";
import { formatdate } from "@/src/lib/utils";
import { Hero } from "@/src/components/shared/Hero";
import { blog } from "@/src/content/blog";
import { SocialProofSection } from "@/src/components/templates/SocialProofSection";
import { Cta } from "@/src/components/shared/Cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rconnect.tech",
  description: "We connect people through open source.",
};

export default function Blog() {
  const blogDirectory = path.join(process.cwd(), "src/content/posts");
  const fileNames = fs.readdirSync(blogDirectory);

  const blogs = fileNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

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
      <Container className="lg:py-2 mb-8">
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
