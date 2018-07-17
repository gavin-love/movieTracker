export const submitFavorite = jest.fn().mockImplementation(() => Promise.resolve());
export const removeFavorite = jest.fn().mockImplementation(() => Promise.resolve());
export const postNewUser = jest.fn().mockImplementation(() => Promise.resolve( {
  id: 1
}));
export const getUser = jest.fn().mockImplementation(() => Promise.resolve({
  data: {
    id: 1,
    name: 'tim',
    password: 'password',
    email: 'email'
  }
}))