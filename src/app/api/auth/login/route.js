import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { createToken } from '@/lib/server-utils';

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const [result] = await db.query('SELECT * FROM students where email = ?', [
      email,
    ]);
    const user = result[0];
    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid Email!' });
    } else if (user.password === password) {
      const token = createToken(user);
      const res = NextResponse.json({
        success: true,
        message: 'Login Success!',
      });
      res.cookies.set('token', token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
        secure: true,
      });
      return res;
    } else {
      return NextResponse.json({
        success: false,
        message: 'Invalid Password!',
      });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
