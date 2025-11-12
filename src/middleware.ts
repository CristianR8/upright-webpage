import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/favicon.ico') {
    const url = request.nextUrl.clone();
    url.pathname = '/images/u_isotipo-removebg-preview.png';
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/favicon.ico'],
};

