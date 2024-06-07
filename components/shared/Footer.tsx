import { footer } from '@/content/footer';
import Link from 'next/link';
import { Container } from './Container';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <div className="mt-auto w-full border-t border-[#E6E6FF] pb-24 pt-4 dark:border-[#1F344A]">
      <Container>
        <div className="flex w-full flex-col flex-wrap items-start justify-between gap-12 lg:flex-row">
          <div className="flex flex-col flex-wrap gap-2">
            <Link href={footer.logo.href}>
              <Logo />
            </Link>
            <p className="pl-2 text-lg text-foreground-main dark:text-foreground-invert">
              {footer.logo.title}
            </p>
          </div>
          {footer.menu.map((category, index) => (
            <div key={'footermenu-' + index} className="flex flex-col flex-wrap gap-3">
              <span className="text-xl font-bold text-foreground-main dark:text-foreground-invert">
                {category.name}
              </span>
              {category.links.map((link, index) => (
                <Link
                  key={'footerlink-' + index}
                  href={link.href}
                  className="text-base text-foreground-main underline-offset-4 hover:underline dark:text-foreground-invert"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
