import {createStore} from 'redux';
import {AddressReducer} from '../reducers/AddressReducer';
import {combineReducers} from 'redux';
import {CartReducer} from '../reducers/CartReducer';
const rootReducer = combineReducers({AddressReducer, CartReducer});
export const store = createStore(rootReducer);
