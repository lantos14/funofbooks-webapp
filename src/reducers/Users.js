export default function Users(state = {
  email: [],
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

    default:
      return state;
  }
}
