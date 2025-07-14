import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import bcrypt from 'bcrypt';
import db from '@/lib/db';

export async function PUT(req) {
  try {
    const form = await req.formData();
    const id = form.get('id');
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const inputFile = form.get('inputFile');

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

    if (inputFile) {
      const bytes = await inputFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${inputFile.name}`;
      const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);
      await writeFile(filePath, buffer);
      const image_url = `/uploads/${fileName}`;
      data = { ...data, image_url };
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
