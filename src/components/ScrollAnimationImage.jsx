'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimationImage({ image, size = 'w-22 h-25' }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 1,
      }
    );

    const current = elementRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div ref={elementRef} className="w-fit h-27">
      {/* You can replace this image with any div content */}
      <div
        className={
          isVisible ? 'animate-unfade-zoom-in' : 'animate-fade-zoom-out'
        }
      >
        <img src={image} alt="" className={size} />
      </div>
    </div>
  );
}
