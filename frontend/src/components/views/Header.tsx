import { ReactNode } from "react";
import { Container } from "../utils/Container";
import { Logo } from "../utils/Logo";

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

interface DropdownItemProps {
  title: string;
  children: ReactNode[];
}

export function Header() {
  return (
    <div className="bg-white fixed w-full py-2 bg-rocket-connect-lightgrey">
      <Container>
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="#" className="flex items-center">
              <span className="w-8">
                <Logo />
              </span>
              <span className="ml-5 self-center font-bold italic whitespace-nowrap text-rocket-connect-darkblue">
                Rocket Connect
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-rocket-connect-darkblue rounded-lg md:hidden"
              aria-controls="navbar-dropdown"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`w-full md:block md:w-auto md:pl-5`}
              id="navbar-dropdown"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                <NavItem href="#home">Home</NavItem>
                <NavItem href="#contact">Contact</NavItem>
                <NavItem href="#services">Services</NavItem>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
