import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://mywallet.goit.co.ua/api';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const register = credentials => axios.post('/register', credentials);

export const loginRequest = values => axios.post('/login', values);

export const getUserByToken = token => axios.get('/login', setToken(token));

export const getFinances = token => axios.get('/finance', setToken(token));
