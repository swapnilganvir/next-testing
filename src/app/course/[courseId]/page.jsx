'use client';
import React, { useContext } from 'react';
import { StoreContext } from '@/context/StoreContext';

export default function SubCoursePage({ params }) {
  const { courseId } = React.use(params);
  const { courses } = useContext(StoreContext);

  const course = courses.filter(c => c.id === Number(courseId))[0];

  return (
    <div>
      <div className="bg-darkBlue h-[200px]"></div>

      <div className="w-[90%] mx-auto -mt-15 rounded-full">
        <div className="w-60 flex flex-col justify-between items-center">
          <div className="size-60 bg-gray-200 rounded-xl mb-3 flex justify-center items-end">
            <p className="font-semibold mb-2">This is for {course.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
