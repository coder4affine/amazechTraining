import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoadingScreen from './screens/LoadingScreen/loadingScreen';
import SignIn from './screens/SignIn/signIn';
import SignUp from './screens/SignUp/signUp';
import HomeScreen from './screens/HomeScreen/homeScreen';
import SettingsScreen from './screens/SettingsScreen/settingsScreen';
import DrawerScreen from './screens/DrawerScreen/drawerScreen';
import IconButton from './components/IconButton/iconButton';

const AuthStack = createStackNavigator({
  SignIn,
  SignUp,
});

const AppTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const AppStack = createStackNavigator({
  AppTab: {
    screen: AppTab,
    navigationOptions: ({ navigation }) => ({
      title: 'My App',
      headerLeft: <IconButton onPress={() => navigation.toggleDrawer()} iconName="md-menu" />,
    }),
  },
});

const AppDrawer = createDrawerNavigator(
  {
    Home: AppStack,
  },
  {
    contentComponent: DrawerScreen,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    Auth: AuthStack,
    App: AppDrawer,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppNavigator);
