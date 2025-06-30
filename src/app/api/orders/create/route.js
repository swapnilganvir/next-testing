import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req) {
  try {
    const { user_id, product_ids } = await req.json();

    if (!user_id || product_ids.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Invalid input',
      });
    }

    const [rows] = await db.query(
      `SELECT * FROM orders WHERE student_id = ?`,
      user_id
    );
    const old_product_ids = rows.map(p => Number(p.product_id));
    const new_product_ids = product_ids.filter(
      id => !old_product_ids.includes(id)
    );
    if (new_product_ids.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Already present',
      });
    }

    const values = [];
    const placeholders = new_product_ids
      .map(id => {
        values.push(user_id, id);
        return '(?, ?)';
      })
      .join(', ');

    const sql = `INSERT INTO orders (student_id, product_id) VALUES ${placeholders}`;

    const [result] = await db.query(sql, values);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
