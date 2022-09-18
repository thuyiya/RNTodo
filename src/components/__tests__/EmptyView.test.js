import React from "react";
import renderer from "react-test-renderer";
import {render, screen} from '@testing-library/react-native';
import EmptyView from "../EmptyView";
import { strings } from "../../constants";

describe("<EmptyView />", () => {
  it("has 1 children", () => {
    const tree = renderer.create(<EmptyView />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it(`displays the ${strings.EMPTYVIEW.NO_DATA}`, () => {
    render(<EmptyView />);
    expect(screen.queryByText(strings.EMPTYVIEW.NO_DATA)).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<EmptyView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
