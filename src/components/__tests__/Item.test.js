import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react-native";
import Item from "../Item";

describe("<Item />", () => {
  const item = {
    id: "1",
    text: "Hellow",
  };

  it("has 3 children", () => {
    const tree = renderer.create(<Item {...item} />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  it(`displays the item text as ${item.text}`, () => {
    render(<Item {...item} />);
    expect(screen.queryByText(item.text)).toBeTruthy();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Item {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
