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
