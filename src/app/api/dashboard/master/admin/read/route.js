import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await db.query(`SELECT * FROM admins`);
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function POST(req) {
  try {
    const { id } = await req.json();

    const [rows] = await db.query(`SELECT * FROM admins WHERE id = ?`, [id]);
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
