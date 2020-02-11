/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import { Type } from './sessionActions';

const user = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
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
