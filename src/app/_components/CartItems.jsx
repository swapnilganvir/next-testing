'use client';
import { useContext } from 'react';
import { StoreContext } from '../_context/StoreContext';

const CartItems = () => {
  // const cartItems = [1, 2, 3, 4, 5];
  const { cartItems, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 px-4 font-medium">
      <div className="grid grid-cols-6 text-stone-500">
        <p>Id</p>
        <p className="col-span-2">Name</p>
        <p className="col-span-2">Price</p>
        <p>Remove</p>
      </div>
      <hr className="text-stone-300 mt-5 mb-2" />

      {cartItems.map((item, index) => (
        <div key={index}>
          <div className="grid grid-cols-6">
            <p>{item.id}</p>
            <p className="col-span-2">{item.name}</p>
            <p className="col-span-2">Price - {item.id}</p>
            <p
              onClick={() => removeFromCart(item.id)}
              className="cursor-pointer"
            >
              x
            </p>
          </div>
          <hr className="text-stone-300 my-2" />
        </div>
      ))}
    </div>
  );
};

export default CartItems;
