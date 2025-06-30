import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const cookies2 = await cookies();

  const token = cookies2.get('token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/dashboard'],
};
