import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
};

export default (state = initialState, action = '') => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return state;
    }

    default:
      return state;
  }
};
