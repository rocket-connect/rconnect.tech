import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "./Container";
import Link from "next/link";

export const Cta = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white dark:from-background-main to-[#FCFCFF] dark:to-[#1F344A] border-b border-[#E6E6FF] dark:border-[#1F344A] py-12">
      <Container className="flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="text-2xl lg:text-4xl font-bold">Connect with us now!</h2>
        <Link href="/contact">
          <Button>
            Contact us
            <MoveRight className="w-5 h-5 ml-2 group-hover:animate-bounce transition-all ease-in	" />
          </Button>
        </Link>
      </Container>
    </div>
  );
};
