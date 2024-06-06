import { cn } from "@/src/lib/utils";

interface ContainerProps {
  children: any;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto px-4 flex flex-col py-4 lg:py-12",
        className
      )}
    >
      {children}
    </div>
  );
};
