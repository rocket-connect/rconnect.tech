import { Button } from "../ui/button";
import { ServicesCard } from "./ServicesCard";
import { Container } from "../shared/Container";

interface sectionProps {
  content: {
    title: string;
    list: { name: string; content: string; image: string; href: string }[];
    cta: { label: string; href: string };
  };
}

export const ServicesSection = ({ content }: sectionProps) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#FCFCFF] to-white border-t border-[#E6E6FF]">
      <Container className="gap-8 justify-center items-center">
        <h2 id={"service-section"} className="text-3xl font-bold mr-auto">
          {content.title}
        </h2>
        <ServicesCard cards={content.list} />
        <Button href={content.cta.href}>{content.cta.label}</Button>
      </Container>
    </div>
  );
};
