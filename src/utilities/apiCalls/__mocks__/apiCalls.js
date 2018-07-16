export const submitFavorite = jest.fn().mockImplementation(() => Promise.resolve());
export const removeFavorite = jest.fn().mockImplementation(() => Promise.resolve());
export const postNewUser = jest.fn().mockImplementation(() => Promise.resolve( {
  user_id: 1
}));