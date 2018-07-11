import * as api from "./apiCalls";
import MockData from "../../MockData/MockData";
import { apiKey } from "../../apiKeys";
import CleanMockData from "../../MockData/MockCleanData";

describe("apiCall", () => {
  describe("movieFetch", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(MockData)
        })
      );
    });

    it("should call movieFetch with the correct params", async () => {
      const expected = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;

      await api.movieFetch();

      await expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("should return an object if status: 200", async () => {
      await expect(api.movieFetch()).resolves.toEqual(CleanMockData);
    });
  });
});
