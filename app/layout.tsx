import { Rubik } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.METADATA_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'Rocket Connect - Connecting People Through Open Source',
    template: '%s | Rocket Connect',
  },
  description:
    'Rocket Connect helps build and grow open source communities through technology, education, and collaboration.',
  keywords: ['open source', 'community', 'technology', 'software development', 'collaboration'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.METADATA_BASE_URL,
    siteName: 'Rocket Connect',
    images: '/images/blog-default-preview.png',
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocket Connect - Connecting People Through Open Source',
    description:
      'Building and growing open source communities through technology, education, and collaboration.',
    images: '/images/blog-default-preview.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const googleId = {
  analytics: process.env.GA_KEY || '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="canonical" href={process.env.METADATA_BASE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a2735" />
      </head>
      <body className={rubik.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={googleId.analytics} />
    </html>
  );
}
