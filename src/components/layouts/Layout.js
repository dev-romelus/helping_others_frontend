import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Main from './Main';

import userAction from '../../store/actions/user.action';
import servicesAction from '../../store/actions/services.action';
import conversationAction from '../../store/actions/conversation.action';
import { useLayout } from '../../contexts/LayoutContext';

const Layout = ({ className }) => {
  const state = useLayout();

  const dispatch  = useDispatch();  

  useEffect(() => {
    dispatch(userAction.getCurrentUser());
    dispatch(servicesAction.getServices());
    dispatch(conversationAction.getConversation());
  }, [dispatch]);

  return (
    <div className={className}>
      <Main toggle={state.toggle} />
    </div>
  );
};

export default styled(Layout)`
  height: 80%;
`;
