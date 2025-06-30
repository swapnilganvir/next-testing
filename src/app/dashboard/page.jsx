'use client';

import { StoreContext } from '@/context/StoreContext';
import { useContext } from 'react';

export default function DashboardPage() {
  const { logout } = useContext(StoreContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>

      <button
        onClick={() => logout()}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
