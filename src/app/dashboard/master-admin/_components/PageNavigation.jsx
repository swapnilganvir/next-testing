'use client';
import React from 'react';

export default function PageNavigation({
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <div className="p-5 flex -space-x-px">
      <button
        className={`h-9 px-3 sm:px-4 text-sm text-slate-500 tracking-wide border border-slate-200 rounded-s transition-all duration-300 dark:border-slate-900 dark:text-slate-400 ${
          currentPage === 1
            ? 'cursor-not-allowed'
            : 'hover:bg-slate-100 hover:text-primary-600 active:bg-primary-700 hover:dark:bg-slate-800'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, idx) => {
        const page = idx + 1;
        return (
          <button
            key={page}
            className={`tracking-wide border transition-all duration-300 border-slate-200 dark:border-slate-900  dark:text-slate-400 hover:bg-slate-100 hover:dark:bg-slate-800 hover:text-primary-600 active:bg-primary-700 w-9 h-9 text-sm ${
              currentPage === page
                ? 'bg-slate-100 text-primary-600'
                : 'text-slate-500'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className={`h-9 px-3 sm:px-4 text-sm text-slate-500 tracking-wide border border-slate-200 rounded-e transition-all duration-300 dark:border-slate-900 dark:text-slate-400 ${
          currentPage === totalPages
            ? 'cursor-not-allowed'
            : 'hover:bg-slate-100 hover:text-primary-600 active:bg-primary-700 hover:dark:bg-slate-800'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
