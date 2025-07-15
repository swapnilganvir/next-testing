'use client';
import { TbReport } from 'react-icons/tb';
import DaysFilterDropdown from './_components/DaysFilterDropdown';
import StatsCard from './_components/StatsCard';

export default function page() {
  return (
    <div className="p-7">
      <div className="flex justify-between items-center pb-7">
        <div>
          <h3 className="font-semibold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white mb-2">
            Dashboard
          </h3>
          <p className="text-slate-400">Welcome to Uncram Dashboard.</p>
        </div>

        <div className="hidden sm:flex items-center gap-4 py-5 sm:py-0">
          <DaysFilterDropdown />

          <div className="ms-auto">
            <a
              href=""
              className="relative inline-flex items-center text-center align-middle text-sm font-bold leading-4.5 rounded px-5 py-2 tracking-wide border border-primary-600 text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all duration-300"
            >
              <TbReport size={20} />
              <span className="ms-3">Reports</span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 sm:col-span-6 2xl:col-span-3">
          <StatsCard />
        </div>

        <div className="col-span-12 sm:col-span-6 2xl:col-span-3">
          <StatsCard />
        </div>

        <div className="col-span-12 sm:col-span-6 2xl:col-span-3">
          <StatsCard />
        </div>

        <div className="col-span-12 sm:col-span-6 2xl:col-span-3">
          <StatsCard />
        </div>

        <div className="col-span-12 2xl:col-span-6 h-70">
          <div className="bg-white border rounded-md border-gray-300 dark:bg-gray-950 dark:border-gray-900 h-full"></div>
        </div>

        <div className="col-span-12 md:col-span-6 2xl:col-span-3 h-70">
          <div className="bg-white border rounded-md border-gray-300 dark:bg-gray-950 dark:border-gray-900 h-full"></div>
        </div>

        <div className="col-span-12 md:col-span-6 2xl:col-span-3 h-70">
          <div className="bg-white border rounded-md border-gray-300 dark:bg-gray-950 dark:border-gray-900 h-full"></div>
        </div>

        <div className="col-span-12 2xl:col-span-8 h-70">
          <div className="bg-white border rounded-md border-gray-300 dark:bg-gray-950 dark:border-gray-900 h-full"></div>
        </div>

        <div className="col-span-12 md:col-span-8 lg:col-span-6 2xl:col-span-4 h-70">
          <div className="bg-white border rounded-md border-gray-300 dark:bg-gray-950 dark:border-gray-900 h-full"></div>
        </div>
      </div>
    </div>
  );
}
