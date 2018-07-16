import React from "react";
import { shallow } from "enzyme";
import { Card } from "./Card";

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