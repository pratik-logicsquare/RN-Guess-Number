import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import { deviceWidth } from "../../utils/device-dimensions";

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    alignItems: "center",
    gap: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4, // shadow for android
    // shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
