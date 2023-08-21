import { ReactNode } from "react";
import { Container } from "../utils/Container";
import { Logo } from "../utils/Logo";
import { Navbar } from "flowbite-react";

interface NavItemProps {
  href: string;
  children: ReactNode;
  dropdownId?: string;
}

function NavItem({ href, children, dropdownId }: NavItemProps) {
  return (
    <li className="font-bold">
      <a
        href={href}
        className="block py-2 pl-3 pr-4 text-rocket-connect-darkblue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rocket-connect-lightblue md:p-0"
        onClick={(e) => {
          if (dropdownId) {
            const ulElement = document.getElementById(dropdownId);

            if (ulElement) {
              ulElement.setAttribute("data-dropdown-toggle", "false");
            }
          }
        }}
      >
        {children}
      </a>
    </li>
  );
}

export function Header() {
  return (
    <div className="bg-white fixed w-full py-2 bg-rocket-connect-lightgrey">
      <Container>
        <Navbar fluid rounded>
          <Navbar.Brand as="a" href="#" className="flex items-center">
            <span className="w-8">
              <Logo />
            </span>
            <span className="ml-5 self-center font-bold italic whitespace-nowrap text-rocket-connect-darkblue">
              Rocket Connect
            </span>
          </Navbar.Brand>
          <Navbar.Toggle className="text-rocket-connect-darkblue" />
          <Navbar.Collapse>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 text-base">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#contact">Contact</NavItem>
              <NavItem href="#services">Services</NavItem>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
