import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import productReducer from './productReducer.js';
import cartReducer  from './cartReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
