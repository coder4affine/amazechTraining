import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, ActivityIndicator, ViewPropTypes } from 'react-native';

const button = ({ disable, onPress, buttonStyle, loading, title, textStyle }) => (
  <TouchableOpacity onPress={() => !disable && onPress()}>
    <View
      style={[
        {
          flexDirection: 'row',
          height: 44,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2f2844',
          marginVertical: 8,
        },
        buttonStyle,
      ]}
    >
      {loading && <ActivityIndicator />}
      <Text style={[{ color: '#ffffff', fontSize: 12, fontWeight: '500' }, textStyle]}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

button.propTypes = {
  disable: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  buttonStyle: ViewPropTypes.style,
  title: PropTypes.string.isRequired,
  textStyle: PropTypes.object,
};

button.defaultProps = {
  disable: false,
  loading: false,
  textStyle: {},
};

export default button;
