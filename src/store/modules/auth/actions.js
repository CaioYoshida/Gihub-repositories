export function signIn(login, password) {
  return {
    type: '@auth/SIGN_IN',
    payload: { login, password },
  };
};

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
};

export function searchUser(searchUser) {
  return {
    type: '@auth/SEARCH_USER',
    payload: searchUser,
  };
};
