import { Container } from "../utils/Container";
import { Logo } from "../utils/Logo";
import { socials } from "./Contact";

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
              <span className="ml-5 hidden md:block self-center font-bold whitespace-nowrap text-rocket-connect-darkblue">
                connect.tech
              </span>
            </a>

            <div className="flex gap-10">
              {socials.map((item, index) => (
                <a key={index} href={item.url} className="hover:opacity-75">
                  <img
                    className="h-6 sm:h-8"
                    src={item.logoDark}
                    alt="Social Logo"
                  />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
