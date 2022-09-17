import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { theme } from "../constants";
import { Dot, Typography } from "./";

const { width } = Dimensions.get("screen");

const Item = ({ text, removeItem, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <Dot />
      <Typography color={theme.colors.seconderyTextColor} align="left" weight="avarage" style={styles.text}>
        {text}
      </Typography>
      <TouchableOpacity onPress={removeItem} style={styles.button}>
        <Typography color={theme.colors.seconderyTextColor} size="h6" weight="avarage">REMOVE</Typography>
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
    zIndex: 99999
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

export default Item;
