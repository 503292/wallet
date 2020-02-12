export const ActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  REGISTRATION_REQUEST: 'REGISTRATION_REQUEST',
  REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
  REGISTRATION_ERROR: 'REGISTRATION_ERROR',
  LOGOUT: 'LOGOUT',
  PERSIST_REQUEST: 'PERSIST_REQUEST',
  PERSIST_SUCCESS: 'PERSIST_SUCCESS',
  PERSIST_ERROR: 'PERSIST_ERROR',
};

// login actions
export const loginRequest = () => ({
  type: ActionType.LOGIN_REQUEST,
});
export const loginSuccess = data => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: { data },
});
export const loginError = error => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: { error },
});

export const registrationRequest = () => ({
  type: ActionType.REGISTRATION_REQUEST,
});

export const registrationSuccess = data => ({
  type: ActionType.REGISTRATION_SUCCESS,
  payload: { data },
});

export const registrationError = error => ({
  type: ActionType.REGISTRATION_ERROR,
  payload: { error },
});
export const logOut = () => ({
  type: ActionType.LOGOUT,
});

export const persistRequest = () => ({
  type: ActionType.PERSIST_REQUEST,
});

export const persistSuccess = data => ({
  type: ActionType.PERSIST_SUCCESS,
  payload: { data },
});

export const persistError = error => ({
  type: ActionType.PERSIST_ERROR,
  payload: { error },
});
