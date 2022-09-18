import React from "react";
import renderer from "react-test-renderer";
import * as reactRedux from 'react-redux';
import Home from "../";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));


describe("<Home />", () => {
    beforeEach(() => {
        useDispatchMock.mockImplementation(() => () => {});
        useSelectorMock.mockImplementation(selector => selector(mockStore));
    })
    afterEach(() => {
        useDispatchMock.mockClear();
        useSelectorMock.mockClear();
    })

    const useSelectorMock = reactRedux.useSelector;
    const useDispatchMock = reactRedux.useDispatch;

    const mockStore = {
        items: []
    };

  it("has 3 children", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(3);
  });

    it('renders correctly', () => {
      const tree = renderer.create(<Home />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
