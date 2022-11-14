import React from 'react';
import styled from 'styled-components';

const User = ({ className, user }) => {
  return (
    <li className={className}>
      <span>Hello, </span>
      <span>{user.lastName}</span>
      {' '}
      <span>{user.firstName}</span>
    </li>
  )
}

export default styled(User)`
  border-radius: 4px;
  > span {
    font-weight: 600;
    font-size: 18px;
  }
`;
