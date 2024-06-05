import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Main } from "@/components/shared/Main";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Container } from "@/components/shared/Container";
import BlogPosts from "@/components/shared/BlogPosts";
import { formatdate } from "@/lib/utils";

export default function Blog() {
  const blogDirectory = path.join(process.cwd(), "content/posts");
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
      <Container className="lg:py-2 mb-8">
        <h1 className="font-bold text-xl px-4 mt-12 mb-2">Rconnect blog</h1>
        <section>
          <BlogPosts allPosts={blogs} />
        </section>
      </Container>
      <Footer />
    </Main>
  );
}
