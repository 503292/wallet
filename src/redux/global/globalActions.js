export const Type = {
  MODAL_ADD_TRANSACTION_OPEN: 'MODAL_ADD_TRANSACTION_OPEN',
  MODAL_ADD_TRANSACTION_CLOSE: 'MODAL_ADD_TRANSACTION_CLOSE',
};

export const modalAddTransactionOpen = () => ({
  type: Type.MODAL_ADD_TRANSACTION_OPEN,
});

export const modalAddTransactionClose = () => ({
  type: Type.MODAL_ADD_TRANSACTION_CLOSE,
});
