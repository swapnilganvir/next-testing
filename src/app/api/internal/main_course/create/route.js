import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req) {
  try {
    const { name } = await req.json();

    await db.query(`INSERT INTO main_course (name) VALUES (?)`, [
      name.toUpperCase(),
    ]);

    return Response.json({
      success: true,
      message: 'Main course added successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
