import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Auth, Home } from './src';
import { theme } from './src/constants';
import { Provider } from './src/context';

export default function App() {
  const [access, setAccess] = useState(false)

  const screenRender = () => {
    return access ? <Home /> :  <Auth setAccess={(value) => setAccess(value)}/>;
  }

  return (
    <View style={styles.container}>
      <Provider>
        {screenRender()}
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
