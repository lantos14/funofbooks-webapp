import { combineReducers } from 'redux';
import BookList from './BookList';
import User from './User';

const rootReducer = combineReducers({
  BookList,
  User,
});

export default rootReducer;
