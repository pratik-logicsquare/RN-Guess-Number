import { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Card, InstructionText, PrimaryButton, Title } from "../components/UI";
import { FontAwesome } from "@expo/vector-icons";
import NumberContainer from "../components/Game/NumberContainer";
import generateNumberBetween from "../utils/generate-random-number";

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
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => _guessNewNumber("lower")}>
              <FontAwesome name="minus" size={16} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => _guessNewNumber("higher")}>
              <FontAwesome name="plus" size={16} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
