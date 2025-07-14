'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdPieChartOutline } from 'react-icons/md';
import { BsCardText } from 'react-icons/bs';
// import { GoPersonAdd } from 'react-icons/go';
import BackgroundGlow from './BackgroundGlow';
import { usePathname } from 'next/navigation';

const my_links = [
  {
    name: 'Dashboard',
    href: '/dashboard/master-admin',
    icon: MdPieChartOutline,
  },
  {
    name: 'Admins',
    href: '/dashboard/master-admin/admins',
    icon: BsCardText,
  },
];

export default function Sidebar() {
  const [isCompact, setIsCompact] = useState(false);
  const toggleSidebar = () => setIsCompact(!isCompact);
  const pathname = usePathname();

  return (
    <div
      className={`hidden xl:block w-72 min-h-screen max-h-screen z-10 transition-[width] duration-300 bg-gray-950 border-r-1 border-gray-800
        ${isCompact ? 'w-[74px]' : ''}
        `}
    >
      <div className="flex items-center w-full h-16 ps-4 pe-6 py-3 border-b border-gray-800">
        <div onClick={toggleSidebar} className="px-1.5">
          <BackgroundGlow color="bg-gray-800">
            <HiOutlineMenu size={28} />
          </BackgroundGlow>
        </div>
        {/* <div>
          <button
            onClick={toggleSidebar}
            className="inline-flex justify-center items-center relative h-9 w-9 px-1.5 before:content-[''] before:absolute before:-z-1 before:h-5 before:w-5 before:rounded-full before:opacity-0 
            hover:before:scale-190 hover:before:opacity-100 before:transition-all before:duration-300  before:top-21/100 before:left-22/100 before:bg-gray-800"
          >
            <span>
              <HiOutlineMenu size={28} className="text-[#b6c6e3]" />
            </span>
          </button>
        </div> */}

        <div className="ml-3">
          <Link href="/">
            <Image
              src="/uncram-text-logo.png"
              alt="logo"
              width={120}
              height={40}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full h-[calc(100vh-4rem)] pt-4 pb-10">
        {my_links.map((item, i) => (
          <div key={i} className="py-3">
            <Link
              href={item.href}
              className={`flex items-center gap-3 ps-6 pe-10 font-bold text-sm hover:text-primary-600 ${
                pathname === item.href ? 'text-primary-500' : 'text-slate-600'
              }`}
            >
              <span>
                <item.icon size={22} />
              </span>
              <span
                className={`whitespace-nowrap transition-all duration-300 ${
                  isCompact ? 'scale-0' : 'scale-100'
                }`}
              >
                {item.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
