'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { useContext } from 'react';
import { StoreContext } from '@/context/StoreContext';
import HoverMenu from './HoverMenu';

const logo_img = '/uncram-logo-final.webp';

const pages = [
  { name: 'Home', to: '#' },
  { name: 'Contact Us', to: '#contact-us' },
  { name: 'FAQs', to: '#faqs' },
  { name: 'Study Plan', to: '#study-plan' },
  { name: 'Thoughts', to: '#thoughts' },
];

const Navbar = () => {
  const { myCart } = useContext(StoreContext);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-3">
        <Link href="/">
          <Image src={logo_img} alt="Uncram logo" width={119} height={24} />
        </Link>

        <div className="hidden md:flex justify-center items-center space-x-10 max-lg:space-x-6">
          {pages.map((page, i) => (
            <a href={page.to} key={i} className="font-semibold">
              {page.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {/* <input
          className="px-4 py-1 rounded border-1 border-darkBlue"
          placeholder="Search..."
          /> */}

          <div className="relative">
            <Link href="/cart">
              <div className="bg-gray-50 px-2 py-1 border-1 border-gray-300 rounded">
                <FaShoppingCart size={25} />
              </div>
            </Link>

            {myCart.length > 0 && (
              <div className="absolute size-2 rounded-full bg-flameRed top-1.5 right-1.5"></div>
            )}
          </div>

          <HoverMenu />

          <Link href="/login">
            <button
              className="hidden md:block font-semibold rounded-full px-4 py-2 bg-darkBlue text-white hover:bg-white hover:text-darkBlue
            border-1 hover:border-darkBlue cursor-pointer"
            >
              Sign In
            </button>
          </Link>

          <div className="drawer drawer-end md:hidden bg-gray-50 px-2 py-1 border-1 border-gray-300 rounded">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer">
                <HiOutlineMenu size={25} />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="bg-white min-h-full w-40/100 sm:w-30/100 pl-6">
                <Link href="/login">
                  <button className="font-semibold max-sm:px-3 px-4 max-sm:py-1 py-2 mt-6 border-1 hover:border-2 rounded">
                    Sign In
                  </button>
                </Link>

                <div className="flex flex-col gap-4 pt-5">
                  {pages.map((page, i) => (
                    <a href={page.to} key={i} className="font-semibold">
                      {page.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
