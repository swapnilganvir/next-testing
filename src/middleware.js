import { NextResponse } from 'next/server';

export async function middleware(req) {
  console.log('I am middleware!');

  // if ther is an error, then we redirect to error page, then it will redirect login after a timeout

  // return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
  matcher: ['/cart'],
};
