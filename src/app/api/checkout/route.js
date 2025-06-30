import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req) {
  const { user, cart } = await req.json();

  if (cart.length === 0) {
    return NextResponse.json({
      success: false,
      message: 'No orders to insert',
    });
  }

  const values = [];
  const placeholders = cart
    .map(order => {
      values.push(user.id, order.id);
      return '(?, ?)';
    })
    .join(', ');

  const sql = `INSERT INTO orders (student_id, product_id) VALUES ${placeholders}`;

  try {
    await db.query(sql, values);
    return NextResponse.json({ success: true, message: 'Orders added!' });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
