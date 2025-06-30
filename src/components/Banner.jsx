// 'use client';
// import LoginForm from './Forms/LoginForm';
// import LoginForm_1 from './Forms/LoginForm_1';
// import { useContext } from 'react';
// import { StoreContext } from '../_context/StoreContext';
import { FaRupeeSign } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="max-w-4xl p-4 my-8">
      <div className="flex flex-col items-center gap-12">
        <div className="text-center text-darkBlue font-semibold">
          <h2 className="text-5xl mb-5">Prepare for your Exam</h2>

          <h3 className="text-4xl text-lightBlue mb-1">
            with uncram Test Series
          </h3>
          <p className="text-lg">Written Practice and MCQ's Test Series</p>
        </div>

        <div className="flex flex-wrap justify-center md:gap-8 gap-5">
          <div className="flex flex-col justify-center items-center w-60 p-8 rounded bg-white shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]">
            <div className="px-3 mb-3">
              <FaRupeeSign size={25} fill="#e0a13e" />
            </div>
            <p>Starting @ $12/-</p>
          </div>

          <div className="flex flex-col justify-center items-center w-60 p-8 rounded bg-white shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]">
            <div className="px-3 mb-3">
              <FaPlus size={25} />
            </div>
            <p>Unlimited Practice</p>
          </div>
          <div className="flex flex-col justify-center items-center w-60 p-8 rounded bg-white shadow-[0_0_10px_1px_rgba(0,0,0,0.25)]">
            <div className="px-3 mb-3">
              <FaHeart size={25} fill="#ff0000" />
            </div>
            <p>Service Dil Se</p>
          </div>
        </div>

        <div className="flex justify-center gap-3 text-white font-medium">
          <button className="px-4 py-2 bg-lightBlue hover:bg-sky-500 rounded cursor-pointer">
            Register Now
          </button>

          <Link href="/login">
            <button className="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded cursor-pointer">
              Sign in
            </button>
          </Link>
        </div>
      </div>

      {/* <LoginForm /> */}

      {/* <div className="flex justify-between">
        <LoginForm_1 />
      </div> */}
    </div>
  );
};

export default Banner;
