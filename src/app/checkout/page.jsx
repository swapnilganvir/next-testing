'use client';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaRegEye } from 'react-icons/fa';
import { GoEyeClosed } from 'react-icons/go';
import { StoreContext } from '@/context/StoreContext';

export default function CheckoutPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, getValues } = useForm();
  // const { errors } = formState;
  const router = useRouter();
  const { rememberUser } = useContext(StoreContext);

  async function Login() {
    try {
      const { email, password } = getValues();

      const { data } = await axios.post('/api/auth/login', { email, password });

      if (data.success) {
        // router.push('/dashboard');
        // rememberUser();
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div>
      <div className="py-3 px-5 shadow-sm">
        <Link href="/">
          <Image
            src="/uncram-logo-final.webp"
            alt="Uncram logo"
            width={119}
            height={24}
          />
        </Link>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div>
          <FaUser size={25} />
        </div>
        <h2 className="ml-1 text-3xl">Checkout Details</h2>
      </div>

      <div className="flex py-3 px-5">
        <div className="border-1 border-stone-300 pl-2 pr-7 py-1 text-lightBlue">
          Login (Existing User)
        </div>
        <div className="border-1 border-stone-300 pl-2 pr-7 py-1 border-l-0 hover:text-lightBlue">
          Signup (New User)
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-md px-10 py-8 m-3 rounded bg-white shadow-[0_0_3px_2px_rgba(0,0,0,0.1)]">
          <form onSubmit={handleSubmit(Login)}>
            <div className="mb-3">
              <div className="flex items-center">
                <div className="p-2">
                  <HiMail size={12} />
                </div>
                <input
                  id="email"
                  type="text"
                  defaultValue=""
                  placeholder="Email ID"
                  {...register('email', {
                    required: 'Please enter a valid Email',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                      message: 'Please enter a valid Email',
                    },
                  })}
                  className="w-full outline-none text-sm px-2 py-1 border-y-1 border-t-stone-100 border-b-stone-300 rounded-xs"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="flex items-center">
                <div className="p-2">
                  <FaLock size={12} />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  autoCorrect="off"
                  spellCheck="false"
                  placeholder="Password"
                  {...register('password', {
                    required: 'Required',
                    minLength: {
                      value: 8,
                      message: 'Password needs a minimum of 8 characters',
                    },
                  })}
                  className="flex-1 outline-none text-sm px-2 py-1 border-y-1 border-t-stone-100 border-b-stone-300 rounded-xs"
                />
                <div
                  onClick={() => setShowPassword(prev => !prev)}
                  className="p-2"
                >
                  {showPassword ? (
                    <GoEyeClosed size={12} />
                  ) : (
                    <FaRegEye size={12} />
                  )}
                </div>
              </div>
            </div>

            <div className="mb-2">
              <button className="bg-lightBlue text-darkBlue font-semibold p-1 w-full rounded cursor-pointer">
                Sign in
              </button>
            </div>
          </form>

          <div className="flex text-xs gap-2 justify-center">
            <button className="text-lightBlue">Forgot Password ??</button>
          </div>
        </div>
      </div>
    </div>
  );
}
