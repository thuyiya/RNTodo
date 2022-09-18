import React from "react";
import renderer from "react-test-renderer";
import { Text } from 'react-native';
import List from "../List";

describe("<List />", () => {
  it("has empty children", () => {
    const tree = renderer.create(<List></List>).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("has 1 children", () => {
    const tree = renderer.create(<List>
        <Text>Hi 1</Text>
    </List>).toJSON();
    expect(tree.children[0].children.length).toBe(1);
  });

  it("wrap with ScrollView", () => {
    const tree = renderer.create(<List></List>).toJSON();
    expect(tree.type).toBe("RCTScrollView");
  });

  it("renders correctly", () => {
    const tree = renderer.create(<List></List>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
