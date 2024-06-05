import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "./Container";
import { MoveRight } from "lucide-react";

interface WordColor {
  word: string;
  color: string;
}

interface HeroProps {
  content: {
    h1?: { title: string; wordsToColor?: WordColor[] };
    cta?: { label: string; href: string };
    tag?: string;
    intro?: string;
  };
  cta?: boolean;
}

export const Hero = ({ content, cta = false }: HeroProps) => {
  const pattern = new RegExp(
    `(${content.h1?.wordsToColor
      ?.map((item: { word: string }) => item.word)
      .join("|")})`,
    "gi"
  );

  const parts = content.h1?.title.split(pattern);
  return (
    <div className="w-full pt-12 pb-8">
      <Container className="flex flex-col items-start lg:items-center gap-2 max-w-5xl">
        {content.tag && (
          <h3 className="w-full text-md text-left lg:text-center font-bold text-[#24BEE1] uppercase tracking-widest">
            {content.tag}
          </h3>
        )}
        <h1 className="text-3xl lg:text-5xl text-left lg:text-center font-bold !leading-tight">
          {parts?.map((part, index) => {
            const wordObject = content.h1?.wordsToColor?.find(
              (item: { word: string }) =>
                item.word.toLowerCase() === part.toLowerCase()
            );

            return wordObject ? (
              <span key={index} style={{ color: wordObject.color }}>
                {part}
              </span>
            ) : (
              part
            );
          })}
        </h1>
        {content.intro && (
          <p className="text-left lg:text-center w-full mt-1 lg:px-8 text-lg">
            {content.intro}
          </p>
        )}
        {cta && (
          <Link href={content.cta?.href ?? "/"} className="mt-4">
            <Button>
              {content.cta?.label}
              <MoveRight className="w-5 h-5 ml-2 group-hover:animate-bounce transition-all ease-in	" />
            </Button>
          </Link>
        )}
      </Container>
    </div>
  );
};
