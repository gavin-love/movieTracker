export const addRecentMovies = (allMovies) => {
  return {
    type: 'ADD_MOVIES',
    movies: allMovies
  }
}

export const updateUser = (user) => {
  return {
    type: 'ADD_USER',
    user_id: user.id
  }
}

export const addError = (error) => {
  return {
    type: 'ADD_ERROR',
    error
  }
}
