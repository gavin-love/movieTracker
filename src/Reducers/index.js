import { combineReducers } from 'redux';
import addMoviesReducer from './addMoviesReducer';
import addUsersReducer from './addUsersReducer';

const rootReducer = combineReducers({
  movies: addMoviesReducer,
  users: addUsersReducer
})

export default rootReducer;