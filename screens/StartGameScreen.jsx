import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { PrimaryButton } from "../components/UI";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const _onChangeNumber = (number) => {
    setEnteredNumber(number);
  };

  const _resetNumber = () => {
    setEnteredNumber("");
  };

  const _onConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);

    // show alert if number is invalid
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 100) {
      Alert.alert(
        "Invalid Number",
        "Number must be a number between 1 and 100",
        [{ text: "Okay", style: "default", onPress: _resetNumber }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.chosenNumber}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={_onChangeNumber}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={_resetNumber} title="Reset" />
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={_onConfirm} title="Confirm" />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    alignItems: "center",
    gap: 16,
    marginTop: 100,
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
  chosenNumber: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "50%",
  },
});
