'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { FaGraduationCap } from 'react-icons/fa';

const CarouselCourse = () => {
  const [mainCourses, setMainCourses] = useState([]);

  const carouselRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  async function getMainCourses() {
    try {
      const { data } = await axios.get('/api/test_series');

      if (data.success) {
        setMainCourses(data.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  function scrollRight() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  function checkScroll() {
    const container = carouselRef.current;
    const scrollable = container.clientWidth + 5 < container.scrollWidth;
    setShowScrollButton(scrollable);
  }

  useEffect(() => {
    getMainCourses();

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
        className="flex max-sm:flex-wrap sm:overflow-x-auto sm:scrollbar"
      >
        {mainCourses.map(item => (
          <Link href={`/test-series/${item.name.toLowerCase()}`} key={item.id}>
            <div className="size-30 flex flex-col justify-center space-y-3 items-center">
              <FaGraduationCap size={30} fill="white" />
              <p className="text-sky-100">{item.name}</p>
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
