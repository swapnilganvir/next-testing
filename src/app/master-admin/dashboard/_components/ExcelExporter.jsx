'use client';
import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import { IoCloudDownloadOutline } from 'react-icons/io5';

const exportToExcel = (data, fileName = 'admin_info.xlsx') => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
};

export default function ExcelExporter({ tableData }) {
  return (
    <div className="flex items-center text-center align-middle font-heading border transition-all duration-300 whitespace-nowrap border-gray-300 dark:border-gray-900 text-slate-600 dark:text-slate-200 bg-white dark:bg-gray-900 hover:bg-slate-600 [.active&gt;&amp;]:bg-slate-600 hover:dark:bg-gray-800 [.active&gt;&amp;]:dark:bg-gray-800 hover:text-white [.active&gt;&amp;]:text-white hover:dark:text-white [.active&gt;&amp;]:dark:text-white hover:border-slate-600 [.active&gt;&amp;]:border-slate-600 hover:dark:border-gray-800 [.active&gt;&amp;]:dark:border-gray-800 active:bg-slate-700 active:text-white active:border-slate-600 text-sm font-bold leading-4.5 px-5 py-2 tracking-wide rounded cursor-pointer">
      <span className="me-3 hidden sm:inline">
        <IoCloudDownloadOutline size={20} />
      </span>

      <span onClick={() => exportToExcel(tableData)}>Export</span>
    </div>
  );
}
