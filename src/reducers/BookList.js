export default function BookList(state = {
  Books: [],
  selectedBook: '',
}, action) {
  switch (action.type) {
    case 'BOOKLIST_SUCCEEDED': {
      return {
        ...state,
        Books: action.payload,
      };
    }
    case 'REVIEWED_BOOK_UPDATED': {
      return {
        ...state,
        selectedBook: action.payload,
      };
    }

    default:
      return state;
  }
}
