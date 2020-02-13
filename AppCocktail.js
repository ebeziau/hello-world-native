import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    FlatList
} from "react-native";
import CocktailItem from "./cocktailItem";
import { getCocktailByNameAPI } from "./cocktailAPI";


export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { nomCocktail: "", ingredient: "", cocktails: [] };
    }

    _getCocktailsByName = () => {
        const name = this.state.nomCocktail;
        console.log(name);
        getCocktailByNameAPI(name).then(listOfCocktail =>
            this.setState({ cocktails: listOfCocktail })
        )

        /*let listeFinale = [];
        getCocktailByName(name).then(listOfCocktail =>
          listOfCocktail.forEach(element => {
            if (element.name === name) {
              listeFinale = [element, ...listeFinale];
            }
          })
        );*/
        //this.setState({ cocktails: listOfCocktail });
    };

    render() {

        return (
            <View style={styles.main}>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Recherche par nom"
                        onChangeText={(text) => this.setState({ nomCocktail: text })}
                        onSubmitEditing={() => this._getCocktailsByName()}
                        value={this.state.nomCocktail}
                    //value={text}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Recherche par ingrédient"
                        onChangeText={text => this._ingredientSort(text)}
                        value={this.state.ingredient}
                    />
                </View>


                <View style={styles.flatListContainer}>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.cocktails}
                        keyExtractor={cocktail => cocktail.id.toString()}
                        renderItem={({ item }) => <CocktailItem cocktail={item} />}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "lightgray"
    },
    inputContainer: {
        flex: 1,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    flatListContainer: {
        flex: 6,
        flexDirection: "column",
        marginTop: 30
        //justifyContent: "center"
        //alignItems: "center"
    },
    flatList: {
        //flex: 1
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 20,
        width: 260,
        textAlign: "center",
        margin: 10
    }
});
