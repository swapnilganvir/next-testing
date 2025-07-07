import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    const { name, email, password, type } = await req.json();

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

    const types = ['admin', 'teacher'];
    if (!types.includes(type.toLowerCase())) {
      return NextResponse.json({
        success: false,
        message: 'Invalid staff type',
      });
    }

    await db.query(
      `INSERT INTO staff (name, email, password, type) VALUES (?, ?, ?, ?)`,
      [name, email, hashedPassword, type]
    );

    return Response.json({
      success: true,
      message: 'Staff added successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
