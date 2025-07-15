'use client';
import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import BackgroundGlow from './BackgroundGlow';

const page_sizes = [
  { name: '5 items', value: 5 },
  { name: '10 items', value: 10 },
  { name: '20 items', value: 20 },
];

export default function PageSizeSelector({ itemsPerPage, setItemsPerPage }) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <BackgroundGlow>
          <IoSettingsOutline size={20} />
        </BackgroundGlow>
      </div>

      <div tabIndex={0} className="dropdown-content min-w-[120px] mt-1 z-100">
        <ul className="py-2 bg-white border border-gray-200 dark:border-gray-800  dark:bg-gray-950 rounded-lg shadow">
          <li>
            <h3 className="px-5 py-1.5 flex leading-5 tracking-[1px] text-xs font-bold uppercase text-slate-700 dark:text-white">
              Show
            </h3>
          </li>

          {page_sizes.map((ps, i) => (
            <li key={i}>
              <div
                onClick={() => setItemsPerPage(ps.value)}
                className="px-5 py-1.5 flex justify-between items-center text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300 cursor-pointer"
              >
                <span>{ps.name}</span>
                {itemsPerPage === ps.value && (
                  <span>
                    <FaCheck size={10} />
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
