import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("<App />", () => {
  it("Contain With View", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.type).toBe('View');
  });

  it("No children outside of Provider", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children).toBe(null);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
