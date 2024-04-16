import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { Card, InstructionText, PrimaryButton, Title } from "../components/UI";
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
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>

        <TextInput
          style={styles.chosenNumber}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={_onChangeNumber}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={_resetNumber}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={_onConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  chosenNumber: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontFamily: "open-sans-bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
