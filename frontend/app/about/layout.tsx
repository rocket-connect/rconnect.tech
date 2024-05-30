import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Services | Rconnect.tech",
  description: "We connect people through open source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
