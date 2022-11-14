import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import conversationActions from '../../store/actions/conversation.action';
import Messages from '../helpers/Messages';
import MessageForm from '../core/forms/MessageForm';
import userAction from '../../store/actions/user.action';
import Conversations from '../helpers/Conversations';

const ChatFeed = ({ className }) => {
  const dispatch  = useDispatch();
  const { users } = useSelector((state) => state.conversationState);
  const { user } = useSelector((state) => state.userState);

  useEffect(() => {
    if (!users) dispatch(conversationActions.getConversation());
    if (!user) dispatch(userAction.getCurrentUser());
  }, [dispatch, users, user]);

  return (
    <div  className={className}>
      <Conversations />
      <div className='messages'>
        <Messages />
        <MessageForm />
      </div>
    </div>
  );
}

export default styled(ChatFeed)`
  display: flex;
  padding: 12px;
  gap: 16px;
  height: 100%;
  > .messages {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    border: 1px solid #dcdde2;
    border-radius: 4px;
    padding-top: 12px;
    overflow: hidden;
  }
`;