import React from 'react';

export default function StatsCard() {
  return (
    <div className="bg-white border rounded-md border-gray-300 dark:bg-gray-950 dark:border-gray-900 h-full">
      <div className="p-5 sm:p-6">
        <h6 className="font-bold text-slate-700 dark:text-white">
          Today Orders
        </h6>
        <div className="flex items-center justify-between my-2">
          <div className="text-3xl font-medium text-slate-700 dark:text-white">
            1,945
          </div>
          <div className="h-10 w-24">
            <div className="bg-green-300 h-full w-full"></div>
            {/* <canvas
                          className="ecommerce-line-chart-small"
                          id="todayOrders"
                          width="120"
                          height="50"
                        ></canvas> */}
          </div>
        </div>
        <div className="text-sm">
          <em className="icon ni ni-arrow-long-up"></em>
          <span className="text-green-600">4.63%</span>
          <span> vs. last week</span>
        </div>
      </div>
    </div>
  );
}
