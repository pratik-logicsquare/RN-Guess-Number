import { View, Text, StyleSheet } from "react-native";
import { Title } from "../components/UI";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

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
