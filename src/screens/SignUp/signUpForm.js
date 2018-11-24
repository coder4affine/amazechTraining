import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { string, object, ref } from 'yup';

import TextInput from '../../components/TextInput/textInput';
import Button from '../../components/Button/button';
// eslint-disable-next-line import/no-unresolved
import Picker from '../../components/Picker/picker';
// eslint-disable-next-line import/no-unresolved
import DatePicker from '../../components/DatePicker/datePicker';

const data = [
  {
    text: 'Select Gender',
    value: '',
  },
  {
    text: 'Male',
    value: 'male',
  },
  {
    text: 'Female',
    value: 'female',
  },
  {
    text: 'Third Gender',
    value: 'thirdGender',
  },
];

const signInForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={object().shape({
      username: string().required('username is required'),
      gender: string().required('Gender is required'),
      password: string()
        .min(6, 'Min 6 character require')
        .max(20, 'Max 20 character require')
        .required('Password is required'),
      confirmPassword: string()
        .oneOf([ref('password', null)], 'Confirm Password must matched Password')
        .required('Confirm Password is required'),
    })}
    render={({
      values,
      handleSubmit,
      setFieldValue,
      errors,
      touched,
      setFieldTouched,
      isValid,
      isSubmitting,
    }) => {
      let userName;
      let lastName;
      let email;
      let password;
      let confirmPassword;
      return (
        <Fragment>
          <TextInput
            label="First Name"
            autoCapitalize="none"
            value={values.firstName}
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            name="firstName"
            error={touched.firstName && errors.firstName}
            returnKeyType="next"
            onSubmitEditing={() => {
              lastName.focus();
            }}
          />
          <TextInput
            label="Last Name"
            inputRef={inputRef => {
              lastName = inputRef;
            }}
            autoCapitalize="none"
            value={values.lastName}
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            name="lastName"
            error={touched.lastName && errors.lastName}
            returnKeyType="next"
            onSubmitEditing={() => {
              email.focus();
            }}
          />
          <Picker
            data={data}
            label="Gender"
            name="gender"
            onChange={setFieldValue}
            value={values.gender}
            error={touched.gender && errors.gender}
          />
          <DatePicker
            label="Birth Date"
            name="birthDate"
            onChange={setFieldValue}
            value={values.birthDate}
            error={touched.birthDate && errors.birthDate}
          />
          <TextInput
            label="Email"
            inputRef={inputRef => {
              email = inputRef;
            }}
            autoCapitalize="none"
            value={values.email}
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            name="email"
            error={touched.email && errors.email}
            returnKeyType="next"
            onSubmitEditing={() => {
              userName.focus();
            }}
          />
          <TextInput
            label="Username"
            inputRef={inputRef => {
              userName = inputRef;
            }}
            autoCapitalize="none"
            value={values.username}
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            name="username"
            error={touched.username && errors.username}
            returnKeyType="next"
            onSubmitEditing={() => {
              password.focus();
            }}
          />
          <TextInput
            label="Password"
            inputRef={inputRef => {
              password = inputRef;
            }}
            autoCapitalize="none"
            secureTextEntry
            value={values.password}
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            name="password"
            error={touched.password && errors.password}
            returnKeyType="next"
            onSubmitEditing={() => confirmPassword.focus()}
          />
          <TextInput
            label="Confirm Password"
            inputRef={inputRef => {
              confirmPassword = inputRef;
            }}
            autoCapitalize="none"
            secureTextEntry
            value={values.confirmPassword}
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            name="confirmPassword"
            error={touched.confirmPassword && errors.confirmPassword}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
          />

          <Button
            title="Submit"
            onPress={handleSubmit}
            disabled={!isValid || isSubmitting}
            loading={isSubmitting}
          />
        </Fragment>
      );
    }}
  />
);

signInForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default signInForm;
