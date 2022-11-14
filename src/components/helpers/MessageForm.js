import React from 'react';
import { useDispatch } from 'react-redux';

import Input from './Input';
import Button from './Button';

import useForm from '../hooks/useForm';
import messageAction from '../../store/actions/message.action';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MessageForm = ({ className }) => {
  const dispatch = useDispatch();
  const { values, errors, handleSubmit, handleFieldChange } = useForm(onSubmit, validateMessage);
  const { user_id, conversation_id } = useParams();

  function onSubmit() {
    dispatch(messageAction.sendMessage({ user_id, conversation_id, body: values.message }));
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Input type='text' name='message' onChange={handleFieldChange} placeholder='Type a message' error={errors.message}/>
      <Button disabled={!values.message}>Send</Button>
    </form>
  )
}

function validateMessage(values) {
  const errors = {};

  if (!values.message) {
    errors.message = 'Please type a message.';
  }

  return errors;
}

export default styled(MessageForm)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;