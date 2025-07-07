import React from 'react';

import { BsThreeDots } from 'react-icons/bs';
import { LiaUserEditSolid } from 'react-icons/lia';
import { FiEye } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { IoBan } from 'react-icons/io5';
import BackgroundGlow from '../../components/admin/BackgroundGlow';
import Link from 'next/link';

const actions = [
  { name: 'Update Details', icon: LiaUserEditSolid, link: true },
  { name: 'View Details', icon: FiEye, link: false },
  { name: 'Send Mail', icon: FiMail, link: false },
  { name: 'Orders', icon: FiShoppingCart, link: false },
  { name: 'Suspend', icon: IoBan, link: false },
];

export default function ActionsDropdown({ user }) {
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
                  action.link ? `/admin/master/update-staff/${user.id}` : ''
                }
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
