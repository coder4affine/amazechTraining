import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class picker extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    inputRef: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  };

  onChange = value => {
    this.props.onChange(this.props.name, value);
  };

  render() {
    const { data, label, error, inputRef, value, ...rest } = this.props;
    return (
      <View
        style={{
          marginVertical: 8,
        }}
      >
        <Text
          style={[{ fontWeight: '500', fontSize: FONT(12), color: '#777777', marginBottom: 7 }]}
        >
          {label}
        </Text>
        <Picker
          selectedValue={value}
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#e8e8e8',
            backgroundColor: '#f4f2fb',
          }}
          onValueChange={this.onChange}
        >
          {data.map(item => (
            <Picker.Item key={item.value} label={item.text} value={item.value} />
          ))}
        </Picker>
        {error && <Text style={{ color: 'red', fontSize: FONT(9) }}>{error}</Text>}
      </View>
    );
  }
}

export default picker;
