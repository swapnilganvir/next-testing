'use client';
import { useContext, useEffect, useState, useRef } from 'react';
import { StoreContext } from '@/context/StoreContext';
import Link from 'next/link';

const CarouselCourse = () => {
  const carouselRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { courses } = useContext(StoreContext);

  const cartItems = [];

  function insideCart(id) {
    return cartItems.filter(c => c.id === id).length > 0 ? true : false;
  }

  function scrollRight() {
    // console.log(
    //   carouselRef.current.scrollLeft,
    //   carouselRef.current.clientWidth,
    //   carouselRef.current.scrollWidth
    // );

    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const container = carouselRef.current;

    const checkScroll = () => {
      // console.log(
      //   container.scrollLeft,
      //   container.clientWidth,
      //   container.scrollWidth
      // );

      const scrollable = container.clientWidth + 5 < container.scrollWidth;
      setShowScrollButton(scrollable);
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);

    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="flex justify-between max-sm:flex-wrap sm:overflow-x-auto sm:scrollbar"
      >
        {courses.map((course, index) => (
          <Link href={`/course/${course.id}`} key={index}>
            <div className="size-30 flex flex-col justify-center space-y-3 items-center">
              {insideCart(course.id) ? (
                <>
                  <course.icon size={30} className="text-yellow-300" />
                  <p className="text-yellow-300 opacity-75">{course.name}</p>
                </>
              ) : (
                <>
                  <course.icon size={30} fill="white" />
                  <p className="text-sky-100">{course.name}</p>
                </>
              )}
            </div>
          </Link>
        ))}
        <div className="min-w-10"></div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollRight}
          className="absolute top-1/10 right-[-1px] max-sm:hidden bg-blue-300 w-10 h-20 rounded cursor-pointer"
        >
          &rarr;
        </button>
      )}
    </div>
  );
};

export default CarouselCourse;
