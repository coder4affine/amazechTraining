import React, { PureComponent } from 'react';
import { View } from 'react-native';
import SignInForm from './signInForm';

export class signIn extends PureComponent {
  state = {
    user: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  };

  render() {
    const { user } = this.state;
    return (
      <View>
        <SignInForm initialValues={user} onSubmit={value => alert(JSON.stringify(value))} />
      </View>
    );
  }
}

export default signIn;
