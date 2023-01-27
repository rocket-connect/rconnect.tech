import { Container } from "../utils/Container";
import { Logo } from "../utils/Logo";

export function Header() {
  return (
    <div className="bg-white w-full py-3 z-10 border-b-rocket-connect-darkblue border-4">
      <Container>
        <div className="flex justify-between content-center">
          <div className="w-10">
            <Logo />
          </div>
        </div>
      </Container>
    </div>
  );
}
