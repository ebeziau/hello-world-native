import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

export default class Eva extends Component {
  _onPressButton() {
    alert("You tapped the button!");
    //const Audic = require("audic");

    //new Audic("./got_theme.mp3").play();
  }

  render() {
    return (

      <View>
        <View style={styles.container}>
          <Text>Coucou</Text>
        </View>

        <View style={styles.container}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Nice</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  }
});