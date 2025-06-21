'use client';
import React, { createContext, useState } from 'react';
import { FaSchool } from 'react-icons/fa';
import { FaBuildingColumns } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import { FaPlaneDeparture } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';

export const StoreContext = createContext(null);

const courses = [
  {
    id: 1,
    name: 'CA Test Series',
    icon: FaGraduationCap,
  },
  {
    id: 2,
    name: 'Class 9-10',
    icon: FaSchool,
  },
  {
    id: 3,
    name: 'Class 11',
    icon: FaSchool,
  },
  {
    id: 4,
    name: 'Class 12',
    icon: FaSchool,
  },
  {
    id: 5,
    name: 'B.Com',
    icon: FaBuildingColumns,
  },

  {
    id: 6,
    name: 'IELTS',
    icon: FaPlaneDeparture,
  },
  {
    id: 7,
    name: 'Internationals',
    icon: TfiWorld,
  },
];

const StoreContextProvider = props => {
  const [cartItems, setCartItems] = useState([]);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  function addToCart(itemId) {
    setCartItems(prev => [...prev, itemId]);
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    courses,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
