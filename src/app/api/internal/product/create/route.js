import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req) {
  try {
    const data = await req.json();

    const columns = Object.keys(data).join(', ');
    const placeholders = Object.keys(data)
      .map(key => '?')
      .join(', ');
    const values = Object.values(data);

    await db.query(
      `INSERT INTO products (${columns}) VALUES (${placeholders})`,
      values
    );

    return Response.json({
      success: true,
      message: 'Product added successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
