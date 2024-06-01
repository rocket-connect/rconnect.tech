import { ArrowRight } from "lucide-react";
import { Container } from "../shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Image from "next/image";

export const DirectorySection = ({ content }: { content: any }) => {
  return (
    <div className="w-full py-12">
      <Container className="gap-8 overflow-hidden">
        <h2 className="text-3xl font-bold mr-auto">{content.title}</h2>
        <p>{content.info}</p>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
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
                index: number
              ) => (
                <CarouselItem key={"direvent" + index} className="lg:basis-1/4">
                  <div className="relative w-[300px] h-[450px] bg-zinc-400 p-8 rounded-xl flex flex-col justify-between overflow-hidden border border-[#E6E6FF] dark:border-[#546C87]">
                    <div className="ml-auto relative z-20 flex flex-col gap-2 items-end">
                      {event.youtube !== "" && (
                        <a
                          href={event.youtube}
                          className=" flex gap-4 text-white hover:underline text-lg items-center"
                          target="_blank"
                        >
                          Youtube
                          <ArrowRight className="stroke-white -rotate-45" />
                        </a>
                      )}
                      {event.meetup !== "" && (
                        <a
                          href={event.meetup}
                          className="flex gap-4 text-white hover:underline text-lg items-center"
                          target="_blank"
                        >
                          Meetup
                          <ArrowRight className="stroke-white -rotate-45" />
                        </a>
                      )}
                    </div>
                    <Image
                      src={event.logo}
                      className="relative z-20 object-contain"
                      alt=""
                      width={245}
                      height={80}
                    />

                    <div className="absolute z-10 w-full h-full top-0 left-0 ">
                      <Image
                        src={event.image}
                        alt=""
                        width={300}
                        height={450}
                        className="w-full h-full opacity-60 object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          {/* @ts-ignore */}
          <CarouselPrevious />
          {/* @ts-ignore */}
          <CarouselNext />
        </Carousel>
      </Container>
    </div>
  );
};
