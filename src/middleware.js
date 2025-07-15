import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const cookies2 = await cookies();

  console.log('I am middleware!');

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = cookies2.get('token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (
    request.nextUrl.pathname.startsWith('/master-admin') &&
    request.nextUrl.pathname !== '/master-admin/login'
  ) {
    const token_master = cookies2.get('token_master')?.value;
    if (!token_master) {
      return NextResponse.redirect(new URL('/master-admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/master-admin/:path*'],
};
