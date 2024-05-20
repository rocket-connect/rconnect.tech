import { cn } from "@/lib/utils";
import { ArrowRightIcon, MoveRight } from "lucide-react";
import Link from "next/link";
interface ButtonProps {
  children: any;
  href?: string;
  className?: string;
}
export const Button = ({ children, href, className }: ButtonProps) => {
  return (
    <Link
      href={href ?? ""}
      className={cn(
        "group inline-flex gap-4 items-center justify-center px-6 py-3 w-fit rounded-full bg-background-accent text-white",
        className
      )}
    >
      {children}
      <MoveRight className="w-5 h-5 ml-2 group-hover:animate-bounce transition-all ease-in	" />
    </Link>
  );
};
