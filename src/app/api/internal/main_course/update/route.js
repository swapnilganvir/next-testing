import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PUT(req) {
  try {
    const { id, name } = await req.json();

    const [res] = await db.query(
      `UPDATE main_course SET name = ? WHERE id = ?`,
      [name.toUpperCase(), id]
    );

    if (res.affectedRows < 1) {
      return Response.json({
        success: false,
        message: 'Main course not found',
      });
    }

    return Response.json({
      success: true,
      message: 'Main course updated successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
