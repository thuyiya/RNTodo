import React from "react";
import { View, StyleSheet, Text, Dimensions} from "react-native";
import { theme } from "../constants";

const { width, height } = Dimensions.get('screen')

const EmptryView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Todo's Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height *0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.colors.disbaleText,
  },
});

export default EmptryView;
