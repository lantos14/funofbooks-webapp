import { combineReducers } from 'redux';
import BookList from './BookList';
import Users from './Users';

const rootReducer = combineReducers({
  BookList,
  Users,
});

export default rootReducer;
