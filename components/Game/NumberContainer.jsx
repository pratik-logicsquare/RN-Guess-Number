import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import { deviceWidth } from "../../utils/device-dimensions";

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
    padding: deviceWidth < 380 ? 18 : 36,
    marginVertical: deviceWidth < 380 ? 24 : 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 32 : 36,
    fontFamily: "open-sans-bold",
  },
});
