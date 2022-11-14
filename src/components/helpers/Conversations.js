import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import conversationUtils from '../../utils/conversation-utils';

const Conversations = ({ className }) => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.userState);
    const { conversations } = useSelector((state) => state.conversationState);

    function handleClick(url) {
        navigate(url)
    }

    const formattedConversations = useMemo(() => {
        return user && conversations ? conversationUtils.formatConversations(conversations, user) : []
    }, [conversations, user])
    
    return (
        <div className={className}>
            <h2>Conversations</h2>
            <ul>
                {formattedConversations.map(conversation => (
                    <li key={conversation.key}>
                        <span>
                            The need: {conversation.description}
                        </span>
                        <span onClick={() => handleClick(`/conversations/${conversation.key}/messages/${user?.id}/service/${conversation.service_id}`)}>
                            {/* {conversation.name} */}
                            View conversation
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default styled(Conversations)`
    border: 1px solid #dcdde2;
    border-radius: 4px;
    padding: 12px;
    width: 40%;
    height: min-content;

    @media (max-width: 768px) {
        width: 100%;     
    }
    > ul {
        > li {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            border-bottom: 1px solid #dcdde2;
                > span:nth-child(2) {
                    cursor: pointer;
                    margin-bottom: 10px;
                    color: #1890ff;
                    &:hover {
                        text-decoration: underline;
                    }
                    &:last-child {
                        margin-bottom: none;
                    }
                }
            &:last-child {
                border-bottom: none;
            }
        }
    }
`;
