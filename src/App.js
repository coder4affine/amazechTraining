import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import configureStore from './configureStore';
import Navigator from './navigation';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const Root = reduxifyNavigator(Navigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(Root);

const store = configureStore(middleware);

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
