import { combineReducers } from 'redux';
import colleges from './collegesReducer.js';

const rootReducer = combineReducers({
  colleges
});

export default rootReducer;
