import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { LoadingView, Typography } from "../../components";
import { theme, strings } from "../../constants";

const Authentication = ({ setAccess }) => {
  const [biometrics, setBiometrics] = useState(false);
  const [loading, setLoading] = useState(false);

  const check = async () => {
    try {
      setLoading(true);
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setBiometrics(compatible);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const authentication = async () => {
    try {
      const { error, warning, success } =
        await LocalAuthentication.authenticateAsync();

      if (error != null) {
        throw warning;
      }

      setAccess(success);
    } catch (error) {
      Alert.alert("Error: ", error);
      openSettings();
    }
  };

  const openSettings = () => {
    if (Platform.OS === "android") {
      Linking.sendIntent("android.settings.SECURITY_SETTINGS");
    } else {
      Linking.openSettings();
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <View style={styles.container}>
      <LoadingView enable={loading} />
      <View style={styles.footer}>
        {!biometrics && <Typography space={1} align={'center'} >{strings.AUTHENTICATION_SCREEN.DEVICE_CAPABILITY}</Typography>}
        <Typography size={'h5'} weight={'lightBold'}>{strings.AUTHENTICATION_SCREEN.PROCCED_TEXT}</Typography>
        <TouchableOpacity
          onPress={() => authentication()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{strings.AUTHENTICATION_SCREEN.SETTINGS_BUTTON}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 8,
    marginBottom: 60,
    padding: 8,
    backgroundColor: "#333333",
    borderRadius: 20,
    width: 160,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: theme.colors.primary
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "500",
  },
});

export default Authentication;
