import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import User from './User';

const Users = ({ className, title }) => {
  const { users } = useSelector((state) => state.conversationState);

  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>
          {users ? (users.map(user => (<User key={user.id} user={user}/>))) : <>No users</>}
      </ul>
    </div>
  )
}

export default styled(Users)`
  padding: 0 10px;
  min-width: 146px;
`;
