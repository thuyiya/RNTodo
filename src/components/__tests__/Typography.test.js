import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react-native";
import Typography from "../Typography";

describe("<LoadingView />", () => {
  const rendetText = "Hello";
  it("has 1 children", () => {
    const tree = renderer
      .create(<Typography>{rendetText}</Typography>)
      .toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("no children text", () => {
    const tree = renderer
      .create(<Typography></Typography>)
      .toJSON();
    expect(tree.children).toBe(null);
  });

    it(`displays the test as ${rendetText}`, () => {
      render(<Typography>{rendetText}</Typography>);
      expect(screen.queryByText(rendetText)).toBeTruthy();
    });

  it("renders correctly", () => {
    const tree = renderer
      .create(<Typography>{rendetText}</Typography>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
