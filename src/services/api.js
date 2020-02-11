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
axios.defaults.headers.delete['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://mywallet.goit.co.ua';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const sendTransactionOnServer = (data, token) =>
  axios.post('/api/finance', data, setToken(token));
