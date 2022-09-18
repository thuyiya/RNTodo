import React from "react";
import renderer from "react-test-renderer";
import Dot from "../Dot";

describe("<Dot />", () => {
  it("has no children", () => {
    const tree = renderer.create(<Dot />).toJSON();
    expect(tree.children).toBe(null);
  });

//   it("Main container shoud coverd with SafeAreaView", () => {
//     const tree = renderer.create(<Auth />).toJSON();
//     expect(tree.type).toBe('RCTSafeAreaView');
//   });

//   it('renders correctly', () => {
//     const tree = renderer.create(<Home />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
});
