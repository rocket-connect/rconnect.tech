import { Container } from "../utils/Container";
import { Logo } from "../utils/Logo";
import { Nav } from "../utils/Nav";

export function Header() {
  return (
    <div className="bg-white w-full py-3 fixed z-10 border-b-rocket-connect-darkblue border-4">
      <Container>
        <div className="flex justify-between content-center">
          <div className="w-8">
            <Logo />
          </div>
        </div>
      </Container>
    </div>
  );
}
