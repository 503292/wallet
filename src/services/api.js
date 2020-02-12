import axios from 'axios';

export const getCurrencyPrivatBank = () => {
  return axios
    .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(responce => responce.data)
    .catch(error => error);
};

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
export const sendTransactionOnServer = (data, token) =>
  axios.post('/finance', data, setToken(token));

// export const getUserByToken = token => axios.get('/login', setToken(token));

export const getFinances = token => axios.get('/finance', setToken(token));
