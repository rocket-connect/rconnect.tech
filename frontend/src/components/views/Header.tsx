import { Container } from "../utils/Container";
import { Logo } from "../utils/Logo";

export function Header() {
  return (
    <div className="bg-white fixed w-full py-3 border-b-4 border-rocket-connect-darkblue">
      <Container>
        <div className="flex justify-between content-center">
          <div className="w-5">
            <Logo />
          </div>
        </div>
      </Container>
    </div>
  );
}
