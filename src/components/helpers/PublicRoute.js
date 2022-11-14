import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import storage from '../../utils/storage';

const PublicRoute = ({ component: Component, path }) => {
    if (storage.isAuthenticated() && path !== "/") return <Navigate to='/dashboard' />

    return <Component />
};

PublicRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default PublicRoute;
