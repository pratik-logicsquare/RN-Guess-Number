import { StyleSheet, Text } from "react-native";
import { deviceWidth } from "../../utils/device-dimensions";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: deviceWidth < 380 ? 20 : 24,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    textTransform: "uppercase",
    maxWidth: "80%",
    width: 300,
  },
});
