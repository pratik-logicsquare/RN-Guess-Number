import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/common/PrimaryButton";
import { useState } from "react";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const _onChangeNumber = (number) => {
    setEnteredNumber(number);
  };

  const _resetNumber = () => {
    setEnteredNumber("");
  };

  const _onConfirm = () => {
    const numberInput = parseInt(enteredNumber);

    // show alert if number is invalid
    if (isNaN(numberInput) || numberInput <= 0 || numberInput > 100) {
      Alert.alert(
        "Invalid Number",
        "Number must be a number between 1 and 100",
        [{ text: "Okay", style: "default", onPress: _resetNumber }]
      );
      return;
    }

    // redirect to game screen...
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
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
    backgroundColor: "#3b021f",
    elevation: 4, // shadow for android
    // shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
