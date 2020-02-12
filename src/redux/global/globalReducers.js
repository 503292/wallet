import { combineReducers } from 'redux';
import { Type } from './globalActions';
import { ActionType } from '../session/sessionActions';
import * as FinanceType from '../finance/financeActions';

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
    // case Type.LOADER_ON: // Включить спиннер
    case ActionType.LOGIN_REQUEST:
    case ActionType.REGISTRATION_REQUEST:
    case ActionType.PERSIST_REQUEST:
      // case FinanceType.Type.GET_FINANCE_START:
      return true;
    // case Type.LOADER_OFF: // Выключить спиннер
    case ActionType.PERSIST_SUCCESS:
    case ActionType.LOGIN_SUCCESS:
    case ActionType.LOGIN_ERROR:
    case ActionType.REGISTRATION_SUCCESS:
    case ActionType.REGISTRATION_ERROR:
    case FinanceType.Type.GET_FINANCE_SUCCESS:
    case FinanceType.Type.GET_FINANCE_ERROR:
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
