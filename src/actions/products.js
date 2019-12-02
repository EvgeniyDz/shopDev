import axios from 'axios';

export const SHOW_PRODUCTS = 'SHOW_PRODUCTS';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS';

function showProducts(item) {
  return {
    type: SHOW_PRODUCTS,
    payload: item,
  };
}

export function loadProducts() {
  return function (dispatch) {
    // axios.get('/api/products')
    axios.get('data.json')
      .then((response) => {
        dispatch(showProducts(response.data));
      });
  };
}

export function addProducts(item) {
  return {
    type: ADD_PRODUCTS,
    payload: item,
  };
}

export function removeProducts(item) {
  return {
    type: REMOVE_PRODUCTS,
    payload: item,
  };
}

// export default showProducts;
