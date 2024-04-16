import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ number }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{number}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
