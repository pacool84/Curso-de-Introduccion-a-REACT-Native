import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello My new Friend REACT NATIVE</Text>
      <Text>😁 👍🏻</Text>
      <Text>From my Jarvis 13</Text>
      <LoginForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
