import { View, Text, StyleSheet } from "react-native";
import { Title } from "../components/UI";
import NumberContainer from "../components/Game/NumberContainer";
import generateNumberBetween from "../utils/generate-random-number";

const GameScreen = ({ userNumber }) => {
  const guessedNumber = generateNumberBetween(1, 100, userNumber);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer number={guessedNumber} />

      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
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
