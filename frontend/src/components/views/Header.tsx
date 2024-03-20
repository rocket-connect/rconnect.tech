import { Container } from "../utils/Container";
import { Logo } from "../utils/Logo";

export function Header() {
  return (
    <div className="bg-white w-full py-2 bg-rocket-connect-lightgrey">
      <Container>
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="#contact" className="flex items-center">
              <span className="w-6 sm:w-8">
                <Logo />
              </span>
              <span className="ml-3 self-center font-bold whitespace-nowrap text-rocket-connect-darkblue">
                connect.tech
              </span>
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
}
