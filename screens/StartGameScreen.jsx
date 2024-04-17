import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Card, InstructionText, PrimaryButton, Title } from "../components/UI";
import Colors from "../constants/colors";
import { deviceWidth } from "../utils/device-dimensions";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height } = useWindowDimensions();

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

  const marginTop = height < 380 ? 30 : 80;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess My Number</Title>
          <Card style={styles.card}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    alignItems: "center",
  },
  card: {
    marginTop: deviceWidth < 380 ? 24 : 36,
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
