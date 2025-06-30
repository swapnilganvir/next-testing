import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { username, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await db.query(
      'INSERT INTO students (username, email, password) VALUES (?, ?, ?)',
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
