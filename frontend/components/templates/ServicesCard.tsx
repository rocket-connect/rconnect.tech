import Image from "next/image";

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
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {cards.map((card: any, index: number) => (
        <Card key={"servicescard-" + index} card={card} />
      ))}
    </div>
  );
};

const Card = ({ card }: any) => {
  return (
    <div className="border border-[#EFEFEF] dark:border-[#1F344A] shadow-sm rounded-xl overflow-hidden">
      <div className="relative aspec-video w-full">
        <div className="relative z-20 mix-blend-multiply bg-[#D1DBFF] dark:bg-[#1F344A] h-full" />
        <Image
          src={card.image}
          alt=""
          width={432}
          height={246}
          className="relative z-10 w-full object-cover aspect-video"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 items-start justify-center text-left text-foreground-main p-6">
        <h3 className="text-lg font-medium truncate w-full">{card.name}</h3>
        <p className="line-clamp-3">{card.content}</p>
      </div>
    </div>
  );
};
