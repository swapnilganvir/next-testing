'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';

import BackgroundGlow from '@/components/admin/BackgroundGlow';
import ActionsDropdown from '@/components/admin/ActionsDropdown';

const [colors] = ['#798bff', '#e5e9f2', '#1ee0ac', '#09c2de'];

export default function page() {
  const [staff, setStaff] = useState([]);

  async function getStaff() {
    try {
      const { data } = await axios.get('/api/internal/staff/read');

      // console.log(data, 'data');

      if (data.success) {
        setStaff(data.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getStaff();
  }, []);

  return (
    <div className="p-7 bg-gray-100">
      <div className="flex justify-between items-center pb-7">
        <div>
          <h3 className="font-semibold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white mb-2">
            Main Course List
          </h3>
        </div>

        <div className="hidden sm:flex items-center gap-4 py-5 sm:py-0">
          <div className="flex items-center text-center align-middle text-sm font-bold rounded px-6 py-2 border bg-white text-slate-600 border-gray-300 hover:bg-slate-600 hover:text-white hover:border-slate-600 dark:bg-gray-900 dark:text-slate-200 dark:border-gray-900 hover:dark:bg-gray-800 hover:dark:text-white  hover:dark:border-gray-800 active:text-white active:bg-slate-700 active:border-slate-600 transition-all duration-300">
            <span className="me-3 hidden sm:inline">
              <IoCloudDownloadOutline size={20} />
            </span>
            <span>Export</span>
          </div>

          <div className="ms-auto">
            <Link
              href="/admin/master/add-staff"
              className="flex items-center text-sm font-bold rounded p-2 border border-primary-600 text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all duration-300"
            >
              <FaPlus size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-y sm:border-x sm:rounded-md bg-white border-gray-300 dark:border-gray-900 sm:m-0">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <button className="size-5 rounded-full bg-slate-600"></button>
            </div>

            <div className="flex gap-2.5">
              <BackgroundGlow>
                <FiSearch size={20} className="text-slate-600" />
              </BackgroundGlow>

              <div className="h-9 border-s border-gray-200 dark:border-gray-800"></div>

              <BackgroundGlow>
                <IoSettingsOutline size={20} className="text-slate-600" />
              </BackgroundGlow>
            </div>
          </div>
        </div>

        <table className="w-full border-gray-300 dark:border-gray-900">
          <thead>
            <tr>
              <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start w-12 sm:w-13">
                <input
                  type="checkbox"
                  className="peer h-4 w-4 bg-white dark:bg-gray-950 checked:bg-primary-600 checked:dark:bg-primary-600 checked:hover:bg-primary-600 checked:hover:dark:bg-primary-600 checked:focus:bg-primary-600 checked:focus:dark:bg-primary-600 focus:border-primary-600 focus:dark:border-primary-600 outline-none focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-900 disabled:checked:bg-primary-400 disabled:checked:dark:bg-primary-400 rounded border-2 border-gray-300 dark:border-gray-900 checked:dark:border-primary-600 cursor-pointer disabled:cursor-not-allowed transition-all duration-300"
                  id="cid-all"
                />
              </th>

              <th className="py-2 px-2 first:ps-6 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                <p className="text-sm text-slate-400 font-normal">Name</p>
              </th>

              <th className="py-2 px-2 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                <p className="text-sm text-slate-400 font-normal">Email</p>
              </th>

              <th className="py-2 px-2 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                <p className="text-sm text-slate-400 font-normal">Password</p>
              </th>

              <th className="py-2 px-2 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                <p className="text-sm text-slate-400 font-normal">Type</p>
              </th>

              <th className="py-2 px-2 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-end">
                <p className="text-sm text-slate-400 font-normal">Action</p>
              </th>
            </tr>
          </thead>

          <tbody>
            {staff.map(user => (
              <tr
                key={user.id}
                className="transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-50 group"
              >
                <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 w-12 sm:w-13">
                  <input
                    type="checkbox"
                    className="peer h-4 w-4 bg-white dark:bg-gray-950 checked:bg-primary-600 checked:dark:bg-primary-600 checked:hover:bg-primary-600 checked:hover:dark:bg-primary-600 checked:focus:bg-primary-600 checked:focus:dark:bg-primary-600 focus:border-primary-600 focus:dark:border-primary-600 outline-none focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-900 disabled:checked:bg-primary-400 disabled:checked:dark:bg-primary-400 rounded border-2 border-gray-300 dark:border-gray-900 checked:dark:border-primary-600 cursor-pointer disabled:cursor-not-allowed transition-all duration-300"
                    id="cid-1"
                  />
                </td>

                <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                  <a href="#" className="flex items-center">
                    <div
                      className={`relative flex-shrink-0 flex items-center justify-center text-xs text-white  h-7 w-7 rounded-full font-medium ${
                        user.id % 2 ? 'bg-primary-600' : 'bg-red-600'
                      }`}
                    >
                      <span>BG</span>
                    </div>
                    <span className="ms-3 block text-xs font-medium text-slate-700 dark:text-white">
                      {user.name}
                      <span className="h-2 w-2 inline-block rounded-full bg-green-600 lg:hidden ms-1"></span>
                    </span>
                  </a>
                </td>

                <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden sm:table-cell">
                  <span className="text-sm text-slate-400">{user.email}</span>
                </td>

                <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden sm:table-cell">
                  <span className="text-sm text-slate-400">
                    {user.password}
                  </span>
                </td>

                <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden sm:table-cell">
                  <span
                    className={`text-sm font-medium ${
                      user.type === 'admin'
                        ? 'text-[#1ee0ac]'
                        : 'text-[#09c2de]'
                    }`}
                  >
                    {user.type}
                  </span>
                </td>

                <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden sm:table-cell ">
                  <span className="flex justify-end">
                    <ActionsDropdown user={user} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
