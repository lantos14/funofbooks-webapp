export default function Users(state = {
  email: '',
  isAuthenticated: false,
  isAuthenticating: false,
  loginFailed: null,
  token: null,
  regSuccess: null,
}, action) {
  switch (action.type) {
    case 'REG_SUCCEEDED': {
      return {
        ...state,
        email: action.payload.email,
        regSuccess: true,
      };
    }
    case 'REG_FAILED': {
      return {
        ...state,
        regSuccess: false,
      };
    }

    case 'USER_LOGIN_REQUESTED': {
      return {
        ...state,
        isAuthenticating: true,
        email: action.values.email,
        password: action.values.pwd,
      };
    }

    case 'RESTORE_USER_BY_TOKEN_SUCCEEDED': {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.token,
        email: action.user.email,
      };
    }
    
    case 'LOGIN_SUCCEEDED': {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        email: action.email,
      };
    }

    case 'LOGIN_FAILED': {
      return {
        ...state,
        isAuthenticating: false,
        loginFailed: true,
      };
    }

    default:
      return state;
  }
}
