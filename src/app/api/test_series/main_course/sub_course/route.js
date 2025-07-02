import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req) {
  try {
    const { main_course_name, sub_course_name } = await req.json();

    const [rows] = await db.query(
      `SELECT p.*
FROM main_course mc 
JOIN products p on mc.id = p.main_course_id 
JOIN sub_course sc on p.sub_course_id = sc.id 
WHERE mc.name = ? and sc.name = ?`,
      [main_course_name, sub_course_name]
    );
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
