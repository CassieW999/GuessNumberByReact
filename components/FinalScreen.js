import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from "react-native";
import Card from "./Card";
import Colors from "../assets/Colors";

const FinalScreen = props => {
    const userwin = props.userwin;

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game is Over!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.cardTitle}>Here is your picture</Text>
                <View style={styles.imageContainer}>
                {userwin ? <Image source={require("../assets/correctans.jpeg")} style={styles.image}/> 
                    : <Image source={require("../assets/sad-face.jpeg")} style={styles.image}/> 
                }
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button
                        color={Colors.redfont}
                        title="Start Again"
                        onPress={() => props.gameover()}
                    />
                    </View>
                </View>
            </Card>
            
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        marginTop: 50,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: Colors.purplefont,
        margin: 20,
        borderWidth: 1,
        borderColor: Colors.purplefont,
        padding: 10
    },
    cardTitle:{
        fontSize: 20,
        color: Colors.yellowfont,
        textAlign: "center",
        margin: 10,
    },
    button: {
        width: Dimensions.get('window').width / 2,
        margin: 20
    },
    inputContainer: {
        width: "80%",
        maxWidth: "90%",
        minWidth: 250,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "column",
        width: "90%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    imageContainer: {
        width: "80%",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100
    }
});

export default FinalScreen;