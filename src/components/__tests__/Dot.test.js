import React from "react";
import renderer from "react-test-renderer";
import Dot from "../Dot";

describe("<Dot />", () => {
  it("has no children", () => {
    const tree = renderer.create(<Dot />).toJSON();
    expect(tree.children).toBe(null);
  });

  it("has 20px circle area", () => {
    const tree = renderer.create(<Dot />).toJSON();
    expect(tree.props.style.height).toBe(20);
    expect(tree.props.style.width).toBe(20);
    expect(tree.props.style.borderRadius).toBe(10);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Dot />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
