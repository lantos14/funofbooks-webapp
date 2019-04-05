export default function User(state = {
  regInProgress: false,
  regSuccess: null,
  regErrorMsg: null,
  regerrorType: null,
  loginSuccess: null,
  token: null,
}, action) {
  switch (action.type) {
    case 'REG_REQUESTED': {
      return {
        ...state,
        regInProgress: true,
      };
    }
    case 'REG_SUCCEEDED': {
      return {
        ...state,
        regInProgress: false,
        regSuccess: true,
      };
    }

    case 'REG_FAILED': {
      return {
        ...state,
        regInProgress: false,
        regSuccess: false,
        regErrorMsg: action.payload.message,
        regerrorType: action.payload.errors,
      };
    }
    case 'REG_CLEAR_REQUESTED': {
      return {
        ...state,
        regInProgress: false,
        regSuccess: null,
        regErrorMsg: null,
        regerrorType: null,
      };
    }

    case 'LOGIN_SUCCEEDED': {
      return {
        ...state,
        loginSuccess: true,
        token: action.payload.accessToken,
      }
    }

    default:
      return state;
  }
}