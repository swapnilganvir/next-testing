'use client';
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FaSchool } from 'react-icons/fa';
import { FaBuildingColumns } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import { FaPlaneDeparture } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import {
  addOrder,
  getOrders,
  getProducts,
  removeOrder,
} from '@/lib/client-apis';
import {
  addPropertyToProductsLocal,
  addPropertyToProductsOrders,
  getLocalStorage,
  setLocalStorage,
} from '@/lib/client-utils';

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

const initialUser = { id: null };

const StoreContextProvider = props => {
  const [myCart, setMyCart] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [user, setUser] = useState(initialUser);

  async function rememberUser() {
    const { data } = await axios.get('api/auth/remember');
    try {
      if (data?.user?.data?.id) {
        setUser(data?.user?.data);
        console.log({ success: true, message: 'User Logged in' });
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  async function logout() {
    const cart = getLocalStorage();
    if (cart.length > 0) {
      localStorage.clear();
    }

    try {
      const { data } = await axios.get('api/auth/logout');
      console.log(data);
      setUser(initialUser);
    } catch (error) {
      console.log('error', error);
    }
  }

  // Used for cart functionality
  async function addToCart(item) {
    const updated = myProducts.map(p => ({
      ...p,
      product_status: p.id === item.id ? 'added' : p.product_status,
    }));

    const filtered = updated.filter(p => p.product_status === 'added');

    setMyProducts(updated);
    setMyCart(filtered);
    setLocalStorage(filtered);

    if (user.id) {
      const filtered_ids = filtered.map(p => p.id);
      await addOrder(user.id, filtered_ids);
    }
  }

  // Used for cart functionality
  async function removeFromCart(item) {
    const updated = myProducts.map(p => ({
      ...p,
      product_status: p.id === item.id ? 'add' : p.product_status,
    }));

    const filtered = updated.filter(p => p.product_status === 'added');

    setMyProducts(updated);
    setMyCart(filtered);
    setLocalStorage(filtered);

    if (user.id) {
      const filtered_ids = updated
        .filter(p => p.product_status === 'add')
        .map(p => p.id);
      await removeOrder(user.id, filtered_ids);
    }
  }

  // Used for cart functionality
  async function loadApp() {
    let products = await getProducts();
    products = products.map(p => ({ ...p, ['product_status']: 'add' }));

    const localCart = getLocalStorage();
    if (localCart.length > 0) {
      products = addPropertyToProductsLocal(products, localCart);
    }

    if (user.id) {
      const orders = await getOrders(user.id);
      products = addPropertyToProductsOrders(products, orders);
    }

    const filtered = products.filter(p => p.product_status === 'added');

    setMyProducts(products);
    setMyCart(filtered);
    setLocalStorage(filtered);

    if (user.id) {
      const filtered_ids = filtered.map(p => p.id);
      await addOrder(user.id, filtered_ids);
    }
  }

  useEffect(() => {
    rememberUser();
  }, []);

  useEffect(() => {
    loadApp();
  }, [user]);

  const contextValue = {
    myCart,
    addToCart,
    removeFromCart,
    myProducts,
    courses,
    user,
    rememberUser,
    logout,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
