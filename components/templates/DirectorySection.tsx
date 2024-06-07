import { ArrowRight } from 'lucide-react';
import { Container } from '../shared/Container';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../ui/carousel';
import Image from 'next/image';

export const DirectorySection = ({ content }: { content: any }) => {
  return (
    <div className="w-full py-8">
      <Container className="gap-8 overflow-hidden xl:overflow-visible">
        <h2 className="mr-auto text-3xl font-bold text-foreground-main dark:text-foreground-invert">
          {content.title}
        </h2>
        <p className="max-w-xl text-foreground-main dark:text-foreground-invert">{content.info}</p>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent className="w-full">
            {content.events.map(
              (
                event: {
                  href: string;
                  eventName: string;
                  image: string;
                  logo: string;
                  youtube: string;
                  meetup: string;
                },
                index: number,
              ) => (
                <CarouselItem key={'direvent' + index} className="basis-1/1">
                  <div className="relative flex h-[450px] w-[300px] flex-col justify-between overflow-hidden rounded-xl border border-[#E6E6FF] bg-zinc-400 p-8 dark:border-[#546C87]">
                    <div className="relative z-20 ml-auto flex flex-col items-end gap-2">
                      <a
                        href={event.href}
                        className="flex items-center gap-4 text-lg text-white hover:underline"
                      >
                        Learn More
                        <ArrowRight className="-rotate-45 stroke-white" />
                      </a>
                    </div>
                    <Image
                      src={event.logo}
                      className="relative z-20 object-contain"
                      alt=""
                      width={245}
                      height={80}
                    />

                    <div className="absolute left-0 top-0 z-10 h-full w-full">
                      <Image
                        src={event.image}
                        alt=""
                        width={300}
                        height={450}
                        className="h-full w-full object-cover opacity-60"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ),
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </div>
  );
};
