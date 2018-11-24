import React, { PureComponent, Fragment } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  DatePickerIOS,
  Button,
} from 'react-native';
import moment from 'moment';
import TextInput from '../TextInput/textInput';

export class datePicker extends PureComponent {
  state = { open: false, chosenDate: new Date() };

  openModal = () => {
    this.setState({ open: true });
  };

  setDate = value => {
    this.setState({ chosenDate: value });
  };

  selectDate = () => {
    const { chosenDate } = this.state;
    this.props.onChange(this.props.name, moment(chosenDate).format('DD-MM-YYYY'));
    this.setState({ open: false });
  };

  render() {
    const { label, ...rest } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <TouchableWithoutFeedback onPress={this.openModal}>
          <View pointerEvents="box-only">
            <TextInput label={label} editable={false} iconName="md-calendar" {...rest} />
          </View>
        </TouchableWithoutFeedback>
        {open && (
          <Modal transparent animationType="fade">
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  justifyContent: 'flex-end',
                },
              ]}
            >
              <View style={{ backgroundColor: '#fff', paddingBottom: isIPhoneX ? 34 : 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Button title="Done" onPress={this.selectDate} />
                </View>
                <DatePickerIOS date={this.state.chosenDate} onDateChange={this.setDate} />
              </View>
            </View>
          </Modal>
        )}
      </Fragment>
    );
  }
}

export default datePicker;
