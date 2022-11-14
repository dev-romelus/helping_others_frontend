/* eslint-disable import/no-anonymous-default-export */
const login = (credentials) => {
    return fetch('/api/v1/login', {
        method: 'POST',   
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials), 
    });
};

const signup = (userData) => {
    return fetch('/api/v1/signup', {
        method: 'POST',
        body: userData,
    });
};

export default { login, signup };
