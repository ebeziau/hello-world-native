import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.state = { count: 0 };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text =>
            this.setState({ text, count: this.state.count + 1 })
          }
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>{this.state.count}</Text>
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
