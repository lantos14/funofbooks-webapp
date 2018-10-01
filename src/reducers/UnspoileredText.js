export default function unspoileredText(state = {
  storyData: {}
}, action) {
  switch (action.type) {
    case 'UNSPOILERED_TEXT_SUCCEEDED': {
      return {
        ...state,
        storyData: action.payload,
      };
    }

    default:
      return state;
  }
}
