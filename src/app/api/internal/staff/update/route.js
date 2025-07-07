import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcrypt';

export async function PUT(req) {
  try {
    const { id, name, email, password, type } = await req.json();

    let data = {};

    if (name) {
      data = { ...data, name };
    }

    if (email) {
      const is_valid_email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

      if (!is_valid_email) {
        return NextResponse.json({ success: false, message: 'Invalid email' });
      }
      data = { ...data, email };
    }

    if (password) {
      if (password.length < 8) {
        return NextResponse.json({
          success: false,
          message: 'Password needs a minimum of 8 characters',
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      data = { ...data, password: hashedPassword };
    }

    const types = ['admin', 'teacher'];
    if (type) {
      if (!types.includes(type.toLowerCase())) {
        return NextResponse.json({
          success: false,
          message: 'Invalid staff type',
        });
      }
      data = { ...data, type };
    }

    const query = Object.keys(data)
      .map(key => `${key} = ?`)
      .join(', ');
    const values = Object.values(data);
    values.push(id);

    const [res] = await db.query(
      `UPDATE staff SET ${query} WHERE id = ?`,
      values
    );

    if (res.affectedRows < 1) {
      return Response.json({
        success: false,
        message: 'Staff not found',
      });
    }

    return Response.json({
      success: true,
      message: 'Staff updated successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
