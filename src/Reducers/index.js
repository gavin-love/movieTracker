import { combineReducers } from 'redux';
import addMoviesReducer from './addMoviesReducer';

const rootReducer = combineReducers({
  movies: addMoviesReducer
})

export default rootReducer;