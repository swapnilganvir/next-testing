import axios from 'axios';

const URL = 'http://localhost:3000';

// Used for cart functionality
export async function getProducts() {
  try {
    const { data } = await axios.get(`${URL}/api/internal/product/read`);
    return data.success ? data.data : [];
  } catch (error) {
    console.log('error', error);
  }
}

// Used for cart functionality
export async function getOrders(user_id) {
  try {
    const { data } = await axios.post(`${URL}/api/orders/read`, { user_id });
    return data.success ? data.data : [];
  } catch (error) {
    console.log('error', error);
  }
}

// Used for cart functionality
export async function addOrder(user_id, product_ids) {
  try {
    const { data } = await axios.post(`${URL}/api/orders/create`, {
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
    // for delete need to give data in different format
    const { data } = await axios.delete(`${URL}/api/orders/delete`, {
      data: {
        user_id,
        product_ids,
      },
    });
    // console.log('remove order', data);
  } catch (error) {
    console.log('error', error);
  }
}
