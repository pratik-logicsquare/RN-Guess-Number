import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { GameOverScreen, GameScreen, StartGameScreen } from "./screens";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const _onPickNumber = (number) => {
    setUserNumber(number);
    setGameIsOver(false);
  };

  const _handleGameOver = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={_onPickNumber} />;

  if (userNumber)
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={_handleGameOver} />
    );

  if (gameIsOver && userNumber) screen = <GameOverScreen />;

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
