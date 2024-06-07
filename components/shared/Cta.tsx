import { MoveRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Container } from './Container';
import Link from 'next/link';

export const Cta = () => {
  return (
    <div className="w-full border-b border-[#E6E6FF] bg-gradient-to-b from-white to-[#FCFCFF] py-12 dark:border-[#1F344A] dark:from-background-invert dark:to-[#1F344A]">
      <Container className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-bold text-foreground-main dark:text-foreground-invert lg:text-4xl">
          <span className="text-[#24BEE1]">Connect</span> with us now!
        </h2>
        <Link href="/contact">
          <Button>
            Contact us
            <MoveRight className="ml-2 h-5 w-5 transition-all ease-in group-hover:animate-bounce" />
          </Button>
        </Link>
      </Container>
    </div>
  );
};
