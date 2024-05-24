import { Button } from "../ui/button";
import { Container } from "../shared/Container";
import Image from "next/image";
import Link from "next/link";

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
      <h2 className="text-3xl font-bold mr-auto">{content.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="w-full col-span-2">
          <iframe
            src={content.featured.embed}
            title={content.featured.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video w-full rounded-xl"
          />
          <div className="py-6 flex flex-col gap-2">
            <h3 className="text-2xl font-medium">{content.featured.title}</h3>
            <p>{content.featured.desc}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-5 gap-4">
          {content.videos.map((video, index) => (
            <a
              key={"vdo-" + index}
              href={video.href}
              className="w-full grid grid-cols-2 gap-4 items-center "
            >
              <Image
                src={video.image}
                className="aspect-video w-full rounded-lg"
                alt=""
                width={200}
                height={100}
              />
              <div className="flex flex-col gap-2">
                <h4 className="text-md font-medium line-clamp-2">
                  {video.title}
                </h4>
                <p className="line-clamp-3 text-sm leading-tight">
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
