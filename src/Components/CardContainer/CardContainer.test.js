import React from "react";
import { CardContainer, mapStateToProps } from "../CardContainer/CardContainer";
import { shallow } from "enzyme";

describe("CardContainer", () => {
  it("should match the snapshot", () => {
    const mockProps = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };

    const wrapper = shallow(<CardContainer {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    const mockState = {
      movies: [{}, {}, {}]
    };

    const expected = {
      movies: [{}, {}, {}]
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
