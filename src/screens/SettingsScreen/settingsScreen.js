import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, AsyncStorage } from 'react-native';

import Button from '../../components/Button/button';

export class settingScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <Button title="Sign Out" onPress={this.signOut} />
      </View>
    );
  }
}

export default settingScreen;
