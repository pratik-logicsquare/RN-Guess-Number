import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import { GameOverScreen, GameScreen, StartGameScreen } from "./screens";
import Colors from "./constants/colors";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // loading custom fonts
  const [fontsLoaded, fontError] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);

  const _onPickNumber = (number) => {
    setUserNumber(number);
    setGameIsOver(false);
  };

  const _handleGameOver = (rounds) => {
    setGameIsOver(true);
    setRounds(rounds);
  };

  const _handleStartNewGame = () => {
    setUserNumber(null);
    setRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={_onPickNumber} />;

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (userNumber)
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={_handleGameOver} />
    );

  if (gameIsOver && userNumber)
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={rounds}
        onStartNewGame={_handleStartNewGame}
      />
    );

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
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
