import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { parseToken } from '@/lib/server-utils';

export async function GET() {
  const cookies2 = await cookies();

  const token = cookies2.get('token')?.value;
  if (token) {
    const user = parseToken(token);
    return NextResponse.json({ success: true, user });
  }

  return NextResponse.json({ success: false, user: null });
}
