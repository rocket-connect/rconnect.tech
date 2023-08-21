import React, { ReactNode } from "react";
import { Container } from "../utils/Container";
import { Logo } from "../utils/Logo";
import { services } from "./Services";
import { socials } from "./Contact";

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

function DropdownItem({ title, children }: DropdownItemProps) {
  const dropdownId = `dropdown${title.replace(" ", "")}`;

  return (
    <li className="font-bold">
      <button
        id={`${dropdownId}Link`}
        data-dropdown-toggle={dropdownId}
        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-rocket-connect-darkblue rounded hover:bg-rocket-connect-lightgrey hover:text-rocket-connect-lightblue md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
      >
        {title}{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5 text-rocket-connect-darkblue"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id={dropdownId}
        className={`z-10 font-normal hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-64`}
      >
        <ul className={`p-5 text-sm text-gray-700 flex flex-col gap-5`}>
          {children.map((child: any) => {
            return React.cloneElement(child, { dropdownId });
          })}
        </ul>
      </div>
    </li>
  );
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
                <NavItem href="#contact">Contact</NavItem>
                <DropdownItem title="Services">
                  {services.map((service) => (
                    <NavItem key={service.title} href={`#${service.link}`}>
                      {service.title}
                    </NavItem>
                  ))}
                </DropdownItem>
                <DropdownItem title="Socials">
                  {socials.map((social) => (
                    <NavItem key={social.text} href={social.url}>
                      {social.text}
                    </NavItem>
                  ))}
                </DropdownItem>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
