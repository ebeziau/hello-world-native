import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class CompteurMots extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  affiche(text) {
    let compteur = -1;
    textSep = text.split(" ");
    textSep.forEach(element => {
      compteur++;
    });
    return compteur;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.affiche(this.state.text)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10
  }
});
