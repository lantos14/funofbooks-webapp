export default function User(state = {
  regInProgress: false,
  regSuccess: null,
  regErrorMsg: null,
  regerrorType: null,
  loginInProgress: false,
  loginSuccess: null,
  token: localStorage.getItem('TOKEN'),
  username: null,
  email: null,
}, action) {
  switch (action.type) {

    // === REGISTRATION ===

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

    // === LOGIN ===

    case 'LOGIN_SUCCEEDED': {
      return {
        ...state,
        loginSuccess: true,
        loginInProgress: false,
        token: action.payload.accessToken,
        email: action.payload.email,
        username: action.payload.username,
      }
    }

    case 'LOGIN_FAILED': {
      return {
        ...state,
        loginSuccess: false,
        loginInProgress: false,
      }
    }

    case 'LOGIN_REQUESTED': {
      return {
        ...state,
        loginInProgress: true,
      }
    }

    case 'LOGOUT_REQUESTED': {
      return {
        ...state,
        token: undefined,
      }
    }

    case 'EXTRACT_TOKEN_DATA_SUCCEEDED': {
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
      }
    }


    default:
      return state;
  }
}
