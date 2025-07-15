'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa6';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaRegMoon } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';

const Links = [
  {
    icon: AiOutlineUser,
    name: 'View Profile',
  },
  {
    icon: IoSettingsOutline,
    name: 'Account Setting',
  },

  {
    icon: FiLogOut,
    name: 'Sign out',
  },
];

function MyLink({ Icon, name }) {
  return (
    <li>
      <Link
        className="px-7 py-2.5 flex items-center rounded-[inherit] leading-5 font-medium text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:dark:text-primary-600 transition-all duration-300"
        href={`${name === 'Sign out' ? '/login' : ''}`}
      >
        <span>
          <Icon size={18} />
        </span>
        <span className="ms-2">{name}</span>
      </Link>
    </li>
  );
}

export default function ProfileDropdown() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="group flex cursor-pointer">
        <div className="flex justify-center items-center h-8 w-8 rounded-full bg-primary-500">
          <AiOutlineUser fill="#e5e9f2" />
        </div>

        <div className="hidden md:block ms-4">
          <div className="text-xs font-medium leading-none pt-0.5 pb-1.5 text-primary-500 group-hover:text-primary-600">
            Admin Panel
          </div>

          <div className="flex items-center text-slate-600  text-xs font-bold dark:text-white">
            <span>Uncram</span>
            <span className="ms-1">
              <FaAngleDown size={10} />
            </span>
          </div>
        </div>
      </div>

      <div
        tabIndex={0}
        className="dropdown-content mt-3 max-xs:min-w-[240px] max-xs:max-w-[240px] min-w-[280px] max-w-[280px] bg-white border border-t-3 border-gray-200  border-t-primary-500 dark:border-gray-800 dark:border-t-primary-600 dark:bg-gray-950 rounded shadow z-100"
      >
        <div className="hidden sm:block px-7 py-5 bg-slate-50 border-b border-gray-200 dark:bg-slate-900 dark:border-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center justify-center text-sm text-white bg-primary-500 h-10 w-10 rounded-full font-medium">
              <span>UN</span>
            </div>
            <div className="ms-4 flex flex-col">
              <span className="text-sm font-bold text-slate-700 dark:text-white">
                Uncram
              </span>
              <span className="text-xs text-slate-400 mt-1">
                info@softnio.com
              </span>
            </div>
          </div>
        </div>

        <ul className="py-3">
          <MyLink Icon={Links[0].icon} name={Links[0].name} />

          <MyLink Icon={Links[1].icon} name={Links[1].name} />

          <li>
            <div
              onClick={() => setDarkMode(prev => !prev)}
              className="px-7 py-2.5 flex items-center rounded-[inherit] leading-5 font-medium text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:dark:text-primary-600 transition-all duration-300 cursor-pointer"
            >
              {darkMode ? (
                <div className="flex dark:flex items-center">
                  <span>
                    <FiSun size={18} />
                  </span>
                  <span className="ms-2">Light Mode</span>
                </div>
              ) : (
                <div className="flex dark:hidden items-center">
                  <span>
                    <FaRegMoon size={18} />
                  </span>
                  <span className="ms-2">Dark Mode</span>
                </div>
              )}

              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => {}}
                className="toggle ms-auto h-6 border-gray-200 text-gray-200                 checked:bg-primary-600 checked:text-white dark:border-primary-600"
              />
            </div>
          </li>

          <li className="block border-t border-gray-200 dark:border-gray-800 my-3"></li>

          <MyLink Icon={Links[2].icon} name={Links[2].name} />
        </ul>
      </div>
    </div>
  );
}
