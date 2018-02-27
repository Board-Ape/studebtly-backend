import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import logger from 'redux-logger';
import rootReducer from './reducers';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(thunk, promise);

const Store = createStore(
  rootReducer,
  compose(
    middleware,
    devTools
  )
);

export default Store;
