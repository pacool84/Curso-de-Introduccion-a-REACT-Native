import React from "react";
import { Text } from "react-native";

function Saludar(props) {
  const { nombre, apellido } = props;
  console.log(nombre, apellido);

  return (
    <Text>
      Hola {nombre} {apellido}
    </Text>
  );
}

export default Saludar;
