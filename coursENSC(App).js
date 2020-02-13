import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight,
    FlatList
} from "react-native";
import ModuleItem from "./ModuleItem";

const DATA = [
    {
        id: 1,
        name: "Introduction à la programmation",
        description: "jsikjcxsl njuii jokolkl jikjol",
        respName: "P.A.Favier",
        year: "1A",
        imageLink: "./computer.png"
    },
    {
        id: 2,
        name: "Mathématiques",
        description: "J'aime les maths",
        respName: "J.Saracco",
        year: "1A",
        imageLink: "./calculator.png"
    },
    {
        id: 3,
        name: "Robotique",
        description: "Les robots sont nos amis",
        respName: "J.M.Salotti",
        year: "2A",
        imageLink: "./robot.png"
    }
];

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { cours: [], annee: "" };
    }

    _appearButton = () => { //fonction en flèche car on veut this.state pour l'objet racine
        //alert("You tapped the button!");
        this.setState({ cours: DATA });
        this.setState({ annee: "" });
    }

    _disappearButton = () => { //fonction en flèche car on veut this.state pour l'objet racine
        //alert("You tapped the button!");
        this.setState({ cours: [] });
        this.setState({ annee: "" });
    }

    _yearSort = (text) => {
        this.setState({ annee: text });
        if (text === "1A") {
            let dataTri = []
            DATA.forEach(element => {
                if (element.year === "1A") { dataTri = [element, ...dataTri]; }
            });
            this.setState({ cours: dataTri });
        }
        if (text === "2A") {
            let dataTri = []
            DATA.forEach(element => {
                if (element.year === "2A") { dataTri = [element, ...dataTri]; }
            });
            this.setState({ cours: dataTri });
        }
    }

    render() {
        return (
            <View style={styles.main}>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Année"
                        onChangeText={text => this._yearSort(text)}
                        value={this.state.annee}
                    />
                </View>


                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={() => this._appearButton()}
                        underlayColor="lightgray"
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Faire apparaître les cours</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => this._disappearButton()}
                        underlayColor="lightgray"
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Faire disparaître les cours</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.container}>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.cours}
                        keyExtractor={cours => cours.id.toString()}
                        renderItem={({ item }) => <ModuleItem cours={item} />}
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
    buttonContainer: {
        flex: 1,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 6,
        flexDirection: "column",
        marginTop: 30
        //justifyContent: "center"
        //alignItems: "center"
    },
    flatList: {
        //flex: 1
    },
    button: {
        marginVertical: 5,
        width: 260,
        height: 50,
        alignItems: "center",
        backgroundColor: "blue"
    },
    buttonText: {
        textAlign: "center",
        paddingTop: 10,
        color: "white"
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 20,
        width: 260,
        textAlign: "center"
    }
});
