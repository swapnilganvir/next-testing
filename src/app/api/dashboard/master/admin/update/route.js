import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcrypt';

export async function PUT(req) {
  try {
    const { id, name, email, password } = await req.json();

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

    const query = Object.keys(data)
      .map(key => `${key} = ?`)
      .join(', ');
    const values = Object.values(data);
    values.push(id);

    const [res] = await db.query(
      `UPDATE admins SET ${query} WHERE id = ?`,
      values
    );

    if (res.affectedRows < 1) {
      return Response.json({
        success: false,
        message: 'Admin not found',
      });
    }

    return Response.json({
      success: true,
      message: 'Admin updated successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
