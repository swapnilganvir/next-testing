import { NextResponse } from 'next/server';
import fs, { unlink } from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';
import db from '@/lib/db';

export async function POST(req) {
  let filePath = '';
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
      const fileName = `${Date.now()}-${inputFile.name}`;
      filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

      const stream = fs.createWriteStream(filePath);
      const bufferedImage = await inputFile.arrayBuffer();
      stream.write(Buffer.from(bufferedImage), error => {
        if (error) {
          throw new Error('Saving image failed!');
        }
      });
      stream.end();
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
    // delete created image, if insertion of entry fails
    if (filePath) {
      unlink(filePath, err => {
        if (err) {
          console.log('Error deleting file.');
        }
      });
    }
    return NextResponse.json({ success: false, message: error.message });
  }
}
