import { combineReducers } from 'redux';
// import type from '../types';

const isModalAddTransactionOpen = (state = false, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

const isModalLogOutOpen = (state = false, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  isModalAddTransactionOpen,
  isModalLogOutOpen,
  isLoading,
});
