import { Container } from "./Container";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export function Header() {
  return (
    <div className="bg-rocket-connect-lightgrey w-full py-3">
      <Container>
        <div className="flex justify-between content-center">
          <div className="header-logo w-8">
            <Logo />
          </div>

          <div className="header-nav w-30 py-2">
            <Nav />
          </div>
        </div>
      </Container>
    </div>
  );
}
