import { combineReducers } from 'redux';
import { ActionType } from '../session/sessionActions';

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
    case ActionType.PERSIST_REQUEST:
      return true;

    case ActionType.PERSIST_SUCCESS:
    case ActionType.REGISTRATION_ERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  isModalAddTransactionOpen,
  isModalLogOutOpen,
  isLoading,
});
