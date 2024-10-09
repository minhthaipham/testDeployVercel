import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const privateRoutes = ['/dashboard', '/'];
const authRoutes = ['/auth/login'];

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('accessToken');
  const isHaveCookie = cookie?.value && cookie?.value !== '';
  if (privateRoutes.includes(request.nextUrl.pathname) && !isHaveCookie) {
    return NextResponse.rewrite(new URL('/auth/login', request.url));
  }
  if (authRoutes.includes(request.nextUrl.pathname) && isHaveCookie) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  if (request.nextUrl.pathname === '/' && isHaveCookie) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  return NextResponse.next();
}

export default middleware;

export const config = {
  matcher: [...privateRoutes, ...authRoutes],
};
