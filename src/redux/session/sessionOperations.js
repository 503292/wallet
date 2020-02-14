import axios from 'axios';
import { toast } from 'react-toastify';
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

toast.configure({
  autoClose: 5000,
  draggable: false,
});

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
      toast.error('Invalid E-Mail or password', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar',
      });
      return dispatch(loginError(error));
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
      toast.error('User with this E-Meil is already exist', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar',
      });
      return dispatch(registrationError(error));
    });
};

export const refreshToken = () => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) {
    return;
  }
  setToken(token);
  dispatch(persistRequest());

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
