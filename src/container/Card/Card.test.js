import React from "react";
import { shallow } from "enzyme";
import { Card, mapStateToProps, mapDispatchToProps } from "./Card";
import { submitFavorite, removeFavorite } from '../../utilities/apiCalls/apiCalls';

jest.mock('../../utilities/apiCalls/apiCalls');

describe("Card", () => {
  let mockProps;
  let wrapper;
  let mockHandleSubmitFavorite
  let mockHandleRemove

  beforeEach(() => {

    mockHandleRemove = jest.fn();

    mockProps = {
      vote_average: 345,
      overview: "what?",
      poster_path: "www.moviesarefoolish.com",
      release_date: 56,
      title: 'movie',
      movie_id: 1,
      user: {
        user_id: 2
      },
      favorites: [{movie_id:1}, {}, {}],
      handleRemove: mockHandleRemove
    };

    mockHandleSubmitFavorite = jest.fn();


    wrapper = shallow(<Card {...mockProps} 
      handleRemoveFavorite={mockHandleRemove}
      handleSubmitFavorite={mockHandleSubmitFavorite}
      />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

describe('handleSubmitFavorite', () => {
  let mockProps;
  let wrapper;
  let mockSubmitFavorite
  let mockHandleRemove

    beforeEach(() => {
      mockSubmitFavorite = jest.fn();
      mockHandleRemove = jest.fn();

      mockProps = {
        vote_average: 345,
        overview: "what?",
        poster_path: "www.moviesarefoolish.com",
        release_date: 56,
        title: 'movie',
        movie_id: 4,
        user: {
          user_id: 2
        },
        favorites: [{movie_id: 1}, {}, {}],
        handleFavorite: mockSubmitFavorite,
        handleRemove: mockHandleRemove
      };

    wrapper = shallow(<Card {...mockProps} />);

    wrapper.find('.favorite_button').simulate('click');
  });
    it('should call submitFavorite', () => {
      const mockParams = {
        movie_id: 2,
        user_id: 4
      }
      expect(submitFavorite).toHaveBeenCalledWith(mockProps, mockProps.user);
    })
  it('should call handleFavorite with the correct params', () => {
    expect(mockSubmitFavorite).toHaveBeenCalledWith(mockProps);
  })
})

describe('removeFavorites', () => {
  let handleRemove;
  beforeEach(() => {
    handleRemove = jest.fn()
    wrapper.find('.remove_button').simulate('click');
  });

  it('should call removeFavorites', () => {
    const mockParams = {
      movie_id: 1,
      user_id: 2
    }
    expect(removeFavorite).toHaveBeenCalledWith(mockParams);
  })
  it('should call handleRemove with the correct parameters', () => {
    expect(mockHandleRemove).toHaveBeenCalledWith(1);
  })
})
})

describe('mapStateToProps', () => {
  it('should return an object', () => {
    const mockState = {
     user: 'ben', 
     favorites: []
    }
    const expected = {
      user: 'ben', 
     favorites: []
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
})

describe('mapDispatchToProps', () => {
  it('should call dispatch on handleFavorite with the correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockAction = {
      type: 'ADD_FAVORITE',
      favorite: {}
    }
    const mockParam = {};
    mappedProps.handleFavorite(mockParam)
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should call dispatch on handleRemove with the correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockAction = {
      type: 'REMOVE_FAVORITE',
      movie_id: 5
    }
    const mockParam = 5;
    mappedProps.handleRemove(mockParam)
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

    it('should call dispatch on handleRemove with the correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockAction = {
      type: 'ADD_ERROR',
      error: ''
    }
    const mockParam = '';
    mappedProps.handleError(mockParam)
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
})










