export default function BookList(state = {
  Books: [],
  selectedBook: '',
  loading: false,
}, action) {
  switch (action.type) {
    case 'BOOKLIST_SUCCEEDED': {
      return {
        ...state,
        Books: action.payload,
        loading: false,
      };
    }

    case 'BOOKLIST_REQUESTED': {
      return {
        ...state,
        loading: true,
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
