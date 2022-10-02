import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import FinalScreen from './components/FinalScreen';

export default function App() {
  // status: 1) start 2) game 3) gameover
  const [status, setStatus] = useState("start");
  const [currentGuess, setCurrentGuess] = useState('');
  const [userwin, setUserwin] = useState(false);
  const [correctAnswer, setNewToken] = useState(1025);

  const startGame = (selectedNumber) => {
    setCurrentGuess(selectedNumber);
    setStatus("game");
  }

  const inGame = (flag) => {
    setUserwin(flag);
    setStatus("gameover");
  }

  const gameover = () => {
    setStatus("start");
    setUserwin(false);
    setNewToken(Math.floor(Math.random() * 10) + 1020);
  }

  const reguess = () => {
    setStatus("start");
  }

  let content = null;
  switch (status) {
    case 'start':
      content = <StartScreen startgame={startGame}/>
      break;
    case 'game':
      content = <GameScreen ingame={inGame} reguess={reguess} userguess={currentGuess} expectNum={correctAnswer}/>
      break;
    case 'gameover':
      content = <FinalScreen gameover={gameover} userwin={userwin} />
      break;
    default:
      break;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffccff', '#ee82ee']}
        style={styles.lineargradient}
      >
      {content}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  lineargradient: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%"
  }
});
