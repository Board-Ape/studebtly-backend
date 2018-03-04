import { combineReducers } from 'redux';
import collegesData from './collegesReducer.js';
import favorites from './favoritesReducer.js';

const rootReducer = combineReducers({
  collegesData,
  favorites
});

export default rootReducer;
