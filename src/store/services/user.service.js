/* eslint-disable import/no-anonymous-default-export */
import authHeader from "../../utils/auth-header";
import storage from "../../utils/storage";

const getCurrentUser = () => {
    return fetch(`/api/v1/users/${storage.getUserId()}`, {
        method: 'GET',   
        headers: authHeader(), 
    });
}

const updateUser = (updatedUser) => {
    return fetch(`/api/v1/users/${storage.getUserId()}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: authHeader(), 
    });
}

export default { getCurrentUser, updateUser };