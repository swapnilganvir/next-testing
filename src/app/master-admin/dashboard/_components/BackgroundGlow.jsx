'use client';
import React from 'react';

export default function BackgroundGlow({ children, color = 'bg-gray-200' }) {
  return (
    <div className="relative group flex justify-center items-center size-9 cursor-pointer">
      <div className="absolute left-0 top-0 size-9 flex justify-center items-center">
        <div
          className={`size-5 rounded-full opacity-0 group-hover:scale-190 group-hover:opacity-100 transition-all duration-300 ${color} dark:bg-gray-900`}
        ></div>
      </div>
      <span className="z-10 text-slate-600 dark:text-slate-300">
        {children}
      </span>
    </div>
  );
}
