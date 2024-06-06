import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    images: "/images/blog-default-preview.jpg",
  },
};

const googleId = {
  analytics: "G-C14HJ0PDRJ",
  tagManager: "GTM-P7N8PKGV",
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

      <body className={rubik.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>

      <GoogleAnalytics gaId={googleId.analytics} />
      <GoogleTagManager gtmId={googleId.tagManager} />
    </html>
  );
}
