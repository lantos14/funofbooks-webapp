export default function Users(state = {
  email: [],
}, action) {
  switch (action.type) {
    case 'REG_SUCCEEDED': {
      return {
        ...state,
        email: action.payload.email,
      };
    }

    default:
      return state;
  }
}
