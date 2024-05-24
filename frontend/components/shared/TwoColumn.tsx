import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface TwoColumnProps {
  children: any;
  index: number;
}

export const TwoColumn = ({ children, index }: TwoColumnProps) => {
  const isOdd = index % 2 === 1;
  return (
    <div className="w-full py-12">
      <Container
        className={cn(
          "flex gap-16 items-center",
          isOdd ? "flex-row-reverse" : "flex-row"
        )}
      >
        {children}
      </Container>
    </div>
  );
};
