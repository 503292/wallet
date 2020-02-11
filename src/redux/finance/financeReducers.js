/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import { Type } from './financeActions';

const data = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_FINANCE_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

const totalBalance = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_FINANCE_SUCCESS:
      return payload.totalBalance;
    default:
      return state;
  }
};

const typeTotalBalance = (state = null, { type, payload }) => {
  switch (type) {
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
