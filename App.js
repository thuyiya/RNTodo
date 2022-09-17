import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import { Auth, Home } from "./src";
import { theme } from "./src/constants";

export default function App() {
  const [access, setAccess] = useState(false);

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          {access ? <Home /> : <Auth setAccess={(value) => setAccess(value)} />}
        </PersistGate>
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
