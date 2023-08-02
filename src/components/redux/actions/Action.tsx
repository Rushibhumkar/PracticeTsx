import {
  ADD_ADDRESS,
  DELETE_ADDRESS,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from '../ActionTypes';

export const addToCart = (data: any) => ({
  type: ADD_TO_CART,
  payload: data,
});
export const deleteFromCart = (index: any) => ({
  type: DELETE_FROM_CART,
  payload: index,
});
export const addAddress = (data: any) => ({
  type: ADD_ADDRESS,
  payload: data,
});
export const deleteAddress = (index: any) => ({
  type: DELETE_ADDRESS,
  payload: index,
});
