'use client';

import { header } from '@/content/header';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Logo } from './Logo';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <Container className="py-2 lg:py-2">
      <div className="flex w-full flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-12">
          <Link href={header.logo.href}>
            <Logo />
          </Link>
          {header.links.map((link, index) => (
            <Link
              key={'menulink-' + index}
              href={link.href}
              className="hidden font-medium text-foreground-main underline-offset-4 hover:underline dark:text-foreground-invert lg:block"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden gap-4 lg:flex">
          {header.socials.map((social, index) => (
            <a key={'menulink-' + index} href={social.href}>
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
          <div className="flex h-full w-full flex-col items-start justify-between gap-4">
            <div className="flex w-full flex-col items-start gap-4">
              <Link href={header.logo.href}>
                <Image src={header.logo.image} width={160} height={44} alt="" />
              </Link>
              {header.links.map((link, index) => (
                <Link
                  key={'menulink-' + index}
                  href={link.href}
                  className="w-full py-2 text-left font-medium text-foreground-main underline-offset-4 hover:underline dark:text-foreground-invert"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex w-full flex-row justify-between gap-4">
              {header.socials.map((social, index) => (
                <a key={'menulink-' + index} href={social.href}>
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
          className="h-[32px] w-[32px] rounded-full border-none bg-background-invert"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 fill-foreground-invert stroke-foreground-invert transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 fill-foreground-main stroke-foreground-main transition-all dark:rotate-0 dark:scale-100 dark:fill-foreground-invert dark:stroke-foreground-invert" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
