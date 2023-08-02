import {createStore} from 'redux';
import {AddressReducer} from '../reducers/AddressReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({AddressReducer});
export const store = createStore(rootReducer);
