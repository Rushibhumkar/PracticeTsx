import {ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA} from './contants';
const initialState: any = [];
export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_FROM_CART:
      // return state.filter((item) => item.name !== action.data.name)
      let result = state.filter((item: any) => {
        return item.name !== action.data;
      });
      return [...result];
    // case SET_USER_DATA:
    //   return [...state, action.data];
    default:
      return state;
  }
};
