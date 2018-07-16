export const submitFavorite = jest.fn().mockImplementation(() => Promise.resolve());
export const removeFavorite = jest.fn().mockImplementation(() => Promise.resolve());
export const postNewUser = jest.fn().mockImplementation(() => Promise.resolve( {
  id: 1
}));