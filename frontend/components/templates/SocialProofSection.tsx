import Image from "next/image";
import { Container } from "../shared/Container";
import { socialProof } from "../../content/socialproof";
interface SocialProofProps {
  content?: {
    title: string;
    logos: {
      image: string;
      href: string;
    }[];
  };
}

export const SocialProofSection = ({
  content = socialProof,
}: SocialProofProps) => {
  return (
    <Container className="gap-8 pb-8">
      <h2 className="text-lg lg:text-md font-bold text-center lg:text-center text-[#607388]">
        {content.title}
      </h2>
      <div className="w-full grid grid-cols-3 lg:flex lg:flex-row lg:flex-wrap gap-x-4 lg:gap-x-24 gap-y-2 lg:gap-y-4 items-center justify-center">
        {content.logos.map((logo, index) => (
          <div key={"logo-" + index} className="w-[100px] h-[40px]">
            <a
              href={logo.href}
              className="inline-block w-[100px] h-[40px] hover:scale-105 transition-all ease-in"
              target="_blank"
            >
              <Image
                src={logo.image}
                width={100}
                height={40}
                alt=""
                className="w-full h-full object-contain aspect-video py-1 dark:invert-[100%] dark:brightness-[0%]"
              />
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
};
