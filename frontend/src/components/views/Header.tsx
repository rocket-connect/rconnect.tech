import { Container } from "../utils/Container";
import { Link } from "../utils/Link";
import { Logo } from "../utils/Logo";

export function Header() {
  return (
    <div className="bg-white fixed w-full py-3 border-b-4 border-rocket-connect-darkblue">
      <Container>
        <div className="flex justify-between content-center">
          <div className="w-5">
            <a href="#home">
              <Logo />
            </a>
          </div>

          <nav>
            <ul className="flex">
              <li className="mr-6">
                <Link color="darkblue" content="Services" href="#services" />
              </li>
              <li className="mr-6">
                <Link color="darkblue" content="Join" href="#join" />
              </li>
              <li className="mr-6">
                <Link color="darkblue" content="Contact" href="#contact" />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
}
