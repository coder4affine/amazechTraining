import React, { PureComponent } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './signUpForm';

export class signIn extends PureComponent {
  state = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      confirmPassword: '',
      gender: '',
      username: '',
      password: '',
    },
  };

  render() {
    const { user } = this.state;
    let kav = {};
    if (OS === 'ios') {
      kav = {
        behavior: 'padding',
        keyboardVerticalOffset: 100,
        enabled: true,
      };
    }

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} {...kav}>
        <ScrollView style={{ flex: 1 }}>
          <SignUpForm initialValues={user} onSubmit={value => alert(JSON.stringify(value))} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default signIn;
