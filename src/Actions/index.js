export const addRecentMovies = allMovies => {
  return {
    type: "ADD_MOVIES",
    movies: allMovies
  };
};

export const updateUser = user => {
  return {
    type: "ADD_USER",
    user_id: user.id
  };
};

export const addError = error => {
  return {
    type: "ADD_ERROR",
    error
  };
};

export const addFavorite = favorite => {
  return {
    type: "ADD_FAVORITE",
    favorite
  };
};

export const removeFavoriteFromStore = movie_id => {
  return {
    type: "REMOVE_FAVORITE",
    movie_id
  };
};

export const addAllFavorites = favorites => {
  return {
    type: "ADD_FAVORITES",
    favorites
  };
};

export const addLogout = () => {
  return {
    type: "LOGOUT_USER"
  };
};

export const emptyFavorites = () => {
  return {
    type: "EMPTY_FAVORITES"
  };
};

export const resolveError = () => {
  return {
    type: "CLEAR_ERROR"
  };
};
