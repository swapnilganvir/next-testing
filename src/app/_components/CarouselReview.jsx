'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IoIosRibbon } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';

const sample_review_img = '/aman-bhandari-ca-uncram.webp';

const data = [
  {
    profile_pic: sample_review_img,
    name: 'Aman Bhandari',
    course: 'CA Foundation',
    review:
      'Sir g, ty haan for CA foundation... ab CA inter bhi karvado... Guys mast hain ye log uncram vale... aajo sab...',
  },
  {
    profile_pic: sample_review_img,
    name: 'Aman Chandari',
    course: 'CA Foundation',
    review:
      'Sir g, ty haan for CA foundation... ab CA inter bhi karvado... Guys mast hain ye log uncram vale... aajo sab...',
  },
  {
    profile_pic: sample_review_img,
    name: 'Aman Dhandari',
    course: 'CA Foundation',
    review:
      'Sir g, ty haan for CA foundation... ab CA inter bhi karvado... Guys mast hain ye log uncram vale... aajo sab...',
  },
  {
    profile_pic: sample_review_img,
    name: 'Aman Ehandari',
    course: 'CA Foundation',
    review:
      'Sir g, ty haan for CA foundation... ab CA inter bhi karvado... Guys mast hain ye log uncram vale... aajo sab...',
  },
  {
    profile_pic: sample_review_img,
    name: 'Aman Bhandari',
    course: 'CA Foundation',
    review:
      'Sir g, ty haan for CA foundation... ab CA inter bhi karvado... Guys mast hain ye log uncram vale... aajo sab...',
  },
  {
    profile_pic: sample_review_img,
    name: 'Aman Chandari',
    course: 'CA Foundation',
    review:
      'Sir g, ty haan for CA foundation... ab CA inter bhi karvado... Guys mast hain ye log uncram vale... aajo sab...',
  },
  {
    profile_pic: sample_review_img,
    name: 'Aman Dhandari',
    course: 'CA Foundation',
    review:
      'Sir g, ty haan for CA foundation... ab CA inter bhi karvado... Guys mast hain ye log uncram vale... aajo sab...',
  },
  {
    profile_pic: sample_review_img,
    name: 'Aman Ehandari',
    course: 'CA Foundation',
    review:
      'Sir g, ty haan for CA foundation... ab CA inter bhi karvado... Guys mast hain ye log uncram vale... aajo sab...',
  },
];

export default function CarouselReview() {
  return (
    <div className="w-8/12 max-sm:w-11/12 mb-15">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        slidesPerGroup={1}
        spaceBetween={8}
        grabCursor={true}
        loop={true}
      >
        {data.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="mb-10 overflow-hidden">
              <div className="p-8 mx-2 rounded-xl shadow-[0_0_7px_3px_rgba(0,0,0,0.05)] overflow-x-hidden">
                <FaQuoteLeft size={20} fill="#36c1fa" className="mb-8" />
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={person.profile_pic}
                    alt=""
                    className="w-35 h-30 rounded"
                  />
                  <div>
                    <p className="text-darkBlue text-lg font-semibold">
                      {person.name}
                    </p>
                    <div className="flex items-center">
                      <IoIosRibbon size={20} fill="#36c1fa" />
                      <p className="text-stone-600">{person.course}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-stone-700">{person.review}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #d1d5db;
            opacity: 1;
            margin: 20px 16px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: #6b7280;
            transform: scale(1.15);
          }
        `}
      </style>
    </div>
  );
}
