import * as api from "./apiCalls";
import MockData from "../../MockData/MockData";
import {
  apiKey
} from "../../apiKeys";
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

  describe('submitFavorite', () => {
    let mockFavorite;
    let mockUser;
    let mockMovie;

    beforeEach(() => {
      mockFavorite = {
        id: 2,
        image: 'movie',
        rating: 3,
        summary: 'path'
      }

      mockUser = {
        user_id: 2
      }

      mockMovie = {
        id: 2,
        image: 'movie',
        rating: 3,
        summary: 'path'
      }

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockFavorite)
        }))
    })
    it('should be called with the correct params', async () => {
      const expected = [
        "http://localhost:3000/api/users/favorites/new",
        {
          body: JSON.stringify({
            user_id: mockUser.user_id,
            ...mockMovie
          }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        }
      ];
      await api.submitFavorite(mockFavorite, mockUser);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    })
  })

  describe('removeFavorite', () => {
    it('should be called with the correct params', async () => {
      const mockUser = {
        user_id: 5,
        movie_id: 5
      }

      const mockRemove = {
        method: 'DELETE'
      }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200
      }))

      const url = `http://localhost:3000/api/users/${mockUser.user_id}/favorites/${mockUser.movie_id}`

      await api.removeFavorite(mockUser)

      expect(window.fetch).toHaveBeenCalledWith(url, mockRemove)
    });
  });

  describe('getFavorites', () => {
    let mockUser;
    let mockFavorites;

    beforeEach(() => {
      mockUser = {
        user_id: 5,
      }
      mockFavorites = [{
        id: 2,
        image: 'movie',
        rating: 3,
        summary: 'path'
      }]
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockFavorites)
      }))
    });

    it('call getFavorites with the correct params', async () => {
      const userId = mockUser.user_id
      const url = `http://localhost:3000/api/users/${userId}/favorites`

      await api.getFavorites(userId)

      expect(window.fetch).toHaveBeenCalledWith(url)
    });

    it('should return an array of favorites', async () => {
      const userId = mockUser.user_id
      const actual = await api.getFavorites(userId)

      expect(actual).toEqual(mockFavorites)
    });
  });
});