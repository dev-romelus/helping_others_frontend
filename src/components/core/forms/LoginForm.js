import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import Input from '../../helpers/Input';

import useForm from '../../hooks/useForm';
import authAction from '../../../store/actions/auth.action';

const LoginForm = ({ className }) => {
    const { values, errors, handleSubmit, handleFieldChange } = useForm(onSubmit, validateLoginForm);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    
    async function onSubmit() {
        dispatch(authAction.login(values));
    }

    useEffect(() => {
        if (auth.isAuthenticated) navigate('/dashboard');
    }, [auth, navigate]);

    return (
        <form className={className} onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <Input type='email' name='email' placeholder='Enter your email' onChange={handleFieldChange} error={errors.email} />
            <Input type='password' name='password' placeholder='Enter your password' onChange={handleFieldChange} error={errors.password} />
            <Button htmlType='submit' size='large' block>Log in</Button>
            <div>
                <span>You don't have an account yet?</span>
                {' '}
                <Link to='/register'>Sign up</Link>
            </div>
        </form>
    )
};

function validateLoginForm(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Please enter your email.';
    }

    if (!values.password) {
        errors.password = 'Please enter your password.';
    } else if (values.password.length < 6) {
        errors.password = 'The password must be at least 6 characters long.';
    }

    return errors;
}

export default styled(LoginForm)`
  > input {
    margin-bottom: 10px;
  }
`;
