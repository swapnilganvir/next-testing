import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function DELETE(req) {
  try {
    const { user_id, product_ids } = await req.json();

    if (!user_id || product_ids.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Invalid input',
      });
    }
    const values = [user_id, ...product_ids];
    const placeholders = product_ids.map(() => '?').join(', ');
    const sql = `DELETE FROM orders WHERE student_id = ? AND product_id IN (${placeholders})`;

    const [result] = await db.query(sql, values);

    if (result.affectedRows < 1) {
      return Response.json({
        success: false,
        message: 'Data not found',
      });
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
