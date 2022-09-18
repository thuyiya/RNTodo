import React from "react";
import renderer from "react-test-renderer";
import Auth from "../";

describe("<Auth />", () => {
  it("has 4 children", () => {
    const tree = renderer.create(<Auth />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("Main container shoud coverd with SafeAreaView", () => {
    const tree = renderer.create(<Auth />).toJSON();
    expect(tree.type).toBe('RCTSafeAreaView');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Auth />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
