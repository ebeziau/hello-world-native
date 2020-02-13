import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreenStack";
import DetailsScreen from "./DetailsScreenStack";
import ModalScreen from "./ModalScreenStack";

const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Details: {
            screen: DetailsScreen
        }
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                //backgroundColor: "#f4511e"
                backgroundColor: 'red'
            },
            headerTintColor: "#fff", //le fond du header hors page d'accueil
            //headerTintColor: 'red',
            headerTitleStyle: {
                fontWeight: "bold"
            }
        },
        navigationOptions: {
            tabBarLabel: "Home!"
        }
    }
);

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack
        },
        MyModal: {
            screen: ModalScreen
        }
    },
    {
        // Change navigation for modal display
        mode: "modal",
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}