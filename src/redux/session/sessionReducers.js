/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import { ActionType } from './sessionActions';
// import type from '../types';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.REGISTRATION_SUCCESS:
    case ActionType.PERSIST_SUCCESS:
      return payload.data.user;

    case ActionType.LOGOUT:
    case ActionType.LOGIN_ERROR:
    case ActionType.REGISTRATION_ERROR:
      return null;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.REGISTRATION_SUCCESS:
      return payload.data.token;

    case ActionType.LOGOUT:
    case ActionType.LOGIN_ERROR:
    case ActionType.REGISTRATION_ERROR:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_ERROR:
    case ActionType.PERSIST_ERROR:
    case ActionType.REGISTRATION_ERROR:
      return payload.error;

    case ActionType.LOGIN_REQUEST:
    case ActionType.REGISTRATION_REQUEST:
    case ActionType.PERSIST_SUCCESS:
      return null;

    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.REGISTRATION_SUCCESS:
    case ActionType.PERSIST_SUCCESS:
      return true;

    case ActionType.LOGOUT:
    case ActionType.LOGIN_ERROR:
    case ActionType.REGISTRATION_ERROR:
      return false;

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
