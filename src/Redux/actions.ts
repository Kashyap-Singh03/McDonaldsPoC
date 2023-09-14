import {ADD_TO_CART, REMOVE_TO_CART} from './constants';

export function addToCart() {
  return {
    type: ADD_TO_CART,
  };
}

export function removeToCart() {
  return {
    type: REMOVE_TO_CART,
  };
}
