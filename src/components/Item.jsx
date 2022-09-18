import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import { theme } from "../constants";
import Typography from "./Typography";
import Dot from "./Dot";

const { width } = Dimensions.get("screen");

const Item = ({
  text,
  removeItem,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      testID={"button1"}
      onPress={onSelect}
      style={styles.container}
    >
      <Dot />
      <Typography
        color={theme.colors.seconderyTextColor}
        align="left"
        weight="avarage"
        style={styles.text}
      >
        {text}
      </Typography>
      <TouchableOpacity
        testID={"button2"}
        onPress={removeItem}
        style={styles.button}
      >
        <Typography
          color={theme.colors.seconderyTextColor}
          size="h6"
          weight="avarage"
        >
          REMOVE
        </Typography>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    margin: 8,
    borderRadius: 24,
    padding: 16,
  },
  button: {
    width: 80,
    padding: 8,
    zIndex: 99999,
  },
  text: {
    marginLeft: 8,
    width: width * 0.6,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

Item.propTypes = {
  text: PropTypes.string.isRequired,
  removeItem: PropTypes.func,
  onSelect: PropTypes.func,
};

export default Item;
