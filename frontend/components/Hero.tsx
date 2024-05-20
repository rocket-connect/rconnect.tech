import { Button } from "./Button";
import { Container } from "./shared/Container";

interface WordColor {
  word: string;
  color: string;
}

interface HeroProps {
  content: {
    h1: { title: string; wordsToColor: WordColor[] };
    cta: { label: string; href: string };
  };
}

export const Hero = ({ content }: HeroProps) => {
  const pattern = new RegExp(
    `(${content.h1.wordsToColor
      ?.map((item: { word: string }) => item.word)
      .join("|")})`,
    "gi"
  );

  const parts = content.h1.title.split(pattern);
  return (
    <div className="w-full pt-24 pb-12">
      <Container className="flex flex-col items-center gap-6 max-w-2xl">
        <h1 className="text-3xl lg:text-6xl text-center font-bold leading-tight">
          {parts.map((part, index) => {
            const wordObject = content.h1.wordsToColor?.find(
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
        <Button href={content.cta.href}>{content.cta.label}</Button>
      </Container>
    </div>
  );
};
