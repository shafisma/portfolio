import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the hostname starts with 'www.'
  if (request.nextUrl.hostname.startsWith('www.')) {
    const newUrl = new URL(request.nextUrl.toString());
    
    // Remove 'www.' from the hostname
    newUrl.hostname = newUrl.hostname.replace('www.', '');
    
    // Return a 301 redirect to the non-www version
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml
     * - robots.txt
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
