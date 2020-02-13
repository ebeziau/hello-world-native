import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight
} from "react-native";

export default class Input extends Component {
  /*constructor(props) {
    super(props);
    this.state = { id: "", name: "", description: "", respName: "", year: "", imageLink: ""};
  }*/

  render() {
    const { cours } = this.props;
    const imageUrl = "https://img.icons8.com/nolan/64/" + cours.imageLink;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.topContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titre}>{cours.name}</Text>
            </View>
            <View style={styles.yearContainer}>
              <Text style={styles.year}>{cours.year}</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text>{cours.description}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Image style={{ width: 90, height: 90 }} source={{ uri: imageUrl }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    //flex: 1,
    flexDirection: "row",
    margin: 20,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 20
  },
  leftContainer: {
    flex: 2
  },
  rightContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  topContainer: {
    flex: 2,
    flexDirection: "row"
  },
  descriptionContainer: {
    flex: 3,
    paddingVertical: 10
  },
  titleContainer: {
    flex: 4
  },
  yearContainer: {
    flex: 1
  },
  titre: {
    fontWeight: "bold",
    fontSize: 17
  },
  year: {
    fontSize: 17
  }
});
