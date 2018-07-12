import { combineReducers } from 'redux';
import addMoviesReducer from './addMoviesReducer';
import addUsersReducer from './addUsersReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  movies: addMoviesReducer,
  users: addUsersReducer,
  error: errorReducer
})

export default rootReducer;