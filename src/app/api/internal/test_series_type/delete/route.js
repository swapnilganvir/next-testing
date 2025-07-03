import { NextResponse } from 'next/server';
import db from '@/lib/db';

// if used, will need to change test_series_type id in products also
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    const [res] = await db.query(`DELETE FROM test_series_type WHERE id = ?`, [
      id,
    ]);

    if (res.affectedRows < 1) {
      return Response.json({
        success: false,
        message: 'Test series not found',
      });
    }

    return Response.json({
      success: true,
      message: 'Test series deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
