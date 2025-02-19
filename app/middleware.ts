import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  if (url.pathname.endsWith('/') && url.pathname.length > 1) {
    return NextResponse.redirect(new URL(url.pathname.slice(0, -1), request.url));
  }

  const redirects = {
    '/index': '/',
    '/index.html': '/',
    '/home': '/',
  };

  const redirectUrl = redirects[url.pathname as keyof typeof redirects];
  if (redirectUrl) {
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
