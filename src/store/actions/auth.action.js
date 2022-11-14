/* eslint-disable import/no-anonymous-default-export */
import authService from '../services/auth.service';
import storage from '../../utils/storage';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../types/auth.type';

const login = (credentials) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    authService.login(credentials)
        .then(response => response.json())
        .then(data => {
            if (data.code ===  401) {
                dispatch({ type: LOGIN_FAILURE })
            } else {
                setToken(data.token);
                setUserId(data.user.id);
                dispatch({ type: LOGIN_SUCCESS });
            }
        })
        .catch((err) => console.log(err));
};

const signup = (userData) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    authService.signup(userData)
        .then(response => response.json())
        .then(data => {
            setToken(data.token);
            setUserId(data.user.id);

            dispatch({ type: SIGNUP_SUCCESS, payload: data.user });
        })
        .catch((err) => {
            dispatch({ type: SIGNUP_FAILURE })
            console.log(err)
        });
};

function setToken(token) {
    if (token) storage.setToken(token);
}

function setUserId(id) {
    if (id) storage.setUserId(Number(id));
}
const logout = () => (dispatch) => dispatch({ type: LOGOUT });

export default { login, logout, signup };