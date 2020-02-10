import * as sessionActions from './sessionActions';
import * as api from '../../services/api';

export const getUserOperation = () => (dispatch, getStore) => {
  const { token } = getStore().session;
  if (!token) {
    return;
  }
  // dispatch(sessionActions.getUserStart());
  api
    .getFinances(token)
    .then(response =>
      // dispatch(sessionActions.getUserSuccess(response.data.user)),
      console.log(response.data),
    )
    .catch(error => {
      // dispatch(sessionActions.getUserError(error));
      console.log(error);
    });
};

export const registrateOperation = credentials => dispatch => {
  dispatch(sessionActions.registrationStart());
  api
    .register(credentials)
    .then(response => {
      if (response.user) {
        console.log(response, 'data');
        // dispatch(sessionActions.registrationSuccess(response.data.user));
      } else if (response.data.error) {
        // toast.error(
        //   'Користвач з такою електронною поштою вже зареєстрований.',
        //   {
        //     position: toast.POSITION.BOTTOM_RIGHT,
        //   },
        // );
      }
    })
    .catch(error => {
      console.log(error);
    });
};

// export const logOutOperation = () => (dispatch, getStore) => {};
