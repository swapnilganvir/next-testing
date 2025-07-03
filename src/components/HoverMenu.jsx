'use client';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa6';
import { useState } from 'react';

export default function HoverMenu() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="dropdown dropdown-hover dropdown-center"
    >
      <div
        tabIndex={0}
        role="button"
        className={`flex items-center gap-1 ${isHovered && 'text-lightBlue'}`}
      >
        <p className="font-semibold">Pages</p>
        <FaAngleDown size={10} className="mt-1" />
      </div>
      <div className="dropdown-content z-1">
        <ul
          tabIndex={0}
          className="menu mt-4 bg-white rounded-box w-40 p-2 shadow-sm"
        >
          <li>
            <Link href="/dashboard">
              <div>Dashboard</div>
            </Link>
          </li>
          <li>
            <Link href="/course">
              <div>Courses</div>
            </Link>
          </li>
          <li>
            <Link href="/checkout">
              <div>Checkout</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
