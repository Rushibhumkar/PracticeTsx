import {ADD_ADDRESS, DELETE_ADDRESS} from '../ActionTypes';

export const AddressReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];

    case DELETE_ADDRESS:
      const deleteAddressArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteAddressArray;
    default:
      return state;
  }
};
