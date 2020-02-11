import {
  loginRequest,
  loginError,
  loginSuccess,
  registrationRequest,
  registrationError,
  registrationSuccess,
} from './sessionActions';
import * as API from '../../services/api';

export const login = values => dispatch => {
  dispatch(loginRequest());

  API.loginRequest(values)
    .then(response => {
      dispatch(loginSuccess(response.data));
    })
    .catch(error => {
      // console.log(error);
      dispatch(loginError(error));
    });
};

export const registration = values => dispatch => {
  dispatch(registrationRequest());

  API.register(values)
    .then(response => {
      dispatch(registrationSuccess(response.data));
    })
    .catch(error => {
      dispatch(registrationError(error));
    });
};
