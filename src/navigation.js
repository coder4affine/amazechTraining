import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoadingScreen from './screens/LoadingScreen/loadingScreen';
import SignIn from './screens/SignIn/signIn';
import SignUp from './screens/SignUp/signUp';
import HomeScreen from './screens/HomeScreen/homeScreen';

const AuthStack = createStackNavigator({
  SignIn,
  SignUp,
});

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppNavigator);
