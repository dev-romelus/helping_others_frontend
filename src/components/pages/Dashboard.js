import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import User from '../helpers/User';
import { Space } from '../helpers/Space';
import Conversations from '../helpers/Conversations';
import MyRequests from '../helpers/MyRequests';

const Dashboard = ({ className }) => {
    const { loading, user } = useSelector((state) => state.userState);

    return !loading && (
        <div className={className}>
            <User user={user} />
            <Space />
            <section>
                <Conversations />
                <MyRequests />
            </section>
        </div>
    )
}

export default styled(Dashboard)`
    padding: 12px;
    > section {
        display: flex;
        width: 100% !important;
        gap: 16px;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
`;
