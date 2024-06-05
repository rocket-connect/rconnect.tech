import { header } from "@/content/header";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <Container className="py-2 lg:py-2">
      <div className="w-full flex flex-row gap-4 justify-between items-center">
        <div className="flex gap-12 items-center">
          <Link href={header.logo.href}>
            <Logo />
          </Link>
          {header.links.map((link, index) => (
            <Link
              key={"menulink-" + index}
              href={link.href}
              className="hidden lg:block hover:underline underline-offset-4 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden gap-4 lg:flex">
          {header.socials.map((social, index) => (
            <a key={"menulink-" + index} href={social.href} target="_blank">
              <Image src={social.image} width={32} height={32} alt="" />
            </a>
          ))}
        </div>
        <MobileMenu />
      </div>
    </Container>
  );
};

const MobileMenu = () => {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="w-full h-full  flex flex-col gap-4 justify-between items-start">
            <div className="w-full flex gap-4 items-start flex-col">
              <Link href={header.logo.href}>
                <Image src={header.logo.image} width={160} height={44} alt="" />
              </Link>
              {header.links.map((link, index) => (
                <Link
                  key={"menulink-" + index}
                  href={link.href}
                  className="w-full hover:underline underline-offset-4 font-medium py-2 text-left dark:text-[#1A2735]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="w-full gap-4 flex flex-row justify-between">
              {header.socials.map((social, index) => (
                <a key={"menulink-" + index} href={social.href} target="_blank">
                  <Image src={social.image} width={32} height={32} alt="" />
                </a>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
