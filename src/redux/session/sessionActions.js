export const Type = {
  //   LOGIN_WITH_GOOGLE: 'session/LOGIN_WITH_GOOGLE',
  //   GET_USER_START: 'session/GET_USER_START',
  //   GET_USER_SUCCESS: 'session/GET_USER_SUCCESS',
  //   GET_USER_ERROR: 'session/GET_USER_ERROR',
  REGISTRATION_START: 'session/REGISTRATION_START',
  REGISTRATION_SUCCESS: 'session/REGISTRATION_SUCCESS',
  REGISTRATION_ERROR: 'session/REGISTRATION_ERROR',
  //   LOG_IN_START: 'session/LOG_IN_START',
  //   LOG_IN_SUCCESS: 'session/LOG_IN_SUCCESS',
  //   LOG_IN_ERROR: 'session/LOG_IN_ERROR',
  //   GET_TOKEN: 'session/GET_TOKEN',
  //   LOG_OUT: 'session/LOG_OUT',
};

/*
 * Registration
 */

export const registrationStart = () => ({
  type: Type.REGISTRATION_START,
});
export const registrationSuccess = response => ({
  type: Type.REGISTRATION_SUCCESS,
  payload: response,
});
export const registrationError = error => ({
  type: Type.REGISTRATION_ERROR,
  payload: error,
});
