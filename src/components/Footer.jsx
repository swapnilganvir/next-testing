'use client';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const LocationMap = dynamic(() => import('@/components/LocationMap'), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer className="mt-10 pb-[5px] bg-[#0e163f] text-white relative">
      <div className="p-10 pb-4">
        <div className="flex justify-between sm:flex-wrap max-sm:flex-col max-sm:items-center gap-10">
          <div className="px-3">
            <h3 className="text-2xl font-semibold mb-1">Quick Links</h3>
            <div className="flex gap-10 text-sm">
              <div className="flex flex-col gap-2">
                <a href="#">CA Foundation Test Series</a>
                <a href="#">CA Foundation Online Test Series</a>
                <a href="#">CA Foundation Online Test Series</a>
                <a href="#">CA Foundation Test Series</a>
                <a href="#">CA Foundation Online Test Series</a>
                <a href="#">CA Foundation Online Test Series</a>
                <a href="#">Download Free Notes</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#">CA Foundation Test Series</a>
                <a href="#">CA Foundation Online Test Series</a>
                <a href="#">CA Foundation Online Test Series</a>
                <a href="#">CA Foundation Test Series</a>
                <a href="#">CA Foundation Online Test Series</a>
                <a href="#">CA Foundation Online Test Series</a>
                <a href="#">Download Free Notes</a>
              </div>
            </div>
          </div>

          <div className="border-l-1 border-r-1 border-stone-600 max-w-80 px-3">
            <h3 className="text-2xl font-semibold mb-1">About UNCRAM</h3>
            <div className="text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus lobortis porttitor augue, in sollicitudin arcu. Donec
                turpis magna, vestibulum et orci quis, egestas bibendum sem.
                Nulla non consectetur ligula, a aliquet purus. Aliquam erat
                volutpat. Morbi rhoncus quis velit vitae euismod. Nulla
                facilisi. Ut non augue dictum, congue lorem maximus, suscipit
                est. Vestibulum libero dui, lacinia commodo dapibus id,
                tristique ac justo. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>

          <div>
            <LocationMap />
          </div>
        </div>

        <div className="flex flex-col items-center mt-6">
          <h2 className="text-3xl font-medium">Follow Us:</h2>
          <div className="flex gap-4 mt-2">
            <a href="#">
              <FaInstagram size={31} />
            </a>
            <a href="#">
              <FaFacebookSquare size={30} />
            </a>
            <a href="#">
              <FaTwitter size={30} />
            </a>
          </div>
          <h4 className="text-sm text-[#005068] mt-8">
            All Rights Reserved with uncram
          </h4>
        </div>
      </div>
      <div className="w-full h-[5px] bg-[#02b2f1]"></div>
    </footer>
  );
};

export default Footer;
