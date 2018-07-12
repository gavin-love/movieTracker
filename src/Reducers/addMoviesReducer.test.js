import addMoviesReducer from "./addMoviesReducer";
import CleanMockData from "../MockData/MockCleanData";

describe("addMoviesReducer", () => {
  it("should return an array of movies when called with the addMovies action", () => {
    const initialState = [];
    const addMoviesAction = {
      type: "ADD_MOVIES",
      movies: CleanMockData
    };

    let newState = addMoviesReducer(initialState, addMoviesAction);

    expect(newState).toEqual(addMoviesAction.movies);
  });
});
