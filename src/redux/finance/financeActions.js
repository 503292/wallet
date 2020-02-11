export const Type = {
  GET_FINANCE_START: 'GET_FINANCE_START',
  GET_FINANCE_SUCCESS: 'GET_FINANCE_SUCCESS',
  GET_FINANCE_ERROR: 'GET_FINANCE_ERROR',
};

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
