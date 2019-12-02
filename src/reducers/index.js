import { combineReducers } from 'redux';

// Reducers
import productsReducer from './products-reducer';

// Combine Reducers
const reducers = combineReducers({
  productsState: productsReducer,
});

export default reducers;
