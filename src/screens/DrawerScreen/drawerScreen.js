import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';

const data = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'Settings',
  },
  {
    id: 3,
    title: 'Explore',
  },
  {
    id: 4,
    title: 'Payments',
  },
];

export class drawerScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.signOut}>
          <View style={{ height: 40 }}>
            <Text>My App</Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={{ flex: 1 }}>
          {data.map(x => (
            <View key={x.id}>
              <Text>{x.title}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default drawerScreen;
