import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Message = ({ className, message }) => {
  const { user_id } = useParams();

  return (
    <li className={`${className} ${message.user_id === Number(user_id) ? 'right' : ''}`}>
      <span>{message.body}</span>
    </li>
  )
}

export default styled(Message)`
  background-color: #f1f2f6;
  border-radius: 10px;
  padding: 8px;
  width: max-content;
  margin-bottom: 10px;

  &.right {
    align-self: flex-end;
    background-color: #1890ff;
    color: #fff;
  }
`;
