export const Type = {
  LOADER_ON: 'isLoading/LOADER_ON',
  LOADER_OFF: 'isLoading/LOADER_OFF',

  MODAL_ADD_TRANSACTION_OPEN: 'MODAL_ADD_TRANSACTION_OPEN',
  MODAL_ADD_TRANSACTION_CLOSE: 'MODAL_ADD_TRANSACTION_CLOSE',
};

export const loaderOn = () => ({
  type: Type.LOADER_ON,
});
export const loaderOff = () => ({
  type: Type.LOADER_OFF,
});

export const modalAddTransactionOpen = () => ({
  type: Type.MODAL_ADD_TRANSACTION_OPEN,
});

export const modalAddTransactionClose = () => ({
  type: Type.MODAL_ADD_TRANSACTION_CLOSE,
});
