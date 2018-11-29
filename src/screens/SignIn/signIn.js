import React, { PureComponent } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './signInForm';
import Button from '../../components/Button/button';
import * as types from '../../constants';

export class signIn extends PureComponent {
  state = {
    user: {
      username: '',
      password: '',
    },
  };

  signUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  singIn = async value => {
    this.props.login();
    setTimeout(() => {
      await AsyncStorage.setItem('userToken', value.username);
      this.props.loginSuccess(value);
      // this.props.navigation.navigate('App');
    }, 2000);
  };

  render() {
    const { user } = this.state;
    const { userData } = this.props;
    const { loading, data, error } = userData;
    return (
      <View style={{ flex: 1 }}>
        {loading && <Text>Loading....</Text>}
        {data && (
          <View>
            <Text>{data.username}</Text>
            <Text>{data.password}</Text>
          </View>
        )}
        {error && <Text>{error}</Text>}
        <SignInForm initialValues={user} onSubmit={this.singIn} />
        <Button title="Sign Up" onPress={this.signUp} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.signIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch({ type: types.SIGN_IN }),
    loginSuccess: payload => dispatch({ type: types.SIGN_IN_SUCCESS, payload }),
    loginFail: payload => dispatch({ type: types.SIGN_IN_FAIL, payload }),
  };
}

export default connect()(signIn);
