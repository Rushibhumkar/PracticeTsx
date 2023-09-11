import {ADD_TO_CART, DELETE_FROM_CART} from '../ActionTypes';

export const CartReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case DELETE_FROM_CART:
      const deleteAddressArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteAddressArray;
    default:
      return state;
  }
};
