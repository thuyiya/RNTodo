import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react-native";
import Input from "../Input";

describe("<Input />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("on change text", () => {
    const onChangeTextMock = jest.fn();
    const CHANGE_TEXT = "content";
    render(<Input onChange={onChangeTextMock}/>);
    fireEvent.changeText(screen.getByTestId("input1"), CHANGE_TEXT);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
