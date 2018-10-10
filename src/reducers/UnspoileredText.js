export default function unspoileredText(state = {
  storyData: [],
  selectedBook: '',
}, action) {
  switch (action.type) {
    case 'UNSPOILERED_TEXT_SUCCEEDED': {
      return {
        ...state,
        storyData: action.payload,
      };
    }
    case 'UPDATED_REVIEWED_BOOK_REQUESTED': {
      return {
        ...state,
        selectedBook: action.payload,
      };
    }

    default:
      return state;
  }
}
