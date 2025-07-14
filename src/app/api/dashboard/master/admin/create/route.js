import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import bcrypt from 'bcrypt';
import db from '@/lib/db';

export async function POST(req) {
  try {
    const form = await req.formData();
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const inputFile = form.get('inputFile');

    const is_valid_email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!is_valid_email) {
      return NextResponse.json({ success: false, message: 'Invalid email' });
    }

    if (password.length < 8) {
      return NextResponse.json({
        success: false,
        message: 'Password needs a minimum of 8 characters',
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    let image_url = '';
    if (inputFile) {
      const bytes = await inputFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${inputFile.name}`;
      const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);
      await writeFile(filePath, buffer);
      image_url = `/uploads/${fileName}`;
    }

    await db.query(
      `INSERT INTO admins (name, email, password, image_url) VALUES (?, ?, ?, ?)`,
      [name, email, hashedPassword, image_url]
    );

    return Response.json({
      success: true,
      message: 'Admin added successfully',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
