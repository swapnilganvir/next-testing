// Used for cart functionality
export function getLocalStorage() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
}

// Used for cart functionality
export function setLocalStorage(value) {
  localStorage.setItem('cart', JSON.stringify(value));
}

// Used for cart functionality
export function addPropertyToProductsLocal(products = [], cart = []) {
  function helper(p, cart) {
    for (const c of cart) {
      if (c.id === p.id) {
        return 'added';
      }
    }
  }
  const products2 = products.map(p => ({
    ...p,
    product_status: helper(p, cart) ?? p.product_status,
  }));
  return products2;
}

// Used for cart functionality
export function addPropertyToProductsOrders(products = [], orders = []) {
  function helper(orders, p) {
    for (const o of orders) {
      if (Number(o.product_id) === p.id) {
        if (o.payment_status === '0') {
          return 'added';
        } else {
          return 'bought';
        }
      }
    }
  }
  const products2 = products.map(p => ({
    ...p,
    product_status: helper(orders, p) ?? p.product_status,
  }));
  return products2;
}

//
//
export function getUser() {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === 'user') {
      return JSON.parse(decodeURIComponent(value));
    }
  }
  return null;
}

export function deleteUser() {
  document.cookie = 'user=; max-age=0; path=/;';

  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === 'user') {
      return JSON.parse(decodeURIComponent(value));
    }
  }
  return null;
}
