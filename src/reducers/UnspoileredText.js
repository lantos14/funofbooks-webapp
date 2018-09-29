export default function unspoileredText(state = {
  text: 'waiting for update'
}, action) {
  console.log('reducer is in action');
  switch (action.type) {
    case 'UNSPOILERED_TEXT_REQUESTED': {
      return {
        ...state,
        text: 'success',
      };
    }

    default:
      return state;
  }
}
