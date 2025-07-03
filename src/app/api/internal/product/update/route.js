import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PUT(req) {
  try {
    const { id, ...data } = await req.json();

    const query = Object.keys(data)
      .map(key => `${key} = ?`)
      .join(', ');
    const values = Object.values(data);
    values.push(id);

    const [res] = await db.query(
      `UPDATE products SET ${query} WHERE id = ?`,
      values
    );

    if (res.affectedRows < 1) {
      return Response.json({
        success: false,
        message: 'Product not found',
      });
    }

    return Response.json({
      success: true,
      message: 'Product updated successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
