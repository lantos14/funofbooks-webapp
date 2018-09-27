export default function testReducer(state = {
  text: 'waiting for update'
}, action) {
  switch (action.type) {
    case 'ACTION_TEST_INITIATED': {
      return {
        ...state,
        text: action.payload,
      };
    }

    default:
      return state;
  }
}
