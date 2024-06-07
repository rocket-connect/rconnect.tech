import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.METADATA_BASE_URL || "http://localhost:3000"
  ),
  openGraph: {
    images: "/images/blog-default-preview.jpg",
  },
};

const previewGoogleAnalytics = {
  analytics: "G-C14HJ0PDRJ",
};

const googleId = previewGoogleAnalytics;

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
    </html>
  );
}
