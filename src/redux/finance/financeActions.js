export const Type = {
  ADD_TRANSACTION: 'ADD_TRANSACTION',
  ADD_TRANSACTION_START: 'ADD_TRANSACTION_START',
  ADD_TRANSACTION_SUCCESS: 'ADD_TRANSACTION_SUCCESS',
  ADD_TRANSACTION_ERROR: 'ADD_TRANSACTION_ERROR',

  GET_FINANCE_START: 'GET_FINANCE_START',
  GET_FINANCE_SUCCESS: 'GET_FINANCE_SUCCESS',
  GET_FINANCE_ERROR: 'GET_FINANCE_ERROR',
};

export const addTransactionStart = () => ({
  type: Type.ADD_TRANSACTION_START,
});

export const addTransactionSuccess = data => ({
  type: Type.ADD_TRANSACTION_SUCCESS,
  payload: data,
});

export const addTransactionError = error => ({
  type: Type.ADD_TRANSACTION_ERROR,
  payload: error,
});

export const getFinanceStart = () => ({
  type: Type.GET_FINANCE_START,
});

export const getFinanceSuccess = response => ({
  type: Type.GET_FINANCE_SUCCESS,
  payload: response,
});

export const getFinanceError = error => ({
  type: Type.GET_FINANCE_ERROR,
  payload: error,
});
