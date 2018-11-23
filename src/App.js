import React from 'react';
import { SafeAreaView } from 'react-native';
import SignIn from './screens/SignIn/signIn';

const App = () => (
  <SafeAreaView
    style={{
      flex: 1,
      margin: 20,
    }}
  >
    <SignIn />
  </SafeAreaView>
);

export default App;
