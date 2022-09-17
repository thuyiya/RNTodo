import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Auth, Home } from './src';



export default function App() {
  const [access, setAccess] = useState(false)

  const screenRender = () => {
    return access ? <Home /> :  <Auth setAccess={(value) => setAccess(value)}/>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {screenRender()}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
