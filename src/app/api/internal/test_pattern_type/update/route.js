import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PUT(req) {
  try {
    const { id, name } = await req.json();

    const [res] = await db.query(
      `UPDATE test_pattern_type SET name = ? WHERE id = ?`,
      [name, id]
    );

    if (res.affectedRows < 1) {
      return Response.json({
        success: false,
        message: 'Test pattern not found',
      });
    }

    return Response.json({
      success: true,
      message: 'Test pattern updated successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
