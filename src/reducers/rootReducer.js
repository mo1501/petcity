import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import productReducer from './productReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});

export default rootReducer;
