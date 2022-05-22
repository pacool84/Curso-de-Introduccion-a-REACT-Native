import { StyleSheet, Text, View } from "react-native";
import Saludar from "./src/components/Saludar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello My new Friend REACT NATIVE</Text>
      <Text>😁 👍🏻</Text>
      <Saludar nombre="Sebastian" apellido="Lopez" />
      <Saludar nombre="Brenda" apellido="Rosales" />
      <Saludar nombre="Francisco" apellido="Lòpez" />
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
