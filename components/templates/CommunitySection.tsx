import { Button } from '../ui/button';
import { Container } from '../shared/Container';
import Image from 'next/image';
import Link from 'next/link';

interface CommunityProps {
  content: {
    title: string;
    featured: {
      embed: string;
      title: string;
      desc: string;
    };
    videos: { href: string; image: string; title: string; desc: string }[];
  };
}

export const CommunitySection = ({ content }: CommunityProps) => {
  return (
    <Container className="gap-8">
      <div className="mr-auto flex flex-col gap-4">
        <h2 className="mr-auto text-3xl font-bold text-foreground-main dark:text-foreground-invert">
          {content.title}
        </h2>
      </div>
      <div className="flex w-full flex-col gap-8 lg:grid lg:grid-cols-3">
        <div className="col-span-2 w-full">
          <iframe
            src={content.featured.embed}
            title={content.featured.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video w-full rounded-xl"
          />
          <div className="flex flex-col gap-2 py-6">
            <h3 className="text-2xl font-medium text-foreground-main dark:text-foreground-invert">
              {content.featured.title}
            </h3>
            <p className="text-foreground-main dark:text-foreground-invert">
              {content.featured.desc}
            </p>
          </div>
        </div>
        <div className="flex h-fit w-full flex-col gap-8 lg:grid lg:grid-cols-1 lg:grid-rows-5">
          {content.videos.map((video, index) => (
            <a
              key={'vdo-' + index}
              href={video.href}
              className="group grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-2"
            >
              <Image
                src={video.image}
                className="aspect-video w-full rounded-lg object-cover transition-all ease-in group-hover:scale-105"
                alt=""
                width={200}
                height={100}
              />
              <div className="flex flex-col gap-2">
                <h4 className="text-md line-clamp-2 font-medium text-foreground-main dark:text-foreground-invert">
                  {video.title}
                </h4>
                <p className="line-clamp-3 text-sm leading-tight text-foreground-main dark:text-foreground-invert">
                  {video.desc}
                </p>
              </div>
            </a>
          ))}
          <div className="w-full">
            <Link href="https://www.youtube.com/@rocket-connect">
              <Button className="w-full">Watch more</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
