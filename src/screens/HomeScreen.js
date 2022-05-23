import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen(props) {
  console.log(props); //Aqui podemos ver los props del objeto NAVIGATION en consola
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings"); // Con el metodo "navigate" podemos hacer la funcionalidad de navegacion entre pantallas
  };
  return (
    <View>
      <Text>Hello my friend HOME SCREEN 🏠</Text>
      <Button title="Ir a Settings" onPress={goToSettings} />
    </View>
  );
}

export default HomeScreen;
