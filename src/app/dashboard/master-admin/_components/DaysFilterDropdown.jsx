import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { LuCalendarDays } from 'react-icons/lu';

const days_filter = ['Last 30 Days', 'Last 60 Days', 'Last 1 Year'];

export default function DaysFilterDropdown() {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="inline-flex items-center text-center align-middle text-sm font-bold rounded px-6 py-2 tracking-wide border bg-white text-slate-600 border-gray-300 hover:bg-slate-600 hover:text-white hover:border-slate-600 dark:bg-gray-900 dark:text-slate-200 dark:border-gray-900 hover:dark:bg-gray-800 hover:dark:text-white  hover:dark:border-gray-800 active:text-white active:bg-slate-700 active:border-slate-600 transition-all duration-300"
      >
        <span className="me-3 hidden sm:inline">
          <LuCalendarDays size={20} />
        </span>
        <span className="me-3">
          <span className="hidden md:inline">Last</span> 30 Days
        </span>
        <span>
          <FaAngleRight size={15} />
        </span>
      </div>

      <div tabIndex={0} className="dropdown-content min-w-[180px] mt-1 z-100">
        <ul className="py-2 bg-white border border-gray-200 dark:border-gray-800  dark:bg-gray-950 rounded-lg shadow">
          {days_filter.map((days, i) => (
            <li key={i}>
              <a
                className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"
                href=""
              >
                <span>{days}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
