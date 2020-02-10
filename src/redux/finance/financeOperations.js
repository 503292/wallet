import * as api from '../../services/api';

import * as financeActions from './financeActions';

// eslint-disable-next-line import/prefer-default-export
export const getFinanceAxios = () => (dispatch, getStore) => {
  const { token } = getStore().session;
  if (!token) {
    return;
  }
  dispatch(financeActions.getFinanceStart());
  api
    .getFinances(token)
    .then(response =>
      dispatch(financeActions.getFinanceSuccess(response.data.user)),
    )
    .catch(error => {
      dispatch(financeActions.getFinanceError(error));
      console.log(error);
    });
};
