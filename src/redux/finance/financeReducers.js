import { combineReducers } from 'redux';
import { Type } from './financeActions';

const data = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_TRANSACTION_SUCCESS:
      return payload.data;
    case Type.ADD_TRANSACTION:
      return [payload, ...state];
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
    default:
      return state;
  }
};

export default combineReducers({
  data,
  totalBalance,
  typeTotalBalance,
});
