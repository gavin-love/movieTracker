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
