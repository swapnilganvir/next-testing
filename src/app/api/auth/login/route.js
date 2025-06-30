import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import db from '@/lib/db';
import { createToken } from '@/lib/server-utils';

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const [result] = await db.query('SELECT * FROM students where email = ?', [
      email,
    ]);
    if (result.length < 1) {
      return NextResponse.json({ success: false, message: 'Invalid Email!' });
    }

    const user = result[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json({
        success: false,
        message: 'Invalid Password!',
      });
    }
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
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
