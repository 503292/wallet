import { combineReducers } from 'redux';
import { Type } from './globalActions';
import * as SessionType from '../session/sessionActions';
import * as FinanceType from '../finance/financeActions';

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
    case Type.LOADER_ON: // Включить спиннер
    case SessionType.ActionType.LOGIN_REQUEST:
    case SessionType.ActionType.REGISTRATION_REQUEST:
      // case FinanceType.Type.GET_FINANCE_START:
      return true;
    case Type.LOADER_OFF: // Выключить спиннер
    case SessionType.ActionType.LOGIN_SUCCESS:
    case SessionType.ActionType.LOGIN_ERROR:
    case SessionType.ActionType.REGISTRATION_SUCCESS:
    case SessionType.ActionType.REGISTRATION_ERROR:
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
