/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../types/auth.type';
import storage from '../../utils/storage';

const initialState = {
    token: storage.getToken(),
    isAuthenticated: false,
    loading: true,
    user: null,
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        case SIGNUP_FAILURE:
        case LOGIN_FAILURE:
        case LOGOUT:
            storage.removeToken();
            storage.removeUserId();
            return {
                isAuthenticated: false,
                loading: false,
                token: null,
                user: null,
            };
        default:
            return state;
    }
};
