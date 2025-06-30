'use client';

import { useContext } from 'react';
import { StoreContext } from '@/context/StoreContext';

export default function CoursePage() {
  const { myProducts, user, logout, addToCart } = useContext(StoreContext);

  return (
    <div>
      <div>
        <h2>CA Foundation Test Series, Guranteed 3 Times Revision</h2>
      </div>

      {user.id && (
        <button
          onClick={() => logout()}
          className="bg-green-400 rounded px-2 py-1"
        >
          Sign Out
        </button>
      )}

      <TestSeries
        heading="Chapter wise Test Series"
        courses={myProducts.filter(c => c.test_series_type_id === '2')}
        addToCart={addToCart}
      />

      <TestSeries
        heading="Full Syllabus wise Test Series"
        courses={myProducts.filter(c => c.test_series_type_id === '1')}
        addToCart={addToCart}
      />
    </div>
  );
}

const TestSeries = ({ heading, courses, addToCart }) => {
  return (
    <div className="p-3">
      <h2 className="text-xl text-lightBlue font-semibold">{heading}</h2>
      <div className="flex gap-5 border-1 p-3 border-stone-100">
        {courses.map((c, i) => (
          <div key={i} className=" bg-gray-100 ">
            <p className="font-semibold">
              {c.main_course_id === '1' ? 'CA' : 'UPSC'}
            </p>
            <p>{c.remarks}</p>
            <div className="flex gap-5">
              <p>price: {c.price}</p>
              <p>discount: {c.discount}</p>
            </div>
            <p onClick={() => addToCart(c)}>
              product_status:
              <span className="bg-lightBlue text-white">
                {c.product_status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
