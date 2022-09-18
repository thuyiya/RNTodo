import React from "react";
import renderer from "react-test-renderer";
import {render, screen} from '@testing-library/react-native';
import LoadingView from "../LoadingView";
import { strings } from "../../constants";

describe("<LoadingView />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<LoadingView enable={true} />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("no tree rendering for no load", () => {
    const tree = renderer.create(<LoadingView enable={false} />).toJSON();
    expect(tree).toBe(null);
  });

  it(`displays the loading test as Loading`, () => {
    render(<LoadingView enable={true} text="Loading" />);
    expect(screen.queryByText("Loading")).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<LoadingView enable={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
