'use client';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '@/context/StoreContext';
import { useRouter } from 'next/navigation';

const CartItems = () => {
  const [cart, setCart] = useState([]);
  const { myCart, removeFromCart } = useContext(StoreContext);
  const router = useRouter();

  function getCart() {
    const value = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(value);
    // console.log('mycart', value);
  }

  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
      const [key, value] = c.split('=');
      if (key === name) {
        return JSON.parse(decodeURIComponent(value));
      }
    }
    return null;
  }

  async function checkOut() {
    const user = getCookie('user');

    if (!user) {
      sessionStorage.setItem('cartToSync', JSON.stringify(cart));
      router.push('/login');
      return;
    }
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ user, cart }),
      });
      const msg = await res.json();
      console.log(msg);

      localStorage.removeItem('cart');
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 px-4 font-medium">
      <div className="grid grid-cols-6 text-stone-500">
        <p>Id</p>
        <p className="col-span-2">Name</p>
        <p className="col-span-2">Price</p>
        <p>Remove</p>
      </div>
      <hr className="text-stone-300 mt-5 mb-2" />

      {myCart.map((item, i) => (
        <div key={i}>
          <div className="grid grid-cols-6">
            <p>{item.test_series_type_id}</p>
            <p className="col-span-2">{item.remarks}</p>
            <p className="col-span-2">Price - {item.price}</p>
            <p onClick={() => removeFromCart(item)} className="cursor-pointer">
              x
            </p>
          </div>
          <hr className="text-stone-300 my-2" />
        </div>
      ))}

      <div className="flex justify-center mt-5">
        {myCart.length > 0 ? (
          <button
            onClick={() => checkOut()}
            className="px-4 py-2 bg-green-400 hover:bg-green-500 rounded cursor-pointer text-white"
          >
            Checkout
          </button>
        ) : (
          <h2>Your Cart is empty</h2>
        )}
      </div>
    </div>
  );
};

export default CartItems;
