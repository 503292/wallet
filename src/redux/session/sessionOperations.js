import axios from 'axios';
import {
  loginRequest,
  loginError,
  loginSuccess,
  registrationRequest,
  registrationError,
  registrationSuccess,
  persistRequest,
  persistSuccess,
  persistError,
  logOut,
} from './sessionActions';
import * as API from '../../services/api';
import { getToken } from './sessionSelectors';

// axios.defaults.baseURL = 'https://mywallet.goit.co.ua/api';
const setToken = token => {
  axios.defaults.headers.common.Authorization = `Berear ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const login = values => dispatch => {
  dispatch(loginRequest());

  API.loginRequest(values)
    .then(response => {
      setToken(response.data.token);

      dispatch(loginSuccess(response.data));
    })
    .catch(error => {
      alert('Such user doesnt exist');
      dispatch(loginError(error));
    });
};

export const registration = values => dispatch => {
  dispatch(registrationRequest());

  API.register(values)
    .then(response => {
      setToken(response.data.token);

      dispatch(registrationSuccess(response.data));
    })
    .catch(error => {
      alert('User with this E-Meil is already exist');
      dispatch(registrationError(error));
    });
};

export const refreshToken = () => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) {
    return;
  }
  setToken(token);
  dispatch(persistRequest());

  // const options = {
  //   headers: {
  //     Authorization: `Berear ${getToken}`,
  //   },
  // };

  API.getFinances(token)
    .then(response => {
      dispatch(persistSuccess(response.data));
    })
    .catch(error => {
      clearToken();
      dispatch(persistError(error));
    });
};

export const userLogOut = () => dispatch => {
  clearToken();
  dispatch(logOut());
};
