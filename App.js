import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { GameScreen, StartGameScreen } from "./screens";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const _onPickNumber = (number) => {
    setUserNumber(number);
  };

  const screen = userNumber ? (
    <GameScreen />
  ) : (
    <StartGameScreen onPickNumber={_onPickNumber} />
  );

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
