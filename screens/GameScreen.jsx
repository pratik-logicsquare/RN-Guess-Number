import { View, Text, StyleSheet, Alert } from "react-native";
import { PrimaryButton, Title } from "../components/UI";
import NumberContainer from "../components/Game/NumberContainer";
import generateNumberBetween from "../utils/generate-random-number";
import { useEffect, useState } from "react";

let minGuess = 1;
let maxGuess = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const _guessNewNumber = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't Lie",
        "Please play fair. You know that's not correct.",
        [{ text: "Okay", style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") maxGuess = currentGuess;
    else if (direction === "higher") minGuess = currentGuess + 1;

    const newGuessedNumber = generateNumberBetween(
      minGuess,
      maxGuess,
      currentGuess
    );

    setCurrentGuess(newGuessedNumber);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer number={currentGuess} />
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={() => _guessNewNumber("lower")} title="-" />
          <PrimaryButton onPress={() => _guessNewNumber("higher")} title="+" />
        </View>
      </View>

      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 44,
  },
});
