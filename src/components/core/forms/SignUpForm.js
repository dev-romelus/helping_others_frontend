import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';

import Input from '../../helpers/Input';

import useForm from '../../hooks/useForm';

import authAction from '../../../store/actions/auth.action';
import FileUploader from '../../helpers/FileUploader';
import styled from 'styled-components';

const SignUpForm = ({ className }) => {
  const [file, setFile] = useState(null);
  const { values, errors, handleSubmit, handleFieldChange } = useForm(onSubmit, validateSignupForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (auth.isAuthenticated) navigate('/dashboard');
  }, [auth, navigate]);


  async function onSubmit() {
    if (file) {
      const { confirmPassword, ...userData } = values;
      const formData = new FormData();
      formData.append('firstName', userData.firstName);
      formData.append('lastName', userData.lastName);
      formData.append('email', userData.email);
      formData.append('password', userData.password);
      formData.append('identityDocument', file);
      
      dispatch(authAction.signup(formData));
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <Input type='text' name='firstName' placeholder='Enter your first name' onChange={handleFieldChange} error={errors.firstName} />
      <Input type='text' name='lastName' placeholder='Enter your last name' onChange={handleFieldChange} error={errors.lastName} />
      <Input type='email' name='email' placeholder='Enter your email' onChange={handleFieldChange} error={errors.email} />
      <Input type='password' name='password' placeholder='Enter your password' onChange={handleFieldChange} error={errors.password} />
      <Input type='password' name='confirmPassword' placeholder='Confirm password' onChange={handleFieldChange} error={errors.confirmPassword} />
      <FileUploader label='Choose file' onChange={setFile} />
      <Button htmlType='submit' size='large' block>Sign up</Button>

      <div>
        <span>You already have an account?</span>{' '}
        <Link to='/login'>Log in</Link>
      </div>
    </form>
  )
}

function validateSignupForm(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter your email.';
  }

  if (!values.firstName) {
    errors.firstName = 'Please enter your first name.';
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter your last name.';
  }

  if (!values.password) {
    errors.password = 'Please enter your password.';
  } else if (values.password.length < 6) {
    errors.password = 'The password must be at least 6 characters long.';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "The password doesn't match.";
  }

  return errors;
}

export default styled(SignUpForm)`
  > input {
    margin-bottom: 10px;
  }
`;