"use client";

import { header } from "@/src/content/header";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Logo } from "./Logo";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { Button } from "../ui/button";

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
              className="hidden lg:block hover:underline underline-offset-4 font-medium text-foreground-main dark:text-foreground-invert"
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
          <ModeToggle />
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
          <Menu className="stroke-foreground-main dark:stroke-slate-400" />
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
                  className="w-full hover:underline underline-offset-4 font-medium py-2 text-left text-foreground-main dark:text-foreground-invert"
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
              <ModeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const ModeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none h-[32px] w-[32px] bg-background-invert"
        >
          <Sun className="stroke-foreground-invert  fill-foreground-invert h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="fill-foreground-main dark:fill-foreground-invert stroke-foreground-main dark:stroke-foreground-invert absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
