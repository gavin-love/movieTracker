import * as actions from "./index";
import CleanMockData from "../MockData/MockCleanData";

describe("addRecentMovie", () => {
  it("should have a type of ADD_MOVIES", () => {
    const allMovies = CleanMockData;
    const actual = actions.addRecentMovies(allMovies);

    expect(actual).toEqual({
      type: "ADD_MOVIES",
      movies: allMovies
    });
  });
});

describe('updateUser', () => {
  it('has a type of ADD_USER', () =>  {
    const mockUser = {
      id: 5,
      name: 'gnjong',
      password: 'a',
      email: 'b'
    }
    const actual = actions.updateUser(mockUser);
    const expected = {
      type: 'ADD_USER',
      user_id: 5
    }
    expect(actual).toEqual(expected);
  })
})

describe('addError', () => {
  it('has a type of ADD_ERROR', () => {
    const mockError = 'error';
    const actual = actions.addError(mockError);
    const expected = {
      type: 'ADD_ERROR',
      error: mockError
    }
    expect(actual).toEqual(expected);
  })
})

describe('addFavorite', () => {
  it('has a type of ADD_FAVORITE', () => {
    const mockFavorite = {
      movie_id: 2
    }
    const actual = actions.addFavorite(mockFavorite);
    const expected = {
      type: 'ADD_FAVORITE',
      favorite: mockFavorite
    }
    expect(actual).toEqual(expected);
  })
})

describe('removeFavoriteFromStore', () => {
  it('has a type of REMOVE_FAVORITE', () => {
    const mockId = 6
    const actual = actions.removeFavoriteFromStore(mockId);
    const expected = {
      type: 'REMOVE_FAVORITE',
      movie_id: mockId
    }
    expect(actual).toEqual(expected);
  })
})

describe('addAllFavorites', () => {
  it('has a type of ADD_FAVORITES', () => {
    const mockFavorites = [{},{},{}];
    const actual = actions.addAllFavorites(mockFavorites);
    const expected = {
      type: 'ADD_FAVORITES',
      favorites: mockFavorites
    }
    expect(actual).toEqual(expected);
  })
})

describe('addLogout', () => {
  it('has a type of LOGOUT_USER', () => {
    const actual = actions.addLogout();
    const expected = {
      type: 'LOGOUT_USER'
    }
    expect(actual).toEqual(expected);
  })
})

describe('emptyFavorites', () => {
  it('has a type of EMPTY_FAVORITES', () => {
    const actual = actions.emptyFavorites();
    const expected = {
      type: 'EMPTY_FAVORITES'
    }
    expect(actual).toEqual(expected);
  })
})

describe('resolveError', () => {
  it('should have a type of CLEAR_ERROR', () => {
    const actual = actions.resolveError();
    const expected = {
      type: 'CLEAR_ERROR'
    }
    expect(actual).toEqual(expected);
  })
})
