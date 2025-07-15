'use client';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { BsThreeDots } from 'react-icons/bs';
import { LiaUserEditSolid } from 'react-icons/lia';
import { IoTrashOutline } from 'react-icons/io5';
import BackgroundGlow from './BackgroundGlow';

const actions = [
  { name: 'Update Details', icon: LiaUserEditSolid, link: true },
  { name: 'Delete', icon: IoTrashOutline, link: false },
];

export default function ActionsDropdown({ user, setRefresh }) {
  async function removeStaff(id) {
    try {
      const { data } = await axios.delete(
        '/api/dashboard/master/admin/delete',
        {
          data: {
            id,
          },
        }
      );
      alert(data.message);
      if (data.success) {
        setRefresh(prev => !prev);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <BackgroundGlow>
          <BsThreeDots size={20} className="text-slate-600" />
        </BackgroundGlow>
      </div>

      <div tabIndex={0} className="dropdown-content min-w-[180px] mt-1 z-100">
        <ul className="py-2 bg-white border border-gray-200 dark:border-gray-800  dark:bg-gray-950 rounded-lg shadow">
          {actions.map((action, i) => (
            <li key={i}>
              <Link
                href={
                  action.link
                    ? `/master-admin/dashboard/update-admin/${user.id}`
                    : ''
                }
                onClick={() => {
                  if (action.name === 'Delete') {
                    removeStaff(user.id);
                  }
                }}
                className="px-5 py-2.5 flex items-center text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"
              >
                <span className="mt-0.5">
                  <action.icon size={18} />
                </span>
                <span className="ms-3">{action.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
