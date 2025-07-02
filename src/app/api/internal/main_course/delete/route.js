import { NextResponse } from 'next/server';
import db from '@/lib/db';

// if used, will need to change main-course-id in products also
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    const [res] = await db.query(`DELETE FROM main_course WHERE id = ?`, [id]);

    if (res.affectedRows < 1) {
      return Response.json({
        success: false,
        message: 'Main course not found',
      });
    }

    return Response.json({
      success: true,
      message: 'Main course deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
