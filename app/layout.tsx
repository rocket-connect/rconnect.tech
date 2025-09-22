import { Rubik } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import MCPConnectBanner from '@/components/shared/MCPConnectBanner';
import { sharedKeywords, baseDescription, organizationStructuredData } from '@/lib/seo';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.METADATA_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'Rocket Connect - Connecting People Through Open Source | AI Development Tools',
    template: '%s | Rocket Connect',
  },
  description: baseDescription,
  keywords: sharedKeywords,
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
      'Building and growing open source communities through technology, education, and collaboration. Creators of AI-powered API development tools: MCP Connect, GQLPT, GraphQL Debugger, and APIPT.',
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

        {/* Alternative URLs for MCP Connect */}
        <link
          rel="alternate"
          href="https://mcp.rconnect.tech/"
          title="MCP Connect - AI Debugging Tool"
        />

        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//mcp.rconnect.tech" />

        {/* Structured Data for Enhanced AI Tools SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body className={rubik.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MCPConnectBanner />
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={googleId.analytics} />
    </html>
  );
}
