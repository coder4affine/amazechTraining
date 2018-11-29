import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import Navigator from './navigation';
import signIn from './screens/SignIn/signInReducer';

const navReducer = createNavigationReducer(Navigator);

const rootReducer = combineReducers({
  nav: navReducer,
  signIn,
});

export default rootReducer;
