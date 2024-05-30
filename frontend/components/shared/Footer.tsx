import { footer } from "@/content/footer";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <div className="w-full border-t border-[#E6E6FF] dark:border-[#1F344A] pt-4 pb-24">
      <Container>
        <div className="w-full flex flex-col lg:flex-row gap-12 items-start justify-between  flex-wrap">
          <div className="flex flex-col gap-2 flex-wrap">
            <Link href={footer.logo.href}>
              <Logo />
            </Link>
            <p className="text-xl">{footer.logo.title}</p>
          </div>
          {footer.menu.map((category, index) => (
            <div
              key={"footermenu-" + index}
              className="flex flex-col gap-3 flex-wrap"
            >
              <span className="text-xl font-bold">{category.name}</span>
              {category.links.map((link, index) => (
                <Link
                  key={"footerlink-" + index}
                  href={link.href}
                  className="text-lg hover:underline underline-offset-4"
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
