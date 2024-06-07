import { Button } from '../ui/button';
import { ServicesCard } from './ServicesCard';
import { Container } from '../shared/Container';
import Link from 'next/link';

interface sectionProps {
  content: {
    title: string;
    list: {
      name: string;
      content: string;
      image: string;
      href: string;
    }[];
    cta: { label: string; href: string };
  };
}

export const ServicesSection = ({ content }: sectionProps) => {
  return (
    <div className="w-full border-t border-[#E6E6FF] bg-gradient-to-b from-[#FCFCFF] to-white dark:border-[#1F344A] dark:bg-gradient-to-b dark:from-[#1F344A] dark:to-background-invert">
      <Container className="items-center justify-center gap-8">
        <div className="mr-auto flex flex-col gap-4">
          <h2
            id={'service-section'}
            className="text-foreground mr-auto text-3xl font-bold dark:text-foreground-invert"
          >
            {content.title}
          </h2>
        </div>
        <ServicesCard cards={content.list} />
        <Link href={content.cta.href}>
          <Button>{content.cta.label}</Button>
        </Link>
      </Container>
    </div>
  );
};
