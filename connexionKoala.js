import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight
} from "react-native";

const comptes = [
  { login: "Eva", password: "Beziau" },
  { login: "Test", password: "Test" },
  { login: "Azerty", password: "Uiop" }
];

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };
  }

  _onPressButton = cle => {
    if (cle == "connexion") {
      let verif = false;
      comptes.forEach(element => {
        if (
          this.state.login == element.login &&
          this.state.password == element.password
        ) {
          verif = true;
        }
      });
      verif == true
        ? alert("Tu es connecté.e")
        : alert("Erreur d'identifiants");

      /*if (this.state.login == "Eva" && this.state.password == "Eva") {
        alert("Bien joué !");
      } else {
        alert("Nope");
      }*/
    }
    if (cle == "inscription") {
      alert("Inscription");
    }
    if (cle == "mdpOublie") {
      alert("Mot de passe oublié");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("./koala.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={login => this.setState({ login })}
          value={this.state.login}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Mot de passe"
          textContentType="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableHighlight
          onPress={() => this._onPressButton("connexion")}
          underlayColor="lightgray"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => this._onPressButton("mdpOublie")}
          underlayColor="lightgray"
        >
          <View style={styles.link}>
            <Text style={styles.linkText}>Mot de passe oublié</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => this._onPressButton("inscription")}
          underlayColor="lightgray"
        >
          <View style={styles.link}>
            <Text style={styles.linkText}>S'inscrire</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 70,
    marginVertical: 20
  },
  textInput: {
    height: 40,
    backgroundColor: "white",
    width: 200,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  button: {
    marginVertical: 20,
    width: 200,
    alignItems: "center",
    backgroundColor: "lightskyblue",
    borderRadius: 20
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  },
  link: {
    marginVertical: 20,
    alignItems: "center"
  },
  linkText: {
    textAlign: "center",
    color: "black"
  }
});
