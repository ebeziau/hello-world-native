import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight
} from "react-native";

export default class CocktailItem extends Component {
    /*constructor(props) {
      super(props);
      this.state = { id: "", name: "", description: "", respName: "", year: "", imageLink: ""};
    }*/

    render() {
        const { cocktail } = this.props;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.leftContainer}>
                    <Image style={{ width: 90, height: 90 }} source={{ uri: cocktail.imageLink }} />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.nomCocktail}>{cocktail.name}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        margin: 10,
        padding: 5,
        backgroundColor: "white"
    },
    leftContainer: {
        flex: 1
    },
    rightContainer: {
        flex: 2,
        alignContent: "center"
    },
    nomCocktail: {
        fontWeight: "bold",
        fontSize: 17
    }
});
