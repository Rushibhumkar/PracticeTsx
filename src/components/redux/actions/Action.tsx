import {
  ADD_ADDRESS,
  DELETE_ADDRESS,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from '../ActionTypes';

export const addToCart = (item: any) => ({
  type: ADD_TO_CART,
  payload: item,
});
export const deleteFromCart = (index: any) => ({
  type: DELETE_FROM_CART,
  payload: index,
});
export const addAddress = (item: any) => ({
  type: ADD_ADDRESS,
  payload: item,
});
export const deleteAddress = (index: any) => ({
  type: DELETE_ADDRESS,
  payload: index,
});
