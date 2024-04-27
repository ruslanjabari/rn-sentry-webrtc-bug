import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/react-native";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "<YOUR_DSN>",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const vapi = new Vapi("<YOUR_API_KEY>");

export default Sentry.wrap(function App() {
  useEffect(() => {
    let connect = async () => {
      vapi.start("<YOUR_ROOM_URL>");
      vapi.setMuted(false);
    };

    connect();
    return () => {
      vapi.setMuted(true);
      vapi.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
