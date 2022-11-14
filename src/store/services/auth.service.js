/* eslint-disable import/no-anonymous-default-export */
const login = (credentials) => {
    return fetch('https://helping-others.herokuapp.com/api/v1/login', {
        method: 'POST',   
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials), 
    });
};

const signup = (userData) => {
    return fetch('https://helping-others.herokuapp.com/api/v1/signup', {
        method: 'POST',
        body: userData,
    });
};

export default { login, signup };
