import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Card, InstructionText, PrimaryButton, Title } from "../components/UI";
import { FontAwesome } from "@expo/vector-icons";
import NumberContainer from "../components/Game/NumberContainer";
import generateNumberBetween from "../utils/generate-random-number";
import GuessLogItem from "../components/Game/GuessLogItem";

let minGuess = 1;
let maxGuess = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width } = useWindowDimensions();

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
    setGuessRounds((prevGuessRounds) => [newGuessedNumber, ...prevGuessRounds]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds?.length);
      minGuess = 1;
      maxGuess = 100;
    }
  }, [currentGuess, userNumber, onGameOver]);

  let content = (
    <>
      <NumberContainer number={currentGuess} />
      <Card style={styles.card}>
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
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => _guessNewNumber("lower")}>
              <FontAwesome name="minus" size={16} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer number={currentGuess} />
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => _guessNewNumber("higher")}>
              <FontAwesome name="plus" size={16} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <FlatList
        data={guessRounds}
        renderItem={({ item, index }) => (
          <GuessLogItem
            roundNumber={guessRounds?.length - index}
            guess={item}
          />
        )}
        keyExtractor={(_, index) => index}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 44,
  },
  card: {
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    gap: 16,
  },
});
