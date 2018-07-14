import React from "react";
import { shallow } from "enzyme";
import { Card } from "./Card";

describe("Card", () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      rating: 345,
      summary: "what?",
      image: "www.moviesarefoolish.com"
    };

    wrapper = shallow(<Card {...mockProps} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
