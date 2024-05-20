import { Button } from "../Button";
import { Container } from "./Container";

export const Cta = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-[#FCFCFF]  border-b border-[#E6E6FF] py-12">
      <Container className="flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="text-2xl lg:text-4xl font-bold">Connect with us now!</h2>
        <Button href="/contact">Contact us</Button>
      </Container>
    </div>
  );
};
