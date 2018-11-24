import React, { PureComponent, Fragment } from 'react';
import { View, TouchableWithoutFeedback, Modal, StyleSheet, Picker, Button } from 'react-native';
import TextInput from '../TextInput/textInput';

export class picker extends PureComponent {
  state = {
    open: false,
    pickerValue: '',
  };

  openModal = () => {
    this.setState({ open: true });
  };

  selectValue = pickerValue => {
    this.setState({ pickerValue });
  };

  setValue = () => {
    const { pickerValue } = this.state;
    this.props.onChange(this.props.name, pickerValue);
    this.setState({ open: false });
  };

  render() {
    const { open, pickerValue } = this.state;
    const { data, label, error, iconName, value, inputRef, ...rest } = this.props;

    const pickerData = data.find(x => x.value === value);
    let pickerText = '';
    if (pickerData) {
      pickerText = pickerData.text;
    }
    return (
      <Fragment>
        <TouchableWithoutFeedback onPress={this.openModal}>
          <View pointerEvents="box-only">
            <TextInput
              label={label}
              editable={false}
              value={pickerText}
              iconName="md-arrow-dropdown"
              {...rest}
            />
          </View>
        </TouchableWithoutFeedback>
        {open && (
          <Modal transparent animationType="fade">
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: 'rgba(0,0,0, 0.2)', justifyContent: 'flex-end' },
              ]}
            >
              <View style={{ backgroundColor: '#fff', paddingBottom: 34 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Button title="Done" onPress={this.setValue} />
                </View>
                <Picker selectedValue={pickerValue} onValueChange={this.selectValue}>
                  {data.map(x => (
                    <Picker.Item key={x.value} label={x.text} value={x.value} />
                  ))}
                </Picker>
              </View>
            </View>
          </Modal>
        )}
      </Fragment>
    );
  }
}

export default picker;
