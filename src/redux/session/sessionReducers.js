/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import { Type } from './sessionActions';

const user = (state = null, { type, payload }) => {
  switch (type) {
    // case Type.GET_USER_SUCCESS:
    case Type.REGISTRATION_SUCCESS:
      // case Type.LOG_IN_SUCCESS:
      console.log(payload, 'payload');
      return payload.userData;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case Type.REGISTRATION_SUCCESS:
      // case Type.LOG_IN_SUCCESS:
      return payload.token;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    // case Type.GET_USER_ERROR:
    // case Type.LOG_IN_ERROR:
    case Type.REGISTRATION_ERROR:
      return payload;
    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    // case Type.GET_USER_SUCCESS:
    case Type.REGISTRATION_SUCCESS:
      // case Type.LOG_IN_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  error,
  isAuth,
});
