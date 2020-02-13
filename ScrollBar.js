import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={[styles.container, styles.carre]} />
      <View style={[styles.container2]}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red"
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "yellow"
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green"
          }}
        />
      </View>
      <ScrollView horizontal>
        <View style={[styles.container, styles.carre]} />
        <View style={[styles.container, styles.carre]} />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  container2: {
    flex: 1,
    marginTop: 50
  },
  carre: {
    width: 200,
    height: 200,
    backgroundColor: "skyblue",
    margin: 20
  }
});
