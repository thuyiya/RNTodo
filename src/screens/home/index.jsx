import React from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Typography } from "../../components";
import { theme, strings } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Typography>{strings.HOME.TITLE}</Typography>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: theme.colors.background,
  },
});

export default Home;
