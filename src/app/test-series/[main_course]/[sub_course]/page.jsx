'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { StoreContext } from '@/context/StoreContext';

function capitalize(str) {
  if (typeof str !== 'string' || !str.length) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function discount(price, discount) {
  const val = price * (1 - 1 / discount);
  return val.toFixed(2);
}

export default function MainCoursePage({ params }) {
  const { myProducts, addToCart } = useContext(StoreContext);
  const [products, setProducts] = useState([]);

  const { main_course, sub_course } = React.use(params);
  const main_course_name = main_course.toUpperCase();
  const sub_course_name = sub_course.toUpperCase();

  async function getProducts2() {
    try {
      const { data } = await axios.post(
        '/api/test_series/main_course/sub_course',
        {
          main_course_name,
          sub_course_name,
        }
      );

      if (data.success) {
        const ids = data.data.map(item => item.id);

        setProducts(myProducts.filter(item => ids.includes(item.id)));
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getProducts2();
  }, [myProducts]);

  return (
    <div className="p-3">
      <div>
        <h2 className="text-lg font-semibold">
          <span className="text-xl text-lightBlue">
            {main_course_name} {capitalize(sub_course)} Test Series
          </span>{' '}
          Guranteed 3 Times Revision
        </h2>
      </div>

      <TestSeries
        heading="Chapter wise Test Series"
        courses={products.filter(c => c.test_series_type_id === '2')}
        addToCart={addToCart}
      />

      <TestSeries
        heading="Full Syllabus wise Test Series"
        courses={products.filter(c => c.test_series_type_id === '1')}
        addToCart={addToCart}
      />
    </div>
  );
}

const TestSeries = ({ heading, courses, addToCart }) => {
  return (
    <div className="mt-3">
      <h2 className="text-xl text-lightBlue font-semibold">{heading}</h2>
      <div className="flex gap-10 border-1 p-8 mt-5 border-stone-300/50">
        {courses.map((c, i) => (
          <div key={i} className="w-50 p-2 pb-1 bg-gray-100 rounded-xs">
            <p className="font-semibold">
              {c.main_course_id === '1' ? 'CA' : 'UPSC'}
            </p>
            <p className="text-xs text-stone-500 my-2">{c.remarks}</p>

            <div className="flex justify-between text-[10px]">
              <p className="line-through">₹{c.price} </p>
              <p>₹{discount(c.price, c.discount)}/-</p>
              <p className="text-green-400 font-semibold">{c.discount}% off</p>
            </div>

            <div className="border-t-1 border-stone-300 mt-3" />
            <p
              onClick={() => addToCart(c)}
              className="text-xs text-lightBlue text-center font-semibold cursor-pointer"
            >
              {capitalize(c.product_status)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
