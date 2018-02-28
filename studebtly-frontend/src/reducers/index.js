import { combineReducers } from 'redux';
import collegesData from './collegesReducer.js';

const rootReducer = combineReducers({
  collegesData
});

export default rootReducer;
