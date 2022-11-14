import storage from './storage';

export default function authHeader() {
    const token = storage.getToken();
    return token ? { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
} 
