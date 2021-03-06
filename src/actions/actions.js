// example of a thunk using the redux-thunk middleware
export function example(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: "ACTION_TEST_INITIATED",
      settings
    });
  };
}

export function getBooks() {
  return {
    type: 'BOOKLIST_REQUESTED',
  };
}

export function loginRequested(creds) {
  return {
    type: 'LOGIN_REQUESTED',
    payload: creds,
  };
}

export function logout() {
  return {
    type: 'LOGOUT_REQUESTED',
  };
}
export function regRequested(creds) {
  return {
    type: 'REG_REQUESTED',
    payload: creds,
  };
}

export function regClear() {
  return {
    type: 'REG_CLEAR_REQUESTED'
  };
}

export function updateReviewedBook(bookId) {
  return {
    type: 'REVIEWED_BOOK_UPDATED',
    payload: bookId,
  };
} 

export function extractTokenData(token) {
  return {
    type: 'EXTRACT_TOKEN_DATA',
    payload: token,
  };
} 