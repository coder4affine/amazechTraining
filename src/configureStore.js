import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import appReducer from './reducers';

let middleware = [thunk];

middleware = [...middleware];

export default function configureStore(NavigationReduxMiddleware) {
  return createStore(
    appReducer,
    compose(applyMiddleware(...middleware, NavigationReduxMiddleware)),
  );
}
