import { NextResponse } from 'next/server';
import db from './db';

// export async function GET() {
//   try {
//     const k = 0;
//     const users = [];
//     for (let i = k * 100; i < (k + 1) * 100; i++) {
//       const email = `swapnilganvir${i}gmail.com`;
//       const password = '12345678';
//       const description = 'some desc';
//       users.push([email, password, description]);
//     }

//     const [result] = await db.query(
//       'INSERT INTO user (email, password, description) VALUES ?',
//       [users]
//     );
//     return NextResponse.json({ data: result.affectedRows });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function GET() {
//   try {
//     const ids = ['swapnilganvir54gmil.com', 'swapnilganvir54@mail.com'];
//     const placeholders = ids.map(() => '?').join(', ');

//     const [rows] = await db.query(
//       `SELECT * FROM user where email IN (${placeholders})`,
//       ids
//     );
//     return NextResponse.json({ data: rows });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

export async function GET() {
  try {
    const [rows] = await db.query(`SELECT * FROM user`);
    return NextResponse.json({ data: rows });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const [result] = await db.query('SELECT * FROM user where email = ?', [
      email,
    ]);
    const user = result[0];

    if (!user) {
      return NextResponse.json({ message: 'Invalid Email!' });
    } else if (user.password === password) {
      return NextResponse.json({ message: 'Login Success!' });
    } else {
      return NextResponse.json({ message: 'Invalid Password!' });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
