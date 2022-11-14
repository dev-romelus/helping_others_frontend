/* eslint-disable import/no-anonymous-default-export */
import userService from '../services/user.service';
import { GET_USER_SUCCESS, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../types/user.type';

const getCurrentUser = () => async (dispatch) => {
    userService.getCurrentUser()
        .then(response => response.json())
        .then(data => dispatch({ type: GET_USER_SUCCESS, payload: data }))
        .catch(console.error);
};

const updateUser = (updatedUser, { success }) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    userService.updateUser(updatedUser)
        .then(response => response.json())
        .then(data => {
            success();
            dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
        }).catch(console.error);
};

export default { getCurrentUser, updateUser };