/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    height: 40,
    width: 40,
  },
});

export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}
      >
        <View style={[styles.box, { backgroundColor: 'yellow' }]}>
          <Text>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'green' }]}>
          <Text>2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'blue' }]}>
          <Text>3</Text>
        </View>
      </SafeAreaView>
    );
  }
}
