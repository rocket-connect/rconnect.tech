import Image from "next/image";
import { Container } from "./shared/Container";

interface SocialProofProps {
  content: {
    title: string;
    logos: {
      image: string;
      href: string;
    }[];
  };
}

export const SocialProofSection = ({ content }: SocialProofProps) => {
  return (
    <Container className="gap-8">
      <h2 className="text-md font-bold text-center text-[#607388]">
        {content.title}
      </h2>
      <div className="w-full flex flex-row flex-wrap gap-x-24 gap-y-4 items-center justify-center">
        {content.logos.map((logo, index) => (
          <div key={"logo-" + index} className="w-[100px] h-[40px]">
            <a
              href={logo.href}
              className="inline-block w-[100px] h-[40px]"
              target="_blank"
            >
              <Image
                src={logo.image}
                width={100}
                height={40}
                alt=""
                className="w-full h-full object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
};
