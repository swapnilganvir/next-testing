'use client';
import React, { useContext } from 'react';
import { StoreContext } from '@/app/_context/StoreContext';

const Course = ({ params }) => {
  const { courseId } = React.use(params);
  const { courses, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext);

  const course = courses.filter(c => c.id === Number(courseId))[0];

  function insideCart(id) {
    return cartItems.filter(c => c.id === id).length > 0 ? true : false;
  }

  return (
    <div>
      <div className="bg-darkBlue h-[200px]"></div>

      <div className="w-[90%] mx-auto -mt-15 rounded-full">
        <div className="w-60 flex flex-col justify-between items-center">
          <div className="size-60 bg-gray-200 rounded-xl mb-3 flex justify-center items-end">
            <p className="font-semibold mb-2">This is for {course.name}</p>
          </div>

          {insideCart(course.id) ? (
            <button
              onClick={() => removeFromCart(course.id)}
              className="w-2/3 py-2 rounded bg-lightBlue text-white cursor-pointer"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(course)}
              className="w-2/3 py-2 rounded bg-lightBlue text-white cursor-pointer"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
