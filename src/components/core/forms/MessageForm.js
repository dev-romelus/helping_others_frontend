import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';

import Input from '../../helpers/Input';

import useForm from '../../hooks/useForm';
import messageAction from '../../../store/actions/message.action';

const MessageForm = ({ className }) => {
  const dispatch = useDispatch();
  const { values, handleSubmit, handleFieldChange, setValues } = useForm(onSubmit, validate);
  const { user_id, conversation_id, service_id } = useParams();

  function onSubmit() {
    if (values.message) dispatch(messageAction.sendMessage({ user_id: Number(user_id), conversation_id, body: values.message, service_id: Number(service_id) }, clearData));
  }

  function clearData() {
    setValues({});
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Input placeholder='Write a message...' type='text' name='message' onChange={handleFieldChange} value={values.message || ''} />
      <Button htmlType='submit' size='large' disabled={!values.message}>Send</Button>
    </form>
  )

  function validate(values) {
    const errors = {};

    if (!values.message.trim()) {
      errors.message = 'Type a message.';
    }

    return errors;
  }
}

export default styled(MessageForm)`
  display: flex;
`;