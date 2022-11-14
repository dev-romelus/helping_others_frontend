import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import storage from '../../utils/storage';

const PrivateRoute = ({ component: Component, redirectPath = '/login' }) => {
    if (storage.isAuthenticated()) return <Component />;
    
    return <Navigate to={redirectPath} />
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
