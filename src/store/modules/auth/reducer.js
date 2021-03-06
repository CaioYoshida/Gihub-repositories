import produce from 'immer';

const INITIAL_STATE = {
  login: '',
  password: '',
  searchUser: '',
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN': {
        draft.login = action.payload.login;
        draft.password = action.payload.password;
        break;
      };
      case '@auth/SIGN_OUT': {
        draft.login = '';
        draft.password = '';
        draft.searchUser = '';
        break;
      };
      case '@auth/SEARCH_USER': {
        draft.searchUser = action.payload;
        break;
      }
      default:
    }
  })
}
