import React from "react";
import renderer from "react-test-renderer";
import * as reactRedux from "react-redux";
import { render, screen } from "@testing-library/react-native";
import Home from "../";
import { strings } from "../../../constants";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("<Home />", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  const mockStore = {
    items: [],
  };

  it("has 3 children", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  it(`displays Home title ${strings.HOME.TITLE}`, () => {
    render(<Home />);
    expect(screen.queryByText(strings.HOME.TITLE)).toBeTruthy();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
