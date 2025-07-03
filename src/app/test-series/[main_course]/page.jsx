'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import axios from 'axios';
import Link from 'next/link';

export default function MainCoursePage({ params }) {
  const [subCourses, setSubCourses] = useState([]);

  const { main_course } = React.use(params);
  const main_course_name = main_course.toUpperCase();

  async function getSubCourses() {
    try {
      const { data } = await axios.post('/api/test_series/main_course', {
        main_course_name,
      });

      if (data.success) {
        setSubCourses(data.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getSubCourses();
  }, []);

  return (
    <div className="flex flex-col items-center mt-20 mb-40">
      <h2 className="text-3xl text-darkBlue font-semibold">
        {main_course_name} Test Series by UNCRAM
      </h2>
      <h2 className="text-3xl text-darkBlue font-semibold">
        <span className="text-gray-600">3 Times Revision</span> Guaranteed
      </h2>
      <h3 className="text-2xl text-blue-700/80 font-semibold my-5">
        I'm a student of
      </h3>

      <div className="w-8/12 flex justify-center gap-10">
        {subCourses.map(item => (
          <div
            key={item.id}
            className="w-8/12 p-4 flex flex-col items-center bg-zinc-50 rounded shadow-md"
          >
            <div>
              <FaArrowCircleDown size={16} className="text-blue-600/20" />
            </div>
            <p className="text-lg text-blue-950 font-semibold my-2">
              JOIN {main_course_name} {item.name}
            </p>
            <Link
              href={`${main_course}/${item.name.toLowerCase()}`}
              className="w-full"
            >
              <button className="w-full text-[9px] mb-4 border-1 border-blue-600/40 rounded">
                JOIN {main_course_name} {item.name.toUpperCase()} TEST SERIES
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
