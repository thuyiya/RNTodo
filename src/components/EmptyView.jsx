import React from "react";
import { View, StyleSheet, Text, Dimensions} from "react-native";
import { theme } from "../constants";
import Typography from "./Typography";

const { width, height } = Dimensions.get('screen')

const EmptryView = () => {
  return (
    <View style={styles.container}>
      <Typography color={theme.colors.disbaleText} >No Todo's Found</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height *0.6,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default EmptryView;
