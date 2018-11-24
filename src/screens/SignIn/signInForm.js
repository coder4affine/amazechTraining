import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { string, object } from 'yup';

import TextInput from '../../components/TextInput/textInput';
import Button from '../../components/Button/button';

const signInForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={object().shape({
      username: string().required('username is required'),
      password: string()
        .min(6, 'Min 6 character require')
        .max(20, 'Max 20 character require')
        .required('Password is required'),
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
      let password;
      return (
        <Fragment>
          <TextInput
            label="Username"
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
