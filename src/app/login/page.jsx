'use client';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { GoEyeClosed } from 'react-icons/go';
import { StoreContext } from '@/context/StoreContext';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, getValues } = useForm();
  // const { errors } = formState;
  const router = useRouter();
  const { rememberUser } = useContext(StoreContext);

  async function Login() {
    try {
      const email = 'swapnilganvir54@gmail.com';
      const { password } = getValues();

      const { data } = await axios.post('/api/auth/login', { email, password });

      router.push('/dashboard');
      if (data.success) {
        rememberUser();
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div
      style={{ backgroundImage: "url('/geometric-bg.jpg')" }}
      className="h-screen flex justify-center items-center bg-no-repeat bg-center"
    >
      <div className="w-md px-10 py-8 m-3 rounded bg-white shadow-[0_0_3px_2px_rgba(0,0,0,0.1)]">
        <div className="flex justify-center mb-10">
          <Image
            src="/uncram-logo-final.webp"
            alt="Uncram logo"
            width={119}
            height={24}
          />
        </div>

        <form onSubmit={handleSubmit(Login)}>
          <div className="mb-3">
            <div className="flex items-center">
              <div className="p-2">
                <FaPhone size={12} />
              </div>
              <input
                id="mobile"
                type="text"
                placeholder="Contact"
                onInput={e => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}
                {...register('mobile', {
                  required: 'Required',
                  validate: val =>
                    val.length === 10 || 'Please enter 10 digit mobile number',
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
                placeholder="New password"
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
          <div>
            <label>
              New User
              <button className="text-lightBlue ml-1">Register</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
