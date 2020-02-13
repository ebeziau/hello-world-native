import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carre} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  taille: {
    fontSize: 50
  },
  carre: {
    width: 200,
    height: 200,
    backgroundColor: "skyblue",
    borderRadius: 10,
    borderColor: "steelblue",
    borderWidth: 2
  }
});
