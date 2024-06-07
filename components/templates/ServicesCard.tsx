import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  name: string;
  content: string;
  image: string;
  href: string;
}

interface CardsProps {
  cards: CardProps[];
}

export const ServicesCard = ({ cards }: CardsProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
      {cards.map((card: any, index: number) => (
        <Card key={'servicescard-' + index} card={card} />
      ))}
    </div>
  );
};

const Card = ({ card }: any) => {
  return (
    <Link href={card.href}>
      <div className="overflow-hidden rounded-xl border border-[#EFEFEF] bg-background-main shadow-sm transition-all ease-in hover:scale-[1.01] hover:cursor-pointer hover:text-[#EEEEFB] hover:shadow-lg dark:border-[#1F344A] dark:bg-[#284360] hover:dark:text-[#1A2735]">
        <div className="aspec-video relative w-full">
          <div className="relative z-20 h-full bg-[#D1DBFF] mix-blend-multiply dark:bg-[#284360]" />
          <Image
            src={card.image}
            alt=""
            width={432}
            height={246}
            className="relative z-10 aspect-video w-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 p-6 text-left text-foreground-main">
          <h3 className="w-full truncate text-lg font-medium text-foreground-main dark:text-foreground-invert">
            {card.name}
          </h3>
          <p className="line-clamp-3 text-foreground-main dark:text-foreground-invert">
            {card.content}
          </p>
        </div>
      </div>
    </Link>
  );
};
