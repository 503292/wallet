import { combineReducers } from 'redux';
import { Type } from './financeActions';

const data = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_TRANSACTION_SUCCESS:
      return payload.data;
    case Type.ADD_TRANSACTION:
      return [payload, ...state];
    case Type.GET_FINANCE_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

const totalBalance = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.ADD_TRANSACTION_SUCCESS:
      return payload.totalBalance;
    case Type.ADD_TRANSACTION:
      return payload.balanceAfter;
    case Type.GET_FINANCE_SUCCESS:
      return payload.totalBalance;
    default:
      return state;
  }
};

const typeTotalBalance = (state = '+', { type, payload }) => {
  switch (type) {
    case Type.ADD_TRANSACTION_SUCCESS:
      return payload.typeTotalBalance;
    case Type.ADD_TRANSACTION:
      return payload.typeBalanceAfter;
    case Type.GET_FINANCE_SUCCESS:
      return payload.typeTotalBalance;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  totalBalance,
  typeTotalBalance,
});
