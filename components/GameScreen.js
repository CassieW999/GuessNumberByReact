import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "./Card";
import Colors from "../assets/Colors";

const GameScreen = props => {
    const correctAnswer = props.expectNum;
    const currentGuess = props.userguess;
    const [hint, setHint] = useState();

    useEffect(() => {
        if (currentGuess > correctAnswer) {
            setHint("lower");
        }else if (currentGuess < correctAnswer){
            setHint("higher");
        }
      });

    return (
        <View style={styles.screen}>
            {correctAnswer == currentGuess ?          
                <Card style={styles.inputContainer}>
                    <Text style={styles.cardTitle}> Congrats! You won! </Text>
                    <Button color={Colors.purplefont} title="Thank you!" onPress={() => props.ingame(true)}/>
                </Card> : null}
            {correctAnswer != currentGuess ? 
                <Card style={styles.inputContainer}>
                    <Text style={styles.cardTitle}> 
                        You have chosen {currentGuess}. That's not my number! Guess {hint}!
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button color={Colors.purplefont} title="I am done" onPress={() => props.ingame(false)}/>
                        <Button color={Colors.redfont} title="Let Me Guess Again" onPress={() => props.reguess()}/>
                    </View>
                  </Card> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "80%",
        maxWidth: "90%",
        minWidth: 250,
        alignItems: "center"
    },
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
        margin: 20,
    },
    buttonContainer: {
        flexDirection: "column",
        width: "90%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});

export default GameScreen;