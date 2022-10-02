import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert, StyleSheet, Dimensions } from "react-native";
import Card from "./Card";
import Colors from "../assets/Colors";


const StartScreen = props => {
    const [inputValue, setInputValue] = useState("");
    
    // limit input to be digit only
    const numberInput = inputText => {
        setInputValue(inputText.replace(/[^0-9]/g, ""));
    };

    // reset method
    const resetInput = () => {
        setInputValue("");
    };

    // confirm method
    const confirmInput = () => {
        const valueNum = parseInt(inputValue);
        if (isNaN(valueNum) || valueNum < 1020 || valueNum > 1029){
            Alert.alert("Invalid Number!", "Number has to be a number between 1020 and 1029.", [
                { text: "Okay", onPress: resetInput }
            ]);
            return;
        }
        resetInput();
        props.startgame(parseInt(inputValue));
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Guess My Number</Text>
            <Card style={styles.inputContainer}>
            <Text style={styles.cardTitle}> Enter a Number </Text>
            <TextInput
                style={styles.input}
                keyboardType="phone-pad"
                maxLength={4}
                onChangeText={numberInput}
                placeholder="____"
                value={inputValue}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                <Button
                    color={Colors.purplefont}
                    title="Reset"
                    onPress={resetInput}
                />
                </View>
                <View style={styles.button}>
                <Button
                    color={Colors.redfont}
                    title="Confirm"
                    onPress={confirmInput}
                />
                </View>
            </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        marginTop: 50,
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        color: Colors.purplefont,
        margin: 20,
        borderWidth: 2,
        borderColor: Colors.purplefont,
        padding: 10
    },
    cardTitle:{
        fontSize: 20,
        color: Colors.yellowfont,
        textAlign: "center",
        margin: 20,
    },
    button: {
        width: Dimensions.get('window').width / 4,
    },
    input: {
        height: 30,
        fontSize: 20,
        color: "#b8860b",
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: "center",
    },
    inputContainer: {
        width: "80%",
        maxWidth: "90%",
        minWidth: 250,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
})

export default StartScreen;