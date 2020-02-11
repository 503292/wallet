import { combineReducers } from 'redux';
import { Type } from './globalActions';

const isModalAddTransactionOpen = (state = false, { type }) => {
  switch (type) {
    case Type.MODAL_ADD_TRANSACTION_OPEN:
      return true;
    case Type.MODAL_ADD_TRANSACTION_CLOSE:
      return false;
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
