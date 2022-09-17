import React from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Typography } from "../../components";
import { theme, strings } from "../../constants";

const Home = () => {
  return (
    <View style={styles.container}>
      <Typography color={theme.colors.primary} align="left" weight="midBold" size="h2">{strings.HOME.TITLE}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});

export default Home;
