import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    const is_valid_email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    if (!is_valid_email) {
      return NextResponse.json({ success: false, message: 'Invalid email' });
    }

    if (password.length < 8) {
      return NextResponse.json({
        success: false,
        message: 'Password needs a minimum of 8 characters',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      `INSERT INTO students (username, email, password) VALUES (?, ?, ?)`,
      [username, email, hashedPassword]
    );

    return Response.json({
      success: true,
      message: 'User registered successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
