import Link from 'next/link';
import { Button } from '../ui/button';
import { Container } from './Container';
import { MoveRight } from 'lucide-react';

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
    `(${content.h1?.wordsToColor?.map((item: { word: string }) => item.word).join('|')})`,
    'gi',
  );

  const parts = content.h1?.title.split(pattern);
  return (
    <div className="w-full pb-8 pt-12">
      <Container className="flex max-w-5xl flex-col items-start gap-2 lg:items-center">
        {content.tag && (
          <h3 className="w-full text-left text-lg font-bold uppercase tracking-widest text-foreground-accent lg:text-center">
            {content.tag}
          </h3>
        )}
        <h1 className="text-left text-3xl font-bold !leading-tight text-foreground-main dark:text-foreground-invert lg:text-center lg:text-5xl">
          {parts?.map((part, index) => {
            const wordObject = content.h1?.wordsToColor?.find(
              (item: { word: string }) => item.word.toLowerCase() === part.toLowerCase(),
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
          <p className="mt-1 w-full text-left text-lg text-foreground-main dark:text-foreground-invert lg:px-8 lg:text-center">
            {content.intro}
          </p>
        )}
        {cta && (
          <Link href={content.cta?.href ?? '/'} className="mt-4">
            <Button>
              {content.cta?.label}
              <MoveRight className="ml-2 h-5 w-5 transition-all ease-in group-hover:animate-bounce" />
            </Button>
          </Link>
        )}
      </Container>
    </div>
  );
};
