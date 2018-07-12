export const addRecentMovies = (allMovies) => {
  return {
    type: 'ADD_MOVIES',
    movies: allMovies
  }
}

export const updateStoreNewUser = (user) => {
  return {
    type: 'ADD_USER',
    user_id: user.id
  }
}