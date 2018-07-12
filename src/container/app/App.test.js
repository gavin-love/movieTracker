
import React from "react";
import ReactDOM from "react-dom";

import { App, mapDispatchToProps } from "./App";
import { shallow } from "enzyme";
import CleanMockData from "../../MockData/MockCleanData";

describe("app", () => {
  let mockHandleMovies;
  let wrapper;

  beforeEach(() => {

    mockHandleMovies = jest.fn();
    wrapper = shallow(<App handleMovies={mockHandleMovies} />);
  });

  it.skip("Should call handlesMovies with the correct params", async () => {
    await wrapper.instance().getMovies();

    expect(mockHandleMovies).toHaveBeenCalledWith(CleanMockData);
  });
});

describe("mapDispatch", () => {
  it("should call dispatch with correct params for handleMovies", () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);

    const mockAction = {
      type: "ADD_MOVIES",
      movies: CleanMockData
    };

    mappedProps.handleMovies(CleanMockData);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});
