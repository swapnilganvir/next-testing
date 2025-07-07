'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const [colors] = ['#798bff', '#e5e9f2', '#1ee0ac', '#09c2de'];

export default function page({ params }) {
  const { id } = React.use(params);
  const { register, handleSubmit, getValues, formState, reset } = useForm();
  const { errors, isValid } = formState;
  const route = useRouter();

  async function getStaffById() {
    try {
      const { data } = await axios.post('/api/internal/staff/read', { id });

      if (data.success) {
        const staff = data.data[0];
        reset(staff);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  async function updateStaff() {
    try {
      const staff_info = getValues();
      const { data } = await axios.put(
        '/api/internal/staff/update',
        staff_info
      );
      // console.log(data, 'data');

      alert(data.message);
      if (data.success) {
        route.push('/admin/master/staff');
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getStaffById();
  }, []);

  return (
    <div className="p-7 bg-gray-100">
      <div className="flex justify-between items-center pb-7">
        <h3 className="font-semibold text-2xl lg:text-3xl leading-tight tracking-tight text-slate-700 dark:text-white mb-2">
          Update Staff
        </h3>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <div className="border rounded-md bg-white border-gray-300 dark:bg-gray-950 dark:border-gray-900">
            <div className="p-5 sm:p-6">
              <h5 className="text-xl text-slate-600 leading-tight font-bold mb-5">
                Staff Information
              </h5>

              <form onSubmit={handleSubmit(updateStaff)}>
                <div className="mb-5 last:mb-0">
                  <label
                    htmlFor="name"
                    className="inline-block text-sm font-medium text-slate-700 dark:text-white cursor-pointer mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Required' })}
                    className="block w-full box-border text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950  disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed transition-all focus:z-10 text-sm leading-4.5 py-1.5 h-9 rounded px-4"
                  />
                </div>

                <div className="mb-5 last:mb-0">
                  <label
                    htmlFor="email"
                    className="inline-block text-sm font-medium text-slate-700 dark:text-white cursor-pointer mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    {...register('email', {
                      required: 'Please enter a valid Email',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                        message: 'Please enter a valid Email',
                      },
                    })}
                    className="block w-full box-border text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950  disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed transition-all focus:z-10 text-sm leading-4.5 py-1.5 h-9 rounded px-4"
                  />
                </div>

                <div className="mb-5 last:mb-0">
                  <label
                    htmlFor="password"
                    className="inline-block text-sm font-medium text-slate-700 dark:text-white cursor-pointer mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    {...register('password', {
                      required: 'Required',
                      minLength: {
                        value: 8,
                        message: 'Password needs a minimum of 8 characters',
                      },
                    })}
                    className="block w-full box-border text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950  disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed transition-all focus:z-10 text-sm leading-4.5 py-1.5 h-9 rounded px-4"
                  />
                </div>

                <div className="mb-5 last:mb-0">
                  <label
                    htmlFor="type"
                    className="inline-block text-sm font-medium text-slate-700 dark:text-white cursor-pointer mb-2"
                  >
                    Type
                  </label>
                  <select
                    id="type"
                    {...register('type', { required: 'Required' })}
                    className="block w-1/2 box-border text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950  disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed transition-all focus:z-10 text-sm leading-4.5 py-1.5 px-4 h-9 rounded"
                  >
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>

                <div className="mb-5 last:mb-0">
                  <button
                    className={`relative inline-flex items-center text-center align-middle border transition-all duration-300 whitespace-nowrap border-primary-600 text-white bg-primary-600 hover:bg-primary-700 hover:border-primary-700 text-base font-bold leading-4.5 px-6 py-3 tracking-wide rounded-md ${
                      isValid ? 'cursor-pointer' : 'cursor-not-allowed'
                    }`}
                  >
                    Update Information
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
