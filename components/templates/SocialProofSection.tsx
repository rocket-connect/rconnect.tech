import Image from 'next/image';
import { Container } from '../shared/Container';
import { socialProof } from '../../content/socialproof';
interface SocialProofProps {
  content?: {
    title: string;
    logos: {
      image: string;
      href: string;
    }[];
  };
}

export const SocialProofSection = ({ content = socialProof }: SocialProofProps) => {
  return (
    <Container className="gap-8 pb-8">
      <h2 className="lg:text-md text-center text-lg font-bold text-[#607388] lg:text-center">
        {content.title}
      </h2>
      <div className="grid w-full grid-cols-3 items-center justify-center gap-x-4 gap-y-2 lg:flex lg:flex-row lg:flex-wrap lg:gap-x-24 lg:gap-y-4">
        {content.logos.map((logo, index) => (
          <div key={'logo-' + index} className="h-[40px] w-[100px]">
            <a
              href={logo.href}
              className="relative inline-block h-[40px] w-[100px] transition-all ease-in hover:scale-105"
            >
              <Image
                src={logo.image}
                fill
                alt=""
                className="aspect-video h-full w-full object-contain py-1 dark:brightness-[0%] dark:invert-[100%]"
              />
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
};
