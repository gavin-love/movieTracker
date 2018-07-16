import { favoriteReducer } from './favoriteReducer.js';

describe('favoriteReducer', () => {
  it('should return an array with type addFavorite', () => {
    const mockState = [{movie_id: 2}];
    const mockFavorite = {
      movie_id: 5
    }
    const mockAction = {
      type: 'ADD_FAVORITE', 
      favorite: mockFavorite
    }
    const newState = [{movie_id: 2}, {movie_id: 5}];
    const expected = favoriteReducer(mockState, mockAction);
    expect(expected).toEqual(newState);
  })
})