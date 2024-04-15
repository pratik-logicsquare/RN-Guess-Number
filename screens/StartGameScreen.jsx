import { View, Text, TextInput } from "react-native";
import PrimaryButton from "../components/common/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton title="Reset" />
      <PrimaryButton title="Confirm" />
    </View>
  );
};

export default StartGameScreen;
