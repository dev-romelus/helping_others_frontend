import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Menu, Dropdown } from 'antd';

import authAction from '../../store/actions/auth.action';
import useMediaQuery from '../hooks/useMediaQuery';

const routes = [
    { label: 'Dashboard', actionName: 'dashboard' },
    { label: 'Request a service', actionName: 'requestService' },
    { label: 'Offer help', actionName: 'offerHelp' },
    { label: 'Account', actionName: 'account' },
    { label: 'Logout', actionName: 'logout' },
];

const Navbar = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const matches = useMediaQuery('(max-width: 768px)');

    const handleAction = (actionName) => {
        const actions = {
            requestService: () => navigate('/request-service'),
            offerHelp: () => navigate('/offer-help'),
            logout: () => {
                dispatch(authAction.logout());
                navigate('/login');
            },
            account: () => navigate(`/${actionName}`),
            dashboard: () => navigate(`/${actionName}`),
        }
        actions[actionName]();
    }

    const menu = (
        <Menu>
          {routes.map((route) => (
            <Menu.Item  key={route.label} onClick={() => handleAction(route.actionName)}>
                <span>{route.label}</span>
            </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <nav className={className}>
            <div>
                <Link to='/'>Aid Platform</Link>
            </div>
            {matches ? (            
                <Dropdown overlay={menu} trigger={['click']}>
                    <span class="material-icons-outlined">Menu</span>
                </Dropdown>
            ) 
                :
            (
                <ul>
                    {routes.map((route) => (
                        <li key={route.label} onClick={() => handleAction(route.actionName)}>
                            <span>{route.label}</span>
                        </li>
                    ))}
                </ul>
            )}


        </nav>
    )
};

export default styled(Navbar)`
    padding: 0 16px;
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        > a {
            color: #000;
            font-size: 24px;
        }
    }

    > ul {
        display: flex;
        gap: 10px;
        > li {
            > span {
                color: #000;
                font-size: 16px;
                cursor: pointer;
            }
        }
    }
`;
