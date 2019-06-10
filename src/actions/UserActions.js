import { userConstants } from 'constants/ActionTypes';

export function loadUser() {
  return {
    type: userConstants.LOAD_USER,
  };
}

export function userLoaded(user) {
  return {
    type: userConstants.LOAD_USER_SUCCESS,
    user,
  };
}

export function userLoadingError(error) {
  return {
    type: userConstants.LOAD_USER_ERROR,
    error,
  };
}
