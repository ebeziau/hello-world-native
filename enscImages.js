import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 108, height: 75, margin: 70 }}
        source={require("./ENSC.jpg")}
      />

      <Image
        style={{ width: 108, height: 75, margin: 70 }}
        source={require("./ENSC.jpg")}
      />

      <Image
        style={{ width: 108, height: 75, margin: 70 }}
        source={require("./ENSC.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "center"
  }
});
