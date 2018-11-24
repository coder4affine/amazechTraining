import React, { PureComponent } from 'react';
import { Text, View, TouchableWithoutFeedback, DatePickerAndroid } from 'react-native';
import TextInput from '../TextInput/textInput';

export class datePicker extends PureComponent {
  state = {};

  openModal = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 4, 25),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.props.onChange(this.props.name, `${day}-${month + 1}-${year}`);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  render() {
    const { label, ...rest } = this.props;
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.openModal}>
          <View pointerEvents="box-only">
            <TextInput label={label} editable={false} iconName="md-calendar" {...rest} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default datePicker;
