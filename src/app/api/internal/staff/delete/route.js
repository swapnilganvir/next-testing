import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    const [res] = await db.query(`DELETE FROM staff WHERE id = ?`, [id]);

    if (res.affectedRows < 1) {
      return Response.json({
        success: false,
        message: 'Staff not found',
      });
    }

    return Response.json({
      success: true,
      message: 'Staff deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
