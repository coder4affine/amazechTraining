import React, { PureComponent } from 'react';
import { View } from 'react-native';
import SignInForm from './signInForm';
import Button from '../../components/Button/button';

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

  render() {
    const { user } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <SignInForm initialValues={user} onSubmit={value => alert(JSON.stringify(value))} />
        <Button title="Sign Up" onPress={this.signUp} />
      </View>
    );
  }
}

export default signIn;
