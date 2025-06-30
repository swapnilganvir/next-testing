'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
// import { signIn } from 'next-auth/react';

export default function RegisterPage() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    const { data } = await axios.post('/api/auth/register', form);

    if (data.success) {
      alert('Registered successfully. Please login.');
      router.push('/login');
    } else {
      alert(data.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-hero">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Register
        </button>
        <div className="pt-4 border-t border-gray-200 text-center">
          <div className="flex justify-center gap-6 mt-2">
            <Link
              href="/login"
              className="flex items-center gap-2 text-black hover:text-blue-600 transition"
            >
              <FiLogIn size={20} />
              <span className="text-sm font-medium">Login</span>
            </Link>
            <button
              // onClick={() => signIn('google')}
              className="flex items-center gap-2 text-black hover:text-blue-600 transition"
            >
              <FcGoogle size={20} />
              <span className="text-sm font-medium">Sign Up with Google</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
