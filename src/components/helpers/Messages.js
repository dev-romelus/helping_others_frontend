import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Message from './Message';

import messageAction from '../../store/actions/message.action';

const Messages = ({ className }) => {
    const dispatch  = useDispatch();
    const { conversation_id } = useParams();
    const { messages } = useSelector((state) => state.messageState);

    useEffect(() => {
        dispatch(messageAction.getMessages(conversation_id)); 
    }, [dispatch, conversation_id]);
    
    return (
        <ul className={className}>
            {messages && messages.map(message => <Message key={message.id} message={message} />).reverse()}
        </ul>
    );
}

export default styled(Messages)`
    display: flex;
    flex-direction: column;
    padding: 0 32px;
`;