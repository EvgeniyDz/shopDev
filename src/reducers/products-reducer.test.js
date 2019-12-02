/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
import { SHOW_PRODUCTS, ADD_PRODUCTS, REMOVE_PRODUCTS } from '../actions/products';
import reducer, { initialState } from './products-reducer';

describe('products reducers tests', () => {
  it('SHOW_PRODUCTS', () => {
	  const action = {
	  	type: SHOW_PRODUCTS,
      payload: [1, 2, 3],
	  };
	  expect(reducer(initialState, action)).toEqual({
      ...initialState,
	  products: action.payload,
	  });
  });

  it('ADD_PRODUCTS', () => {
    const state = initialState;
    const action = {
      type: ADD_PRODUCTS,
      payload: [1, 2, 3],
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      productsCart: [
        ...state.productsCart,
        action.payload,
      ],
    });
  });

  it('REMOVE_PRODUCTS', () => {
    const state = initialState;
    const action = {
      type: REMOVE_PRODUCTS,
      payload: [1, 2, 3],
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
	  productsCart: [
        ...state.productsCart.filter(item => item.id !== action.payload),
	  ],
    });
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
