'use client';
import { useContext, useState } from 'react';
import { StoreContext } from '../_context/StoreContext';

import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';

const logo_img = '/uncram-logo-final.webp';

const pages = ['Home', 'Contact Us', 'FAQs', 'Study Plan', 'Thoughts'];

const Navbar = () => {
  const { cartItems } = useContext(StoreContext);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-3">
        <Link href="/">
          <Image src={logo_img} alt="Uncram logo" width={119} height={24} />
        </Link>

        <div className="hidden md:flex justify-center items-center space-x-10 max-lg:space-x-6">
          {pages.map((page, i) => (
            <p key={i} className="font-semibold">
              {page}
            </p>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-5">
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

            {cartItems.length > 0 && (
              <div className="absolute size-2 rounded-full bg-flameRed top-1.5 right-1.5"></div>
            )}
          </div>

          <Link href="/login">
            <button
              className="hidden md:block font-semibold rounded-full px-4 py-2 bg-darkBlue text-white hover:bg-white hover:text-darkBlue
            border-1 hover:border-darkBlue cursor-pointer"
            >
              Sign In
            </button>
          </Link>

          <button
            onClick={() => setOpenMenu(true)}
            className="md:hidden bg-gray-50 px-2 py-1 border-1 border-gray-300 rounded"
          >
            <HiOutlineMenu size={25} />
          </button>
        </div>

        {openMenu && (
          <div className="md:hidden">
            <div className="fixed inset-0 bg-black opacity-75"></div>
            <div className="w-35/100 h-screen bg-white absolute top-0 right-0">
              <Link href="/login">
                <button
                  // onClick={() => setOpenLoginModal(true)}
                  className="font-semibold max-sm:px-3 max-sm:py-1 px-4 py-2 ml-6 mt-6 border-1 hover:border-2 rounded"
                >
                  Sign In
                </button>
              </Link>

              <button
                onClick={() => setOpenMenu(false)}
                className="absolute top-2 right-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>

              <div className="flex flex-col gap-4 px-6 pt-5">
                {pages.map((page, i) => (
                  <p key={i} className="font-semibold">
                    {page}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
