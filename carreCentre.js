import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginTop: 50 }}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            margin: 50
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "yellow",
            margin: 50
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            margin: 50
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
