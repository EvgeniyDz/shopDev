import { SHOW_PRODUCTS, ADD_PRODUCTS, REMOVE_PRODUCTS } from '../actions/products';

export const initialState = {
  products: [],
  productsCart: [],
};

const productReducer = function (state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_PRODUCTS:
      return {
        ...state,
        productsCart: [
          ...state.productsCart,
          action.payload,
        ],
      };

    case REMOVE_PRODUCTS:
      return {
        ...state,
        productsCart: [
          ...state.productsCart.filter(item => item.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};

export default productReducer;
