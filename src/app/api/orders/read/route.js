import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req) {
  try {
    const { user_id } = await req.json();

    const [rows] = await db.query(
      `SELECT * FROM orders WHERE student_id = ?`,
      user_id
    );
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
