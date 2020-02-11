import { toast } from 'react-toastify';
import {
  addTransactionStart,
  addTransactionSuccess,
  addTransactionError,
} from './financeActions';
import { sendTransactionOnServer } from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

export const addTransactionOperation = data => (dispatch, getStore) => {
  const { token } = getStore().session;
  dispatch(addTransactionStart());
  sendTransactionOnServer(data, token)
    .then(response => {
      dispatch(addTransactionSuccess(response.data.finance));
    })
    .catch(error => {
      toast.error('Произошла ошибка. Попробуйте, пожалуйста, позже', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar',
      });
      return dispatch(addTransactionError(error));
    });
};

export const example = () => {};
