import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';

import Image from '../helpers/Image';
import useForm from '../hooks/useForm'
import Input from '../helpers/Input';
import userAction from '../../store/actions/user.action';

const Account = ({ className }) => {
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(false);
    const { user, loading } = useSelector((state) => state.userState);
    const { values, errors, handleSubmit, handleFieldChange } = useForm(onSubmit, validateUpdateProfileForm);

    function onSubmit () {
        dispatch(userAction.updateUser({ ...user, ...values }, { success: () => setDisplay(false) }));
    }

    const handleCancel = () => {
        setDisplay(false);
    };
    
    return user ? (
        <div className={className}>
            {display ? (
                <div className='update_profile'>
                    <h2>Update my personal information</h2>
                    <form onSubmit={handleSubmit}>
                        <Input defaultValue={user.firstName} type='text' name='firstName' placeholder='Enter your first name' onChange={handleFieldChange} error={errors.firstName} />
                        <Input defaultValue={user.lastName} type='text' name='lastName' placeholder='Enter your last name' onChange={handleFieldChange} error={errors.lastName} />
                        <Input defaultValue={user.email} type='email' name='email' placeholder='Enter your email' onChange={handleFieldChange} error={errors.email} />
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button htmlType='submit' loading={loading}>Update profile</Button>
                    </form>
                </div>
            ) : (
                <div className='user_info'>
                    <div className='edit'>
                        <h2>My personal information</h2>
                        <span class='material-icons-outlined' onClick={() => setDisplay(true)}>edit</span>
                    </div>
                    <div className='info'>
                        <span>
                            <strong>Firstname: </strong>
                            {user.firstName}
                        </span>
                        <span>
                            <strong>Lastname: </strong>
                            {user.lastName}
                        </span>
                        <span>
                            <strong>Email: </strong>
                            {user.email}
                        </span>
                    </div>
                </div>
            )}
            <div className='identity_document'>
                <h2>Identity document</h2>
                <Image src={user.identity_document} />
            </div>
        </div>
    ) : 
    <></>;
}

function validateUpdateProfileForm() {
    return {}
}

export default styled(Account)`
    display: flex;
    padding: 12px;
    gap: 14px;
    > div {
        border: 1px solid #dcdde2;
        border-radius: 4px;
        height: max-content;
    }
    > .user_info {
        width: 40%;
        padding: 14px;
        > .edit {
            display: flex;
            align-items: center;
            justify-content: space-between;
            > span {
                cursor: pointer;
            }
        }
        > .info {
            line-height: 1.5;
            display: flex;
            flex-direction: column;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    } 
    .update_profile {
        width: 40%;
        padding: 14px;
        > form {
            > input {
                margin-bottom: 10px;
            }
            > button {
                margin-right: 10px;
            }
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    > .identity_document {
        width: 60%;
        padding: 14px;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
