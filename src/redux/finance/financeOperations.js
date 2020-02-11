import { toast } from 'react-toastify';
import * as api from '../../services/api';
import * as financeActions from './financeActions';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

export const addTransactionOperation = data => (dispatch, getStore) => {
  const { token } = getStore().session;
  dispatch(financeActions.addTransactionStart());
  api
    .sendTransactionOnServer(data, token)
    .then(response => {
      dispatch(financeActions.addTransactionSuccess(response.data.finance));
    })
    .catch(error => {
      toast.error('Произошла ошибка. Попробуйте, пожалуйста, позже', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar',
      });
      return dispatch(financeActions.addTransactionError(error));
    });
};

// eslint-disable-next-line import/prefer-default-export
export const getFinanceAxios = () => dispatch => {
  // const { token } = getStore().session;
  // if (!token) {
  //   return;
  // }
  dispatch(financeActions.getFinanceStart());
  api
    .getFinances(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlM2JjZTVjODMzYjhlMmM4NDg0MDNhOCIsImVtYWlsIjoibWF4QG1heC5jb20iLCJuYW1lIjoibWF4IiwiY3JlYXRlZEF0IjoiMjAyMC0wMi0wNlQwODoyOToxNi4xODRaIiwiaWF0IjoxNTgwOTc4MDI4fQ.ClDT-bLcDkzh1vfhPkBaoPY6JdTg9u2c5LjgBB9qBYo',
    )
    .then(response => {
      dispatch(financeActions.getFinanceSuccess(response.data.finance));
      // console.log('response ', response.data.finance);
    })
    .catch(error => {
      dispatch(financeActions.getFinanceError(error));
      // console.log(error);
    });
};
