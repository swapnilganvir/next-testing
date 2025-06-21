'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { GoEyeClosed } from 'react-icons/go';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  // const { errors } = formState;

  async function onSubmit() {
    const email = 'swapnilganvir54@gmail.com';
    const { password } = getValues();

    const res = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    // reset();
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

        <form onSubmit={handleSubmit(onSubmit)}>
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
};

export default Login;
