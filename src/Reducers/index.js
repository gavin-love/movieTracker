import { combineReducers } from "redux";
import addMoviesReducer from "./addMoviesReducer";
import addUsersReducer from "./addUsersReducer";
import { errorReducer } from "./errorReducer";
import { favoriteReducer } from "./favoriteReducer";

const rootReducer = combineReducers({
  movies: addMoviesReducer,
  user: addUsersReducer,
  error: errorReducer,
  favorites: favoriteReducer
});

export default rootReducer;
