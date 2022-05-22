import React from "react";
import { View, Text, TextInput, Button } from "react-native";

function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Usuario" />
      <TextInput placeholder="Contraseña" />
      <Button
        title="Enviar"
        onPress={() => console.log("Enviando informacion")}
      />
    </View>
  );
}

export default LoginForm;
