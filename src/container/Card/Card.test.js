import React from "react";
import { shallow } from "enzyme";
import { Card } from "./Card";
import { submitFavorite, removeFavorite } from '../../utilities/apiCalls/apiCalls';

jest.mock('../../utilities/apiCalls/apiCalls');

describe("Card", () => {
  let mockProps;
  let wrapper;
  let mockHandleSubmitFavorite
  let mockHandleRemoveFavorite

  beforeEach(() => {
    mockProps = {
      vote_average: 345,
      overview: "what?",
      poster_path: "www.moviesarefoolish.com",
      release_date: 56,
      title: 'movie',
      movie_id: 4,
      user: {
        user_id: 6
      },
      favorites: [{}, {}, {}]
    };

    mockHandleSubmitFavorite = jest.fn();

    mockHandleRemoveFavorite = jest.fn();

    wrapper = shallow(<Card {...mockProps} 
      handleRemoveFavorite={mockHandleRemoveFavorite}
      handleSubmitFavorite={mockHandleSubmitFavorite}
      />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('handleSubmitFavorite', () => {
  let mockProps;
  let wrapper;
  let mockSubmitFavorite
  let mockRemoveFavorite

    beforeEach(() => {
      mockSubmitFavorite = jest.fn();

      mockRemoveFavorite = jest.fn();

      mockProps = {
        vote_average: 345,
        overview: "what?",
        poster_path: "www.moviesarefoolish.com",
        release_date: 56,
        title: 'movie',
        movie_id: 4,
        user: {
          user_id: 6
        },
        favorites: [{}, {}, {}],
        handleFavorite: mockSubmitFavorite,
        removeFavorite: mockRemoveFavorite
      };

    wrapper = shallow(<Card {...mockProps} />);

    wrapper.find('.favorite_button').simulate('click');
  });
    it('should call submitFavorite', () => {
      const mockParams = {
        movie_id: 6,
        user_id: 4
      }
      expect(submitFavorite).toHaveBeenCalledWith(mockProps, mockProps.user);
    })
})