/* eslint-disable import/no-anonymous-default-export */
const TOKEN = 'aid_platform_token';
const USER_ID = 'user_id';

const getToken = () => localStorage.getItem(TOKEN);

const setToken = (token) => localStorage.setItem(TOKEN, token);

const getUserId = () => {
    const userId = localStorage.getItem(USER_ID);
    return Number(userId);
};

const setUserId = (user_id) => localStorage.setItem(USER_ID, user_id);

const removeToken = () => localStorage.removeItem(TOKEN);

const isAuthenticated = () => !!localStorage.getItem(TOKEN);

const removeUserId = () => localStorage.removeItem(USER_ID);

const clear = () => localStorage.clear();


export default { getToken, setToken, isAuthenticated, clear, removeToken, getUserId, setUserId, removeUserId };
