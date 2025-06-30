import axios from 'axios';

// Used for cart functionality
export async function getProducts() {
  try {
    const { data } = await axios.get('api/products');
    return data.success ? data.data : [];
  } catch (error) {
    console.log('error', error);
  }
}

// Used for cart functionality
export async function getOrders(user_id) {
  try {
    const { data } = await axios.post('api/orders/read', { user_id });
    return data.success ? data.data : [];
  } catch (error) {
    console.log('error', error);
  }
}

// Used for cart functionality
export async function addOrder(user_id, product_ids) {
  try {
    const { data } = await axios.post('/api/orders/create', {
      user_id,
      product_ids,
    });
    // console.log('add order', data);
  } catch (error) {
    console.log('error', error);
  }
}

// Used for cart functionality
export async function removeOrder(user_id, product_ids) {
  try {
    const { data } = await axios.post('/api/orders/delete', {
      user_id,
      product_ids,
    });
    // console.log('remove order', data);
  } catch (error) {
    console.log('error', error);
  }
}
