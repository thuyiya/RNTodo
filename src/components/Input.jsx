import React, { useState, useEffect, useRef } from "react";
import {
  Platform,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import PropTypes from 'prop-types';
import { theme } from "../constants";
import Typography from "./Typography";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const BUTTON_WIDTH = 100;

const Input = ({ onChange, value }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const add = () => {
    if (text == "") {
      return;
    }
    onChange(text);
    setText("");
  };

  const keybordApear = () => {
    setText(value);
    if(value !== "") {
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    keybordApear()
  }, [value]);

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        placeholder={"Enter Here..."}
        style={styles.input}
        value={text}
        clearButtonMode={"while-editing"}
        onChangeText={(text) => setText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => add()}>
        <Typography size="h6" weight="lightBold" color={theme.colors.buttonText} >{value === "" ? "ADD" : "UPDATE"}</Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    margin: 8,
    height: 60,
    width: SCREEN_WIDTH - 16,
  },
  input: {
    width: SCREEN_WIDTH - BUTTON_WIDTH,
    padding: 10,
    height: Platform.OS === "ios" ? 40 : 60,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 18,
    height: 40,
    minWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;
