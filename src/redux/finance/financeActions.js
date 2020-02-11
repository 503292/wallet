export const Type = {
  ADD_TRANSACTION: 'ADD_TRANSACTION',
  ADD_TRANSACTION_START: 'ADD_TRANSACTION_START',
  ADD_TRANSACTION_SUCCESS: 'ADD_TRANSACTION_SUCCESS',
  ADD_TRANSACTION_ERROR: 'ADD_TRANSACTION_ERROR',
};

export const addTransaction = data => ({
  type: Type.ADD_TRANSACTION,
  payload: data,
});

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
